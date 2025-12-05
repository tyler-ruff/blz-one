import { NextRequest, NextResponse } from "next/server";

//import { admin } from "@/src/lib/firebase-admin";
import * as admin from "firebase-admin";
import { ref } from "firebase/storage";


// --- GET /api/posts/heart
//    ?postId=[string]
/// > Get total number of hearts for a given post

export async function GET(req: NextRequest){
    const { searchParams } = new URL(req.url);
    const postId = searchParams.get("post");

    if (!postId || postId === "") {
        return new NextResponse(`Missing ${postId} query parameter`, { status: 400 });
    }

    var db = admin.database();
    var postRef = db.ref(`posts/${postId}`);

    postRef.once("value", function(snapshot){
        const data = snapshot.val();
        return new NextResponse({
            ...data
        }, {
            status: 200
        });
    });

    return new NextResponse(`Unknown error`, { status: 500 });
}