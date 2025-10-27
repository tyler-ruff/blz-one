'use client'

import { z } from 'zod';

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { useAuthContext } from "@/src/context/AuthContext";
import { Profile, User } from "@/src/lib/types/user";

import { Button } from "@/src/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/app/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/src/app/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/src/app/components/ui/input-otp";
import { Input } from "../ui/input";

import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/src/app/components/ui/alert";

import { auth } from "@/src/lib/firebase";
import { onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import Loading from '../loading';

export function ForgotForm({ ...props }: React.ComponentProps<typeof Card>) {
  const { user, profile } = useAuthContext() as { user: User, profile: Profile };
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<boolean | null>(null);
  const [output, setOutput] = useState<string | null>(null);
  
  const errorClasses = "focus:ring-red-500 border-red-500 focus:border-red-500 text-red-500";

  const forgotFormSchema = z.object({
    email: z.email("Please enter a valid email.")
            .min(2, "Email is too short.")
            .max(125, "Email is too long."),
  });

  const ErrorMessage = (props: {
        message: string;
    }) => {
        return (
            <Alert variant="destructive" className="mt-5">
                <AlertCircleIcon />
                <AlertTitle>
                    Unable to submit form
                </AlertTitle>
                <AlertDescription>
                    <span>
                        {props.message}
                    </span>
                </AlertDescription>
            </Alert>
        )
    }

    type FormData = z.infer<typeof forgotFormSchema>;
    type FormErrors = Partial<Record<keyof FormData, string[]>>;

    const [formData, setFormData] = useState<FormData>({
        email: ""
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (data: FormData, field?: keyof FormData): FormErrors => {
        try{
            forgotFormSchema.parse(data);
            return field ? { [field]: [] } : {};
        } catch (error){
            if(error instanceof z.ZodError){
                const newErrors = error.flatten().fieldErrors as Record<string, string[]>;
                return field ? { [field]: newErrors[field] || [] } : newErrors;
            }
            return {};
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Form is valid, proceed with submission
            //console.log("Form submitted:", formData);
            handleForgot(formData);
        }
    };

    const handleChange = async(
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);
        // Validate form on each change
        //console.log(formData);
        const newErrors = validateForm(updatedFormData);
        setErrors(newErrors);
    };

    const handleForgot = async (data: FormData) => {
        try{
            if(!data.email ||
                data.email.length >= 255){
                setError(true);
                setOutput("Please correct the error(s) below.");
            } else {
                sendPasswordResetEmail(auth, data.email).then(() => {
                    // Password reset email sent!
                    router.push(`/forgot/confirm?email=${data.email}`);
                }).catch((error) => {
                    //const errorCode = error.code;
                    //const errorMessage = error.message;
                    setError(true);
                    setOutput(`${error.message}`);
                });

            }
        } catch(error){
            setError(true);
            setOutput(`Error: ${error}`);
        }
    }

        useEffect(() => {
            if(user){
                router.push('/');
            }
            const unsubscribe = onAuthStateChanged( auth, ( user ) => {
                setLoading(true);
                if ( user ) {
                    // User is signed in
                    router.push('/');
                } else {
                    setLoading(false);
                }
                } );
                return () => unsubscribe();
        }, []);

    if(loading){
        return (
            <Loading />
        )
    }

    return (
        <Card {...props}>
        <CardHeader className="text-center">
            <CardTitle className="text-xl">
                Forgot your password?
            </CardTitle>
            <CardDescription>
                No worries, simply enter your email address below and reset it.
            </CardDescription>
        </CardHeader>
        <CardContent>
            {
                error === true && <ErrorMessage message={output || ""} />
            }
            <form onSubmit={handleSubmit} method="post">
            <FieldGroup>
                <Field>
                <FieldLabel htmlFor="email" className="sr-only">
                    Email
                </FieldLabel>
                <Input 
                    type="email" 
                    placeholder="john.smith@example.com" 
                    id="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${errors.email && errors.email.length > 0 && errorClasses}`}
                />
                <FieldDescription className="text-center">
                    Enter your email to begin the password reset process.
                </FieldDescription>
                </Field>
                <Button type="submit">
                    Confirm
                </Button>
            </FieldGroup>
            </form>
        </CardContent>
        </Card>
    )
}
