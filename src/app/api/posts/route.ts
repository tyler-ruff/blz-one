// app/api/posts
import { NextRequest, NextResponse } from "next/server";

import { 
  getAuthenticatedAppForUser,
  getAuthenticatedAppForUser as getUser,
 } from "@/src/lib/firebase/serverApp";

 
// --- GET /api/posts/

export async function GET(req: NextRequest){
    const { searchParams } = new URL(req.url);

      const { currentUser } = await getUser();
      const { firebaseServerApp } = await getAuthenticatedAppForUser();

      return NextResponse.json(
    { uid: currentUser?.uid },
    {
        status: 200
    }
    )
}