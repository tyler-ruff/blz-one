'use client'

import { z } from 'zod';

import Link from 'next/link';
import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

import { auth, db } from '@/src/lib/firebase';
import { createUserWithEmailAndPassword, 
        updateProfile, 
        validatePassword,
        onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, updateDoc } from "firebase/firestore";

import { cn } from "@/lib/utils";
import { Button } from "@/src/app/components/ui/button";
import { Card, CardContent } from "@/src/app/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/src/app/components/ui/field";
import { Input } from "@/src/app/components/ui/input";
import Loading from '../loading';

import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/src/app/components/ui/alert";

import { googleLogin, githubLogin, microsoftLogin } from '../access/login';
import { generateRandomHex } from '@/src/lib/functions';
import { Profile, User } from '@/src/lib/types/user';
import { useAuthContext } from '@/src/context/AuthContext';

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
    const { user, profile } = useAuthContext() as { user: User, profile: Profile };
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);

    const [error, setError] = useState<boolean | null>(null);
    const [output, setOutput] = useState<string | null>(null);

    const errorClasses = "focus:ring-red-500 border-red-500 focus:border-red-500 text-red-500";

    const registerFormSchema = z.object({
        email: z.email("Please enter a valid email.")
            .min(2, "Email is too short.")
            .max(125, "Email may not be longer than 125 characters."),
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

    type FormData = z.infer<typeof registerFormSchema>;
    type FormErrors = Partial<Record<keyof FormData, string[]>>;

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
        passwordRepeat: ""
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = (data: FormData, field?: keyof FormData): FormErrors => {
        try{
            registerFormSchema.parse(data);
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
          handleRegister(formData);
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

    const handleRegister = async (data: FormData) => {
        try{
            //Validate password
            // Note: Validate password does not work with firebase emulator
            //const checkPassword = await validatePassword(auth, data.password);
            const checkPassword = true;
            //Validate form
            if(data.password !== data.passwordRepeat || !data.email ||
                data.email.length >= 255 || data.password.length >= 255 ||
                !checkPassword){
                setError(true);
                setOutput("Please correct the error(s) below.");
            } else {
                createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    setError(false);
                    // Signed up 
                    const user = userCredential.user;
                    // Update displayName on profile
                    //const fullName = `${data.firstName} ${data.lastName}`;
                    const fullName = `John Doe`;
                    updateProfile(user, {
                        displayName: fullName
                      }).then(() => {
                        // Update profile document
                        const docRef = doc(db, "profiles", user.uid);
                        setDoc(docRef, {
                            uid: user.uid,
                            avatar: ``,
                            displayName: fullName,
                            theme: generateRandomHex(),
                            createdAt: user.metadata.creationTime,
                            lastOnline: user.metadata.lastSignInTime,
                            bio: "Just another user."
                        }).then(() => {
                            router.push('/');
                        });
                      }).catch((error) => {
                        setError(true);
                        setOutput(`Action failed due to an unknown error. ${error}`);
                      });

                })
                .catch((error) => {
                    //const errorCode = error.code;
                    //const errorMessage = error.message;
                    setError(true);
                    setOutput(`(${error.code}): ${error.message}`);
                });
            }
        } catch(error){
            setError(true);
            setOutput(`Action failed due to an unknown error. Please try again. ${error}`);
        }
    };

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
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="p-0">
          <form className="p-6 md:p-8" onSubmit={handleSubmit} method="post">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create your account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                  Enter your email below to create your account
                </p>
              </div>
              {
                error === true && <ErrorMessage message={output || ""} />
              }
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john.smith@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${errors.email && errors.email.length > 0 && errorClasses}`}
                  required
                />
                <FieldDescription>
                  {errors.email && errors.email.length > 0 ? (
                    <span className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.email[0]}</span></span>
                    ): (
                        <span className="text-gray-600">
                            We will not share your email with anyone else.
                        </span>
                    )}
                </FieldDescription>
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input 
                        id="password" 
                        type="password" 
                        name="password" 
                        required 
                        value={formData.password}
                        onChange={handleChange}
                        className={`${errors.password && errors.password.length > 0 && errorClasses}`}
                        
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input 
                        id="confirm-password" 
                        type="password" 
                        name="passwordRepeat" 
                        required 
                        value={formData.passwordRepeat}
                        onChange={handleChange}
                        className={`${errors.passwordRepeat && errors.passwordRepeat.length > 0 && errorClasses}`}
                    />
                  </Field>
                </Field>
                <FieldDescription>
                    {
                        (errors.password && errors.password.length > 0) ? (
                            <span className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.password[0]}</span></span>
                        ): (
                            <span className="text-gray-600">Must be at least 8 characters long.</span>
                        )
                    }
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit" disabled={error == true ? true : false}>Create Account</Button>
              </Field>
              <FieldSeparator className="select-none *:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>
              <Field className="grid grid-cols-3 gap-4">
                <Button onClick={() => githubLogin()} variant="outline" className="cursor-pointer" title="Sign up with GitHub" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                  <span className="sr-only">Sign up with GitHub</span>
                </Button>
                <Button variant="outline" onClick={() => googleLogin()} className="cursor-pointer" type="button" title="Sign up with Google">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Sign up with Google</span>
                </Button>
                <Button variant="outline" onClick={() => microsoftLogin()} title="Sign up with Microsoft" className="cursor-pointer" type="button">
                  <svg fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.49 2H2v9.492h9.492V2h-.002z"></path><path d="M22 2h-9.492v9.492H22V2z"></path><path d="M11.49 12.508H2V22h9.492v-9.492h-.002z"></path><path d="M22 12.508h-9.492V22H22v-9.492z"></path>
                  </svg>
                  <span className="sr-only">Sign up with Microsoft</span>
                </Button>
              </Field>
              <FieldDescription className="text-center">
                Already have an account? <Link href="/login">Sign in</Link>
              </FieldDescription>
            </FieldGroup>
          </form>
          {/*
          <div className="bg-muted relative hidden md:block">
            <img
              src=""
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
          */}
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <Link href="https://blazedlabs.com/terms" target="_blank">Terms of Service</Link>{" "}
        and <Link href="https://blazedlabs.com/privacy" target="_blank">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  )
}
