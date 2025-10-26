'use client'

import { useEffect, useState } from "react";

import Link from "next/link";

import BasicTable from "@/src/app/components/table/basic";
import Spinner from "@/src/app/components/loading/spinner";
import { AlertType, BasicAlert } from "@/src/app/components/alert/basic";
import { ColumnDef } from "@tanstack/react-table";
import { MdAnnouncement } from "react-icons/md";

import { Profile, User } from '@/src/lib/types/user';
import { useAuthContext } from '@/src/context/AuthContext';

import { ref, push, onValue, remove, update } from "firebase/database";
import { realtime } from "@/src/lib/firebase";
import { Customer, CompanyPerson } from '@/src/lib/types/crm';

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
import { Input } from "@/src/app/components/ui/input";

import { updateCustomer } from "@/src/app/accounting/customers/edit/actions";

export default function AllCustomers(){
    const [loading, setLoading] = useState<boolean>(true);
    const [customers, setCustomers] = useState<Customer[]>();
    const { user, profile } = useAuthContext() as { user: User, profile: Profile };

    const [activeItem, setActiveItem] = useState<Customer>();
    const [open, setOpen] = useState<boolean>(false);
    const [submitting, setSubmitting] = useState<boolean>(false);

    const handleEditClick = async (customerKey: any) => {
        const active = customers?.filter(obj => obj.key == customerKey)[0] as Customer;
        setActiveItem(active);
    }

    const submitEdit = async (event: any) => {
        event.preventDefault();
        setSubmitting(true);
        const formData = new FormData(event.currentTarget);
        await updateCustomer(formData).then(async() => {
            setOpen(false);
            setSubmitting(false);
            await loadCustomers();
        });
    }

    function handleChange(e: any) {

    }

    const handleDeleteClick = async (entryKey: any) => {
        let response = confirm('Are you sure you want to delete this customer?');
        if(response){
            //Delete Customer
            const customerRef = ref(realtime, `crm/customer/${entryKey}`);
            remove(customerRef);
            loadCustomers();
        } 
    }

    const loadCustomers = async() => {
        setLoading(true);
        const customerList = [] as Customer[];
        const customerRef = ref(realtime, `crm/customer`);
        onValue(customerRef, async(snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const rawData = childSnapshot.val();
                const prepData = {
                    ...rawData,
                    key: childSnapshot.ref.key
                } as Customer;
                if(prepData.companyContact.email === 'example@example.com'){
                    prepData.companyContact.email = "";
                }
                if(prepData.companyContact.phone === '0'){
                    prepData.companyContact.phone = "";
                }
                if(prepData.companyContact.website === 'https://example.com'){
                    prepData.companyContact.website = "";
                }
                customerList.push(prepData);
            });
            setCustomers(customerList);
            setLoading(false);
        });
    }

    const tableColumns = [
        {
            header: 'Company Name',
            accessorFn: row => row.name,
            cell: info => info.getValue()
        },
        {
            header: 'Action',
            accessorFn: row => row.key,
            cell: info => (
                <span className="space-x-2">
                    <Link href={`/accounting/customers/view/${info.getValue()}`} className="hover:underline">
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
    ] as ColumnDef<Customer>[];

    const EditForm = () => {
        return (
            <SheetContent>
                <SheetHeader className="mb-5">
                    <SheetTitle>
                        Edit Customer
                    </SheetTitle>
                    <SheetDescription>
                        Edit a customer.
                    </SheetDescription>
                </SheetHeader>
                <FieldSeparator />
                <form className="mt-5" onSubmit={submitEdit}>
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldContent>
                                    <FieldLabel htmlFor="customer-name">
                                        Name
                                    </FieldLabel>
                                    <Input
                                        id="customer-name"
                                        required
                                        onChange={handleChange}
                                        defaultValue={activeItem?.name}
                                        name="company"
                                    />
                                </FieldContent>
                            </Field>
                        </FieldGroup>
                        <FieldGroup>
                            <Field>
                                <FieldContent>
                                    <FieldLabel htmlFor="customer-email">
                                        Email
                                    </FieldLabel>
                                    <Input
                                        id="customer-email"
                                        onChange={handleChange}
                                        defaultValue={activeItem?.companyContact?.email || ""}
                                        type="email"
                                        name="email"
                                    />
                                </FieldContent>
                            </Field>
                        </FieldGroup>
                        <FieldGroup>
                            <Field>
                                <FieldContent>
                                    <FieldLabel htmlFor="customer-phone">
                                        Phone Number
                                    </FieldLabel>
                                    <Input
                                        id="customer-phone"
                                        onChange={handleChange}
                                        defaultValue={activeItem?.companyContact?.phone || ""}
                                        type="text"
                                        name="phone"
                                    />
                                </FieldContent>
                            </Field>
                        </FieldGroup>
                        <FieldGroup>
                            <Field>
                                <FieldContent>
                                    <FieldLabel htmlFor="customer-website">
                                        Website
                                    </FieldLabel>
                                    <Input
                                        id="customer-website"
                                        onChange={handleChange}
                                        defaultValue={activeItem?.companyContact?.website || ""}
                                        type="text"
                                        name="website"
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
        loadCustomers();
    }, []);

    useEffect(() => {
        loadCustomers();
    }, [submitting]);

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
                    customers?.length === 0 ? (
                        <BasicAlert 
                            text="No customers exist." 
                            icon={(<MdAnnouncement />)}
                            type={AlertType.ERROR}
                        />
                    ) : (
                        <BasicTable 
                            title="Accounting Entries" 
                            data={customers}
                            columns={tableColumns}
                            itemsPerPage={2}
                        />
                    )
                }
                <div className="px-5 my-5">
                    <Link href="/accounting/customers/new" className="inline-flex">
                        <Button variant="outline" className="cursor-pointer">
                            Create New Customer
                        </Button>
                    </Link>
                </div>
                <EditForm />
            </Sheet>
        </div>
    )

}