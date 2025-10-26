import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { config } from "@/src/config/app";

export async function POST(request: NextRequest) {
  // Remove the value and expire the cookie
  const options = {
    name: config.sessionId || '',
    value: "",
    maxAge: -1,
  };

  (await cookies()).set(options);
  return NextResponse.json({}, { status: 200 });
}