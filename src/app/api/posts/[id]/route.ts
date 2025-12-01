import { customInitApp } from "@/src/lib/firebase-admin";
import { getDatabase } from "firebase-admin/database";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
  { params }: { params: Promise<{ id: string }> }
){
    customInitApp();
    const { id } = await params;
    const db = getDatabase();
    const snapshot = await db.ref(`posts/${id}`).get(); 
    return NextResponse.json(
        {
            data: snapshot.val()
        },
        {
            status: 200
        }
    )
}

/* api/posts/[id] - CRUD single post.
    GET - Read single post with id of [id]. Can optionally pass a token.
    PATCH - Update single post (require a token)
    DELETE - Delete a single post (requires a token)
*/