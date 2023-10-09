import dbConnect from "@/app/lib/dbConnection";
import User from "@/app/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { signJwtAccessToken } from "@/app/lib/jwt";

interface RequestBody {
    email: string;
    password: string;
}

export async function POST(req: NextRequest) {
    const { email, password }: RequestBody = await req.json();
    await dbConnect();

    const result = await User.findOne({ email: email });

    const user = result.toJSON();

    if (user && (await bcrypt.compare(password, user.password))) {
        const { password, ...userWithoutPassword } = user;

        const accessToken = signJwtAccessToken(userWithoutPassword);

        const result = {
            ...userWithoutPassword,
            accessToken,
        };

        return NextResponse.json(result);
    }

    return NextResponse.json(null);
}
