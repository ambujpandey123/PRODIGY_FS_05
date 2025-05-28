import userschema from "@/models/userschema";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, context: { params: any }) {
    const getdata = await req.json();
    
    if (!getdata) {
        return NextResponse.json({ success: false});
    }
    if (!getdata.userId || getdata.userId === "" || getdata.userId === undefined || getdata.userId === null || getdata.userId.length !== 24) {
        return NextResponse.json({ success: false, message: "User ID is required" });
    }
     let userId = getdata.userId;
     
     await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI as string);
     const user = await  userschema.findById( {_id:userId});
     
     if (!user || !user.isLoggedIn) return NextResponse.json({ success: false, message: "You Are Not logged in" });
        
    return NextResponse.json({ success: true });
  
}