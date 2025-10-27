import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { customInitApp } from "@/src/lib/firebase-admin";
import { auth } from "firebase-admin";

import { config } from "@/src/config/app";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  customInitApp();
  //const authorization = headers().get("Authorization");
  const hdrs = await headers();
  const authorization = hdrs.get("Authorization");
  if (authorization?.startsWith("Bearer ")) {
    const idToken = authorization.split("Bearer ")[1];
    const decodedToken = await auth().verifyIdToken(idToken);

    if (decodedToken) {
      const expiresIn = 60 * 60 * 24 * 5 * 1000;
      const sessionCookie = await auth().createSessionCookie(idToken, {
        expiresIn,
      });
      const options = {
        name: config.sessionId || '',
        value: sessionCookie,
        maxAge: expiresIn / 1000,
        httpOnly: true,
        secure: true,
        path: '/'
      };

      (await cookies()).set(options);
    }
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
export async function GET(request: NextRequest) {
  try{
  customInitApp();
  const session = (await cookies()).get(config.sessionId || '')?.value || "";
  
  // Validate if the cookie exist in the request
  if (!session || session == '') {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  // Use Firebase Admin to validate the session cookie
  const decodedClaims = await auth().verifySessionCookie(session, true);

  if (!decodedClaims) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  return NextResponse.json({ isLogged: true }, { status: 200 });
  } catch (error: any){
    /*
      Note: when there exists a cookie with token but not a client side
      auth session, we will catch the error, remove the cookie,
      and thus we will be "resyncing" and revalidating session.
    */
     const options = {
       name: config.sessionId || '',
       value: "",
       maxAge: -1,
     };
   
     (await cookies()).set(options);
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }
}