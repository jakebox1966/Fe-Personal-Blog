import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnection";
import Post from "@/app/models/post";

export async function POST(req: NextRequest) {
    const { title, subTitle, body } = await req.json();
    await dbConnect();
    const result = await Post.create({
        title: title,
        subTitle: subTitle,
        body: body,
    });

    return NextResponse.json(result);
}

export async function GET(req: NextRequest) {
    await dbConnect();
    const result = await Post.find()
        .limit(10)
        .sort({ publishedDate: -1 })
        .lean()
        .exec();

    return NextResponse.json(result);
}
