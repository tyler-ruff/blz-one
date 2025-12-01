'use client'

import { z } from 'zod';

import { cn } from "@/lib/utils";
import { Button } from "@/src/app/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/src/app/components/ui/field";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/src/app/components/ui/alert";
import { Input } from "@/src/app/components/ui/input";
import { auth, db } from "@/src/lib/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Loading from "../loading";
import { useAuthContext } from "@/src/context/AuthContext";
import { Profile, User } from "@/src/lib/types/user";
import { githubLogin, googleLogin, microsoftLogin } from "../access/login";

import { doc, setDoc, updateDoc } from "firebase/firestore";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
    const { user, profile } = useAuthContext() as { user: User, profile: Profile };
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);

    const [error, setError] = useState<boolean | null>(null);
    const [output, setOutput] = useState<string | null>(null);

    const errorClasses = "focus:ring-red-500 border-red-500 focus:border-red-500 text-red-500";

    const loginFormSchema = z.object({
        email: z.email("Please enter a valid email.")
            .min(2, "Email is too short.")
            .max(125, "Email is too long."),
        password: z.string()
            .min(8, "Password is too short.")
            .max(255, "Password is too long."),
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

    type FormData = z.infer<typeof loginFormSchema>;
    type FormErrors = Partial<Record<keyof FormData, string[]>>;

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (data: FormData, field?: keyof FormData): FormErrors => {
        try{
            loginFormSchema.parse(data);
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
            handleLogin(formData);
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

    const handleLogin = async (data: FormData) => {
        try{
            if(!data.password || !data.email ||
                data.email.length >= 255 || data.password.length >= 255){
                setError(true);
                setOutput("Please correct the error(s) below.");
            } else {
                signInWithEmailAndPassword(auth, data.email, data.password)
                .then(async (userCredential) => {
                    setError(false);
                    const user = userCredential.user;
                    // Set Cookies for Server side Authentication
                    const token = await userCredential.user.getIdToken();
                    await fetch("/api/login", {
                        method: "POST",
                        headers: {
                          Authorization: `Bearer ${token}`,
                        }
                    });
                    // Update "Last Online"
                    const profileDocRef = doc(db, "profiles", user.uid);
                    updateDoc(profileDocRef, {
                      lastOnline: new Date().toISOString()
                    });
                }).catch((error) => {
                    setError(true);
                    setOutput(`${error.message}`);
                })
            }
        } catch (error){
            setError(true);
            setOutput(`Action failed due to an unknown error. Please try again.`);
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
    }, [router, user]);

  if(loading){
    return (
        <Loading />
    )
  }
  return (
    <form onSubmit={handleSubmit} method="post" className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold select-none">
            Login to your account
          </h1>
          <p className="text-muted-foreground text-sm text-balance select-none">
            Enter your email below to login to your account
          </p>
          {
            error === true && <ErrorMessage message={output || ""} />
          }
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input 
            id="email" 
            type="email" 
            name="email" 
            placeholder="john.smith@example.com" 
            required 
            value={formData.email}
            onChange={handleChange}
            className={`${errors.email && errors.email.length > 0 && errorClasses}`}
           />
           {errors.email && errors.email.length > 0 && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 sr-only"><span className="font-medium">{errors.email[0]}</span></p>
            )}
        </Field>
        <Field>
          <div className="flex items-center select-none">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="/forgot"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input 
            id="password" 
            type="password" 
            name="password" 
            required 
            value={formData.password}
            onChange={handleChange}
            className={`${errors.password && errors.password.length > 0 && errorClasses}`}
           />
           {errors.password && errors.password.length > 0 && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500 sr-only"><span className="font-medium">{errors.password[0]}</span></p>
            )}
        </Field>
        <Field>
          <Button type="submit" className="select-none">Login</Button>
        </Field>
        <FieldSeparator className="select-none">Or continue with</FieldSeparator>
        <Field>
          <Button variant="outline" onClick={() => githubLogin()} className="cursor-pointer select-none" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Login with GitHub
          </Button>
          <Button variant="outline" onClick={() => googleLogin()} className="cursor-pointer select-none" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                />
            </svg>
            Login with Google
          </Button>
          <Button variant="outline" onClick={() => microsoftLogin()} className="cursor-pointer select-none" type="button">
            <svg fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.49 2H2v9.492h9.492V2h-.002z"></path><path d="M22 2h-9.492v9.492H22V2z"></path><path d="M11.49 12.508H2V22h9.492v-9.492h-.002z"></path><path d="M22 12.508h-9.492V22H22v-9.492z"></path>
            </svg>
            Login with Microsoft
          </Button>
          <FieldDescription className="text-center select-none">
            Don&apos;t have an account?{" "}
            <a href="/register" className="underline underline-offset-4">
              Sign up
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
