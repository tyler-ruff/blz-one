// app/api/image/route.ts
import { NextRequest, NextResponse } from "next/server";

//import { adminApp, adminDB, adminFirestore, adminStorage } from "@/src/lib/firebase-admin";
import { getStorage } from "firebase-admin/storage";

// --- GET /api/image?path=<firebase-storage-path> ---
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const storagePath = searchParams.get("path");

  const storage = getStorage();

  if (!storagePath) {
    return new NextResponse("Missing 'path' query parameter", { status: 400 });
  }

  try {
    const bucket = storage.bucket();

    // Download file buffer
    const file = bucket.file(storagePath);
    const [exists] = await file.exists();
    if (!exists) return new NextResponse("File not found", { status: 404 });

    const [buffer] = await file.download();
    const uint8 = new Uint8Array(buffer);

    // Always return as PNG
    return new Response(uint8, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Content-Length": buffer.length.toString(),
        "Cache-Control": "public, max-age=86400, s-maxage=86400", // 1 day cache
      },
    });
  } catch (err) {
    console.error(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
