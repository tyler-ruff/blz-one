'use client'

import { z } from 'zod';

import { useEffect, useState, FormEvent, ChangeEvent, useActionState, MouseEventHandler } from 'react';

import { Profile, User } from '@/src/lib/types/user';
import { useAuthContext } from '@/src/context/AuthContext';

import { enumKeys, slugify, toDateInputValue } from '@/src/lib/functions';
import { Status, Priority } from '@/src/lib/types/task';
import { createTask } from '@/src/app/tasks/new/actions';
import Spinner from '@/src/app/components/loading/spinner';

export default function NewTaskForm(){

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
        <form action={ createTask }>
            <fieldset className="fieldset bg-base-200 dark:bg-gray-900 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">
                    Create New Task
                </legend>

                <label className="label" htmlFor="task-title">Title</label>
                <input type="text" name="title" id="task-title" className="input" placeholder="Title" required />

                <label className="label" htmlFor="task-desc">Description</label>
                <textarea id="task-desc" name="description" className="textarea" placeholder="Description"></textarea>
                
                <label className="label" htmlFor="task-status">Status</label>
                <select id="task-status" name="status" defaultValue="Pick a status" className="select" required>
                    <option disabled={true}>Pick a status</option>
                    {
                        enumKeys(Status).map((value: string, key: number) => (
                            <option key={key} value={slugify(value)}>
                                {value}
                            </option>
                        ))
                    }
                </select>

                <label className="label" htmlFor="task-priority">Priority</label>
                <select id="task-priority" name="priority" defaultValue="Pick a priority" className="select" required>
                    <option disabled={true}>Pick a priority</option>
                    {
                        enumKeys(Priority).map((value: string, key: number) => (
                            <option key={key} value={slugify(value)}>
                                {value}
                            </option>
                        ))
                    }
                </select>

                <label className="label" htmlFor="task-duedate">Due Date</label>
                <input id="task-duedate" name="due" type="date" className="input" />

                <input type="hidden" name="created" value={user.uid} />
                <input type="hidden" name="assigned" value={user.uid} />
                <input type="hidden" name="start" value={toDateInputValue(new Date())} />
                <input type="hidden" name="date" value={toDateInputValue(new Date())} />

                <button onClick={(e) => {e.stopPropagation();}} type="submit" className="btn btn-neutral dark:bg-gray-50 mt-4 hover:bg-gray-800 dark:hover:bg-gray-200">
                    Create Task
                </button>
            </fieldset>
        </form>
    )
}