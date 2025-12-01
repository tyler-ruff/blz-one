import { NextResponse } from "next/server";

import { getDatabase } from "firebase-admin/database";
import { customInitApp } from "@/src/lib/firebase-admin";

export async function GET(
    request: Request,
  { params }: { params: Promise<{ id: string }> }
){
    customInitApp();
    const db = getDatabase();
    const snapshot = await db.ref("posts").get(); 
    return NextResponse.json(
        {
            data: snapshot.val()
        },
        {
            status: 200
        }
    )
}