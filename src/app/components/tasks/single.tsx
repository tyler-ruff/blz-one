'use client'

import { useEffect, useState } from "react";

import { Profile, User } from '@/src/lib/types/user';
import { useAuthContext } from '@/src/context/AuthContext';
import { Priority, Task } from "@/src/lib/types/task"

import { ref, onValue } from "firebase/database";
import { realtime } from "@/src/lib/firebase";

import Spinner from "@/src/app/components/loading/spinner";
import { formatDate } from "date-fns";

import { Badge } from "@/src/app/components/ui/badge"
import { TypographyH1, TypographyP } from "../ui/typography";

export default function SingleTask(props: {
    id: string;
}) {
    const [loading, setLoading] = useState<boolean>(true);
    const [task, setTask] = useState<Task>();
    const { user, profile } = useAuthContext() as { user: User, profile: Profile };

    const loadTask = async() => {
        setLoading(true);
        const taskRef = ref(realtime, `tasks/${user.uid}/${props.id}`);
        onValue(taskRef, async(snapshot) => {
            const rawData = snapshot.val();
            const prepData = {
                ...rawData,
                key: snapshot.ref.key
            } as Task;
            setTask(prepData);
            setLoading(false);
        });
    }

    useEffect(() => {
        loadTask();
    }, []);

    if(loading){
        return (
            <div className="py-5">
                <Spinner />
            </div>
        )
    }

    /*
        'low' = 3,
        'medium' = 2,
        'high' = 1,
        'urgent' = 0
    */

    const priorityMap: {
        priority: Priority;
        color: string;
    }[] = [
        {
            priority: Priority.low,
            color: "default"
        },
        {
            priority: Priority.medium,
            color: "outline"
        },
        {
            priority: Priority.high,
            color: "destructive"
        },
        {
            priority: Priority.urgent,
            color: "destructive"
        }
    ]
    
    return (
        <div>
            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
                <article className="space-y-8 text-gray-900">
                    <div className="space-y-6">
                        <TypographyH1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
                            {task?.title}
                        </TypographyH1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-600">
                            <div className="flex items-center md:space-x-2">
                                <div className="text-sm"><span className="select-none pr-2">Due By:</span><time className="select-all" dateTime={formatDate(new Date(task?.dueDate || ""),"yyyy-MM-dd")}>{formatDate(new Date(task?.dueDate || ""), "PPP")}</time></div>
                            </div>
                            <div className="flex-shrink-0 mt-3 text-sm md:mt-0 select-none"><span className="pr-2">Priority:</span><Badge variant={task?.priority == Priority.high ? "destructive" : "default"}>{task?.priority?.toString()}</Badge></div>
                        </div>
                    </div>
                    <div className="text-gray-800">
                        <TypographyP>
                            {task?.description}
                        </TypographyP>
                    </div>
                </article>
                <div>
                    <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-600">
                        <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-emerald-600 text-gray-50">#MambaUI</a>
                        <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-emerald-600 text-gray-50">#TailwindCSS</a>
                        <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-emerald-600 text-gray-50">#Angular</a>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold">Related posts</h4>
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}