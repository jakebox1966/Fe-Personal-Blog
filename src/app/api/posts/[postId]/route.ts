import { NextRequest, NextResponse } from "next/server";
import Post from "@/app/models/post";
import dbConnect from "@/app/lib/dbConnection";
export async function GET(req: NextRequest, { params }: any) {
    await dbConnect();
    console.log(params);
    const { postId } = params;

    // console.log(postId);
    const post = await Post.findById(postId);
    console.log(post);
    return NextResponse.json(post);
}

export async function DELETE(req: NextRequest, { params }: any) {
    await dbConnect();
    const { postId } = params;

    const result = await Post.findByIdAndDelete(postId).exec();
    console.log(result);
    return NextResponse.json(result);
}

export async function PATCH(req: NextRequest, { params }: any) {
    await dbConnect();
    const { title, subTitle, body } = await req.json();
    const { postId } = params;
    const result = await Post.findByIdAndUpdate(postId, {
        title,
        subTitle,
        body,
    });
    console.log(result);
    return NextResponse.json(result);
}
