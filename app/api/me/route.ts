import { NextResponse } from 'next/server';

import { auth } from '@/lib/firebase';

export async function GET(request: Request) {
if(auth.currentUser){
    return NextResponse.json(
        { 
            loggedIn: true 
        },
        {
            status: 400
        }
    );
} else {
    return NextResponse.json(
        { 
            loggedIn: false 
        },
        {
            status: 400
        }
    );
}
}