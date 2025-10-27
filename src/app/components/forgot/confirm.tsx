'use client'

import { z } from 'zod';

import { useSearchParams, useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { auth } from "@/src/lib/firebase";
import { onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
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
import { url } from '@/src/config/app';

export function ConfirmForm({ ...props }: React.ComponentProps<typeof Card>) {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const { user, profile } = useAuthContext() as { user: User, profile: Profile };
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<boolean | null>(null);
  const [output, setOutput] = useState<string | null>(null);
  
  const errorClasses = "focus:ring-red-500 border-red-500 focus:border-red-500 text-red-500";

  const confirmFormSchema = z.object({
      code: z.string("Please enter a valid code.")
              .min(2, "Code is too short.")
              .max(125, "Code is too long."),
  });

  const resendEmail = () => {
        try{
            if(!email ||
                email.length >= 255){
                setError(true);
                setOutput("Please correct the error(s) below.");
            } else {
                sendPasswordResetEmail(auth, email).then(() => {
                    // Password reset email sent!
                    //router.push(`/forgot/confirm?email=${email}`);
                    //Update UI to inform user
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
  return (
    <Card {...props}>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Enter verification code</CardTitle>
        <CardDescription>We sent a 6-digit code to your email.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="otp" className="sr-only">
                Verification code
              </FieldLabel>
              <InputOTP maxLength={6} id="otp" required>
                <InputOTPGroup className="gap-2.5 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <FieldDescription className="text-center">
                Enter the 6-digit code sent to your email.
              </FieldDescription>
            </Field>
            <Button type="submit">Verify</Button>
            <FieldDescription className="text-center">
              Didn&apos;t receive the code? <a onClick={() => resendEmail} href="#">Resend</a>
            </FieldDescription>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
