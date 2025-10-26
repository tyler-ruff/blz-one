'use client'

import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Profile, User } from '@/src/lib/types/user';
import { useAuthContext } from '@/src/context/AuthContext';
import { Priority, Status, Task } from "@/src/lib/types/task";
import { updateTask } from "@/src/app/tasks/edit/actions";

import { ref, onValue, remove } from "firebase/database";
import { realtime } from "@/src/lib/firebase";

import { MdAnnouncement } from "react-icons/md";
import BasicTable from "@/src/app/components/table/basic";
import Spinner from "@/src/app/components/loading/spinner";
import { AlertType, BasicAlert } from "@/src/app/components/alert/basic";
import { ColumnDef } from "@tanstack/react-table";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/app/components/ui/sheet";

import { Button } from "@/src/app/components/ui/button"
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/app/components/ui/select";
import { Textarea } from "../ui/textarea";
import { capitalizeEachWord, enumKeys } from "@/src/lib/functions";

import { DatePicker } from "@/src/app/components/ui/date-picker";
/*
    Load all tasks for current user
*/
export default function AllTasks(){
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);
    const [tasks, setTasks] = useState<Task[]>();
    const { user, profile } = useAuthContext() as { user: User, profile: Profile };

    const [activeItem, setActiveItem] = useState<Task>();
    const [open, setOpen] = useState<boolean>(false);
    const [submitting, setSubmitting] = useState<boolean>(false);

    const handleEditClick = async (taskKey: any) => {
        const active = tasks?.filter(obj => obj.key == taskKey)[0] as Task;
        setActiveItem(active);
    }

    const submitEdit = async (event: any) => {
        event.preventDefault();
        setSubmitting(true);
        const formData = new FormData(event.currentTarget);
        await updateTask(formData).then(async() => {
            setOpen(false);
            setSubmitting(false);
            await loadTasks();
        });
    }

    function handleChange(e: any) {

    }

    const handleDeleteClick = async (taskKey: any) => {
        let response = confirm('Are you sure you want to delete this task?');
        if(response){
            const taskRef = ref(realtime, `tasks/${user.uid}/${taskKey}`);
            remove(taskRef);
            loadTasks();
        } 
    }

    const loadTasks = async() => {
        setLoading(true);
        const taskList = [] as Task[];
        const taskRef = ref(realtime, `tasks/${user.uid}`);
        onValue(taskRef, async(snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const rawData = childSnapshot.val();
                const prepData = {
                    ...rawData,
                    key: childSnapshot.ref.key
                } as Task;
                taskList.push(prepData);
            });
            setTasks(taskList);
            setLoading(false);
        })
    }

    const tableColumns = [
        {
            header: 'Title',
            accessorFn: row => row.title,
            cell: info => info.getValue()
        },
        {
            header: 'Description',
            accessorFn: row => row.description,
            cell: info => info.getValue()
        },
        {
            header: 'Status',
            accessorFn: row => row.status,
            cell: info => info.getValue()
        },
        {
            header: 'Action',
            accessorFn: row => row.key,
            cell: info => (
                <span className="space-x-2">
                    <Link href={`/tasks/view/${info.getValue()}`} className="hover:underline">
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
    ] as ColumnDef<Task>[];

    const EditForm = () => {
        return (
            <SheetContent>
                <SheetHeader className="mb-5">
                    <SheetTitle>
                        Edit Task
                    </SheetTitle>
                    <SheetDescription>
                        Edit a task.
                    </SheetDescription>
                </SheetHeader>
                <FieldSeparator />
                <form className="mt-5" onSubmit={submitEdit}>
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldContent>
                                    <FieldLabel htmlFor="task-title">
                                        Title
                                    </FieldLabel>
                                    <Input
                                        id="task-title"
                                        required
                                        onChange={handleChange}
                                        defaultValue={activeItem?.title}
                                        name="title"
                                    />
                                </FieldContent>
                            </Field>
                        </FieldGroup>
                        <FieldGroup>
                            <Field>
                                <FieldContent>
                                    <FieldLabel htmlFor="task-description">
                                        Description
                                    </FieldLabel>
                                    <Textarea
                                    id="task-description"
                                    defaultValue={activeItem?.description}
                                    name="description"
                                    onChange={handleChange}>
                                    </Textarea>
                                </FieldContent>
                            </Field>
                        </FieldGroup>
                        <FieldGroup>
                            <Field>
                                <FieldContent>
                                    <FieldLabel htmlFor="task-status">Status</FieldLabel>
                                    <Select name="status" defaultValue={activeItem?.status?.toString() || ""} onValueChange={handleChange}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder={capitalizeEachWord(activeItem?.status?.toString() || 'Task status')} />
                                        </SelectTrigger>
                                        <SelectContent id="task-status" onChange={handleChange}>
                                            {
                                                enumKeys(Status).map((value: string, key: number) => (
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
                                    <FieldLabel htmlFor="task-priority">Priority</FieldLabel>
                                    <Select name="priority" defaultValue={activeItem?.priority?.toString() || ""} onValueChange={handleChange}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder={capitalizeEachWord(activeItem?.priority?.toString() || 'Task priority')} />
                                        </SelectTrigger>
                                        <SelectContent id="task-priority" onChange={handleChange}>
                                            {
                                                enumKeys(Priority).map((value: string, key: number) => (
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
                                    <FieldLabel htmlFor="task-due-date">
                                        Due Date
                                    </FieldLabel>
                                    <DatePicker
                                        id="task-due-date"
                                        onChange={handleChange}
                                        name="dueDate"
                                        value={activeItem?.dueDate || new Date()}
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
        loadTasks();
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
            <Sheet open={open} onOpenChange={setOpen}>
                {
                    tasks?.length === 0 ? (
                        <BasicAlert 
                            text="No tasks assigned." 
                            icon={(<MdAnnouncement />)}
                            type={AlertType.ERROR}
                        />
                    ) : (
                        <>
                            <BasicTable 
                                title="My Tasks" 
                                data={tasks}
                                columns={tableColumns}
                                itemsPerPage={2}
                            />
                            <div className="mx-auto mt-5 flex w-full justify-center">
                                <Link href="/tasks/new">
                                    <Button variant="outline" className="cursor-pointer">
                                        Create New Task
                                    </Button>
                                </Link>
                            </div>
                        </>
                    )
                }
                <EditForm />
            </Sheet>
        </div>
    )
}
