'use client'

import { useEffect, useState, useRef } from "react";

import Link from "next/link";

import { capitalizeEachWord, enumKeys, slugify, toDateInputValue } from '@/src/lib/functions';

import BasicTable from "@/src/app/components/table/basic";
import Spinner from "@/src/app/components/loading/spinner";
import { AlertType, BasicAlert } from "@/src/app/components/alert/basic";
import { ColumnDef } from "@tanstack/react-table";
import { MdAnnouncement } from "react-icons/md";

import { Entry } from "@/src/lib/types/accounting";
import { EntryType } from '@/src/lib/types/accounting';

import { Profile, User } from '@/src/lib/types/user';
import { useAuthContext } from '@/src/context/AuthContext';

import { ref, push, onValue, remove, update } from "firebase/database";
import { realtime } from "@/src/lib/firebase";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/app/components/ui/sheet";

import { Button } from "@/src/app/components/ui/button"
import { Checkbox } from "@/src/app/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldContent,
  FieldSet,
} from "@/src/app/components/ui/field"
import { Input } from "@/src/app/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/app/components/ui/select"
import { Textarea } from "@/src/app/components/ui/textarea"
import { DatePicker } from "@/src/app/components/ui/date-picker";
import { updateEntry } from "@/src/app/accounting/chart/edit/actions";

export default function AllAccountEntries(){

    const [loading, setLoading] = useState<boolean>(true);
    const [entries, setEntries] = useState<Entry[]>();
    const { user, profile } = useAuthContext() as { user: User, profile: Profile };

    const [activeItem, setActiveItem] = useState<Entry>();
    const [open, setOpen] = useState<boolean>(false);
    const [submitting, setSubmitting] = useState<boolean>(false);

    const handleDeleteClick = async (entryKey: any) => {
        let response = confirm('Are you sure you want to delete this entry?');
        if(response){
            //Delete Entry
            const entryRef = ref(realtime, `accounting/chart/${entryKey}`);
            remove(entryRef);
            loadEntries();
        } 
    }

    const handleEditClick = async (entryKey: any) => {
        const active = entries?.filter(obj => obj.key == entryKey)[0] as Entry;
        setActiveItem(active);
    }

    const submitEdit = async (event: any) => {
        event.preventDefault();
        setSubmitting(true);
        const formData = new FormData(event.currentTarget);
        await updateEntry(formData).then(async() => {
            setOpen(false);
            setSubmitting(false);
            await loadEntries();
        });
    }

    function handleChange(e: any) {

    }

    const loadEntries = async() => {
        setEntries([]);
        setLoading(true);
        const entryList = [] as Entry[];
        const entryRef = ref(realtime, 'accounting/chart');
        onValue(entryRef, async(snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const rawData = childSnapshot.val();
                const prepData = {
                    ...rawData,
                    key: childSnapshot.ref.key
                } as Entry;
                entryList.push(prepData);
            });
            setEntries(entryList);
            setLoading(false);
        });
    }

    const tableColumns = [
        {
            header: 'Description',
            accessorFn: row => row.description,
            cell: info => info.getValue()
        },
        {
            header: 'Account Type',
            accessorFn: (row: { type: any; }) => row.type,
            cell: info => info.getValue()
        },
        {
            header: 'Date',
            accessorFn: row => row.date,
            cell: info => info.getValue()
        },
        {
            header: 'Value',
            accessorFn: row => row.value,
            cell: info => info.getValue()
        },
        {
            header: 'Action',
            accessorFn: row => row.key,
            cell: info => (
                <span className="space-x-2">
                    <Link href={`/accounting/chart/view/${info.getValue()}`} className="hover:underline">
                        View
                    </Link>
                    <SheetTrigger asChild>
                        <span onClick={async () => handleEditClick(info.getValue())} className="hover:underline cursor-pointer">
                            Edit
                        </span>
                    </SheetTrigger>
                    <a className="hover:underline cursor-pointer" onClick={async () => handleDeleteClick(info.getValue())}>
                        Delete
                    </a>
                </span>
            )
        }
    ] as ColumnDef<Entry>[];

    const EditForm = () => {
        return (
            <SheetContent>
                <SheetHeader className="mb-5">
                    <SheetTitle>
                        Edit Entry
                    </SheetTitle>
                    <SheetDescription>
                        Edit an accounting entry.
                    </SheetDescription>
                </SheetHeader>
                <FieldSeparator />
                <form className="mt-5" onSubmit={submitEdit}>
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldContent>
                                    <FieldLabel htmlFor="acct-description">
                                        Description
                                    </FieldLabel>
                                    <Input
                                        id="acct-description"
                                        required
                                        name="description"
                                        onChange={handleChange}
                                        defaultValue={activeItem?.description}
                                    />
                                </FieldContent>
                            </Field>
                        </FieldGroup>
                        <FieldGroup>
                            <Field>
                                <FieldContent>
                                    <FieldLabel htmlFor="acct-type">Account Type</FieldLabel>
                                    <Select name="type" defaultValue={activeItem?.type} onValueChange={handleChange}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder={capitalizeEachWord(activeItem?.type || 'Account Type')} />
                                        </SelectTrigger>
                                        <SelectContent id="acct-type" onChange={handleChange}>
                                            {
                                                enumKeys(EntryType).map((value: string, key: number) => (
                                                    <SelectItem key={key} value={value}>
                                                        {capitalizeEachWord(value)}
                                                    </SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                    </Select>
                                </FieldContent>
                            </Field>
                        </FieldGroup>
                        <FieldGroup>
                            <Field>
                                <FieldContent>
                                    <FieldLabel htmlFor="acct-value">
                                        Value
                                    </FieldLabel>
                                    <Input
                                        id="acct-value"
                                        name="value"
                                        onChange={handleChange}
                                        defaultValue={activeItem?.value}
                                        type="number"
                                        step="0.01" 
                                        min="0" 
                                    />
                                </FieldContent>
                            </Field>
                        </FieldGroup>
                        <FieldGroup>
                            <Field>
                                <FieldContent>
                                    <FieldLabel htmlFor="acct-date">
                                        Date
                                    </FieldLabel>
                                    <DatePicker
                                        id="acct-date"
                                        onChange={handleChange}
                                        name="date"
                                        value={activeItem?.date || ''}
                                    />
                                </FieldContent>
                            </Field>
                        </FieldGroup>
                        <Field orientation="horizontal">
                            <Button type="submit" disabled={submitting}>
                                Submit
                            </Button>
                            <Button onClick={() => setOpen(false)} variant="outline" type="button">
                                Cancel
                            </Button>
                        </Field>
                    </FieldSet>
                    <FieldSet className="hidden">
                        <input type="hidden" name="id" value={activeItem?.id} />
                        <input type="hidden" name="key" value={activeItem?.key} />
                        <input type="hidden" name="user" value={user.uid} />
                    </FieldSet>
                </form>
            </SheetContent>
        )
    }

    useEffect(() => {
        loadEntries();
    }, []);

    /*
    useEffect(() => {
        setLoading(true);
        loadEntries();
    }, [updated]);
    */

    if(loading){
        return (
            <div className="py-5">
                <Spinner />
            </div>
        )
    }

    return (
        <div>
            <Sheet open={open} onOpenChange={setOpen}>
                {
                    entries?.length === 0 ? (
                        <BasicAlert 
                            text="No entries exist." 
                            icon={(<MdAnnouncement />)}
                            type={AlertType.ERROR}
                        />
                    ) : (
                        <BasicTable 
                            title="Accounting Entries" 
                            data={entries}
                            columns={tableColumns}
                        />
                    )
                }
                <div className="flex px-5 my-5">
                    <Link href="/accounting/chart/new" className="inline-flex">
                        <Button variant="outline" className="cursor-pointer">
                            Create New Entry
                        </Button>
                    </Link>
                </div>
                <EditForm />
            </Sheet>
        </div>
    );

}