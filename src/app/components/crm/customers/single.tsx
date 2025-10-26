'use client'

import { useEffect, useState } from "react";

import Link from "next/link";

import { Profile, User } from '@/src/lib/types/user';
import { useAuthContext } from '@/src/context/AuthContext';
import { Customer } from "@/src/lib/types/crm";

import { ref, onValue } from "firebase/database";
import { realtime } from "@/src/lib/firebase";

import Spinner from "@/src/app/components/loading/spinner";
import { formatDate, formatTelephone } from "@/src/lib/functions";

export default function SingleCustomer(props: {
    id: string;
}) {
    const [loading, setLoading] = useState<boolean>(true);
    const [customer, setCustomer] = useState<Customer>();
    const { user, profile } = useAuthContext() as { user: User, profile: Profile };

    const loadEntry = async() => {
        setLoading(true);
        const entryRef = ref(realtime, `crm/customer/${props.id}`);
        onValue(entryRef, async(snapshot) => {
            const rawData = snapshot.val();
            const prepData = {
                ...rawData,
                key: snapshot.ref.key
            } as Customer;
            setCustomer(prepData);
            setLoading(false);
        });
    }

    useEffect(() => {
        loadEntry();
    }, []);

    if(loading){
        return (
            <div className="py-5">
                <Spinner />
            </div>
        )
    }

    return (
        <div>
            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
                <article className="space-y-8 text-gray-900">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
                            {customer?.name}
                        </h1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-600">
                            <div className="flex items-center md:space-x-2">
                                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full bg-gray-500 border-gray-300" />
                                <p className="text-sm">Leroy Jenkins • <time dateTime={customer?.createdDate}>{formatDate(new Date(customer?.createdDate || ""), "MM/DD/YYYY")}</time></p>
                            </div>
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • 1,570 views</p>
                        </div>
                    </div>
                    <div className="text-gray-800">
                        <h3>
                            Contact Info
                        </h3>
                        {
                            customer?.companyContact?.email != "example@example.com" ? (
                            <p>
                                Email: <Link className="hover:underline" href={`mailto:${customer?.companyContact?.email?.toString() || ""}`}>{customer?.companyContact?.email}</Link>
                            </p>
                            ) : ""
                        }
                        {
                            customer?.companyContact?.phone != "0" ? (
                            <p>
                                Phone Number: <Link className="hover:underline" href={`tel:${customer?.companyContact?.phone?.toString() || ""}`}>{formatTelephone(customer?.companyContact?.phone || "")}</Link>
                            </p>
                            ) : ""
                        }
                        {
                            customer?.companyContact?.website != "https://example.com" ? (
                            <p>
                                Website: <Link target="_blank" className="hover:underline" href={customer?.companyContact?.website?.toString() || ""}>{customer?.companyContact?.website}</Link>
                            </p>
                            ) : ""
                        }
                    </div>
                </article>
                <div>
                    <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-600">
                        <Link rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-emerald-600 text-gray-50">#MambaUI</Link>
                        <Link rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-emerald-600 text-gray-50">#TailwindCSS</Link>
                        <Link rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-emerald-600 text-gray-50">#Angular</Link>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold">Related posts</h4>
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>
                                <Link rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}