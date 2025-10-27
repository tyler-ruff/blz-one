'use client'

import { z } from 'zod';

import Link from 'next/link';
import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

import { auth, db } from '@/src/lib/firebase';
import { verifyPasswordResetCode, confirmPasswordReset, onAuthStateChanged } from 'firebase/auth';
import { User, Profile } from '@/src/lib/types/user';

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
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/src/app/components/ui/alert";
import { useSearchParams } from "next/navigation";
import { useAuthContext } from '@/src/context/AuthContext';
import { Input } from '../ui/input';
import Loading from '../loading';

export function ResetForm({ ...props }: React.ComponentProps<typeof Card>) {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');
  const code = searchParams.get('oobCode');
  const { user, profile } = useAuthContext() as { user: User, profile: Profile };
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<boolean | null>(null);
  const [output, setOutput] = useState<string | null>(null);

  const errorClasses = "focus:ring-red-500 border-red-500 focus:border-red-500 text-red-500";

  const resetPasswordSchema = z.object({
        password: z.string()
            .min(8, "Password must be at least 8 characters.")
            .max(255, "Password is too long."),
        passwordRepeat: z.string().min(8).max(255),
  }).superRefine(({ passwordRepeat, password }, ctx) => {
        if (passwordRepeat !== password) {
          ctx.addIssue({
            code: "custom",
            message: "The passwords do not match",
            path: ['password', 'passwordRepeat']
          });
        }
  });

  const ErrorMessage = (props: {
        message: string;
    }) => {
        return (
            <Alert variant="destructive">
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

  type FormData = z.infer<typeof resetPasswordSchema>;
  type FormErrors = Partial<Record<keyof FormData, string[]>>;

  const [formData, setFormData] = useState<FormData>({
          password: "",
          passwordRepeat: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (data: FormData, field?: keyof FormData): FormErrors => {
        try{
            resetPasswordSchema.parse(data);
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
          handleReset(formData);
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

  const handleReset = async (data: FormData) => {
    try{
        const checkPassword = true;
        if(data.password !== data.passwordRepeat ||
             data.password.length >= 255 ||
            !checkPassword || !code){
            setError(true);
            setOutput("Please correct the error(s) below.");
        } else {
            verifyPasswordResetCode(auth, code || '').then((email) => {
                const accountEmail = email;
                confirmPasswordReset(auth, code, data.password).then((resp) => {
                // Password reset has been confirmed and new password updated.

                // TODO: Display a link back to the app, or sign-in the user directly
                // if the page belongs to the same domain as the app:
                // auth.signInWithEmailAndPassword(accountEmail, newPassword);
                router.push('/login');

                // TODO: If a continue URL is available, display a button which on
                // click redirects the user back to the app via continueUrl with
                // additional state determined from that URL's parameters.
                }).catch((error) => {
                // Error occurred during confirmation. The code might have expired or the
                // password is too weak.
                    setError(true);
                    setOutput(`Please correct the error(s): ${error}`);
                });
            }).catch((error) => {
                // Invalid or expired action code. Ask user to try to reset the password
                // again.
                setError(true);
                setOutput(`Please correct the error(s): ${error}`);
            });
        }
    } catch(error){
        setError(true);
        setOutput(`Please correct the error(s): ${error}`);
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
        <CardTitle className="text-xl">Enter verification code</CardTitle>
        <CardDescription>We sent a 6-digit code to your email.</CardDescription>
      </CardHeader>
      <CardContent>
        {
            error === true && <ErrorMessage message={output || ""} />
        }
        <form onSubmit={handleSubmit} method="post">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="password" className="sr-only">
                New Password
              </FieldLabel>
              <Input 
                    id="password" 
                    type="password" 
                    name="password" 
                    required 
                    value={formData.password}
                    onChange={handleChange}
                    className={`${errors.password && errors.password.length > 0 && errorClasses}`}
                />
              <FieldDescription className="text-center">
                {
                    (errors.password && errors.password.length > 0) ? (
                        <span className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.password[0]}</span></span>
                    ): (
                        <span className="text-gray-600">Enter your new password.</span>
                    )
                }
              </FieldDescription>
            </Field>
            <Button type="submit">Verify</Button>
            <FieldDescription className="text-center">
              Didn&apos;t receive the code? <a href="#">Resend</a>
            </FieldDescription>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
