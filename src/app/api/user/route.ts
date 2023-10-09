import dbConnect from "@/app/lib/dbConnection";
import User from "@/app/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

interface RequestBody {
    username: string;
    email: string;
    password: string;
}

export async function POST(req: NextRequest) {
    await dbConnect();
    const user: RequestBody = await req.json();
    console.log(user);

    const result = await User.create({
        username: user.username,
        email: user.email,
        password: await bcrypt.hash(user.password, 10),
    });
    // console.log(result);

    return NextResponse.json(result);
}
