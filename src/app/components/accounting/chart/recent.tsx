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
import { Entry } from "@/src/lib/types/accounting";


export default function RecentAccountEntries(params: {
    limit: number
}){
    const [loading, setLoading] = useState<boolean>(true);
    const [entries, setEntries] = useState<Entry[]>();
    const { user, profile } = useAuthContext() as { user: User, profile: Profile };

    const handleDeleteClick = async (entryKey: any) => {
        let response = confirm('Are you sure you want to delete this entry?');
        if(response){
            //Delete Entry
            const entryRef = ref(realtime, `accounting/chart/${entryKey}`);
            remove(entryRef);
            loadEntries();
        } 
    }

    const loadEntries = async() => {
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

            setEntries(entryList.slice(0, params.limit));
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
                    <Link href={`/accounting/chart/edit/${info.getValue()}`} className="hover:underline">
                        Edit
                    </Link>
                    <a className="hover:underline cursor-pointer" onClick={async () => handleDeleteClick(info.getValue())}>
                        Delete
                    </a>
                </span>
            )
        }
    ] as ColumnDef<Entry>[];

    useEffect(() => {
        loadEntries();
    }, [])

    if(loading){
        return (
            <div className="py-5">
                <Spinner />
            </div>
        )
    }

    return (
        <div>
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
        </div>
    );

}