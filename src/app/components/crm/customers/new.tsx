'use client'

import { z } from 'zod';

import { useEffect, useState, FormEvent, ChangeEvent, useActionState, MouseEventHandler } from 'react';

import { Profile, User } from '@/src/lib/types/user';
import { useAuthContext } from '@/src/context/AuthContext';

import { enumKeys, slugify, toDateInputValue } from '@/src/lib/functions';

import { EntryType } from '@/src/lib/types/accounting';
import { createCustomer } from '@/src/app/accounting/customers/new/actions';

import Spinner from '@/src/app/components/loading/spinner';

export default function NewCustomerForm(){

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { user, profile } = useAuthContext() as { user: User, profile: Profile };

    if(!user){
        return (
            <div className="my-5">
                <Spinner />
            </div>
        )
    }

    return (
        <form action={ createCustomer }>
            <fieldset className="fieldset bg-base-200 dark:bg-gray-900 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">
                    Create New Accounting Entry
                </legend>

                <label className="label" htmlFor="customer-company">Company Name</label>
                <input type="text" name="company" id="customer-company" className="input" placeholder="Company Name" required />
                
                <label className="label" htmlFor="customer-email">Company Email</label>
                <input type="email" name="email" id="customer-email" className="input" placeholder="Company Email" />

                <label className="label" htmlFor="customer-phone">Company Phone Number</label>
                <input type="text" name="phone" id="customer-phone" className="input" placeholder="Company Phone Number" />

                <label className="label" htmlFor="customer-website">Company Website</label>
                <input type="text" name="website" id="customer-website" className="input" placeholder="Company Website" />

                <input type="hidden" name="created" value={user.uid} />
                <input type="hidden" name="createdDate" value={toDateInputValue(new Date())} />

                <button onClick={(e) => {e.stopPropagation();}} type="submit" className="btn btn-neutral dark:bg-gray-50 mt-4 hover:bg-gray-800 dark:hover:bg-gray-200">
                    Create Customer
                </button>
            </fieldset>
        </form>
    )
}