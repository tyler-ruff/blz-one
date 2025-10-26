'use client'

import { z } from 'zod';

import { useEffect, useState, FormEvent, ChangeEvent, useActionState, MouseEventHandler } from 'react';

import { Profile, User } from '@/src/lib/types/user';
import { useAuthContext } from '@/src/context/AuthContext';

import { enumKeys, slugify, toDateInputValue } from '@/src/lib/functions';

import { EntryType } from '@/src/lib/types/accounting';
import { createEntry } from '@/src/app/accounting/chart/new/actions';
import Spinner from '@/src/app/components/loading/spinner';

export default function NewAccountEntryForm(){

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
        <form action={ createEntry }>
            <fieldset className="fieldset bg-base-200 dark:bg-gray-900 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">
                    Create New Accounting Entry
                </legend>

                <label className="label" htmlFor="acct-description">Description</label>
                <input type="text" name="description" id="acct-description" className="input" placeholder="Description" required />
                
                <label className="label" htmlFor="acct-type">Account Type</label>
                <select id="acct-type" name="type" defaultValue="Pick entry type" className="select" required>
                    <option disabled={true}>Pick entry type</option>
                    {
                        enumKeys(EntryType).map((value: string, key: number) => (
                            <option key={key} value={slugify(value)}>
                                {value}
                            </option>
                        ))
                    }
                </select>

                <label className="label" htmlFor="acct-value">Value</label>
                <input type="number" name="value" step="0.01" min="0" id="acct-value" className="input" placeholder="Value of Asset or Liability" />

                <label className="label" htmlFor="acct-date">Date</label>
                <input id="acct-date" name="date" type="date" className="input" />

                <input type="hidden" name="created" value={user.uid} />
                <input type="hidden" name="createdDate" value={toDateInputValue(new Date())} />

                <button onClick={(e) => {e.stopPropagation();}} type="submit" className="btn btn-neutral dark:bg-gray-50 mt-4 hover:bg-gray-800 dark:hover:bg-gray-200">
                    Create Entry
                </button>
            </fieldset>
        </form>
    )
}