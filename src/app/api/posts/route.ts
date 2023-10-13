import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnection";
import Post from "@/app/models/post";
import { verifyJwt } from "@/app/lib/jwt";

interface RequestBody {
    title: string;
    subTitle: string;
    body: string;
}

export async function POST(req: NextRequest) {
    const accessToken = req.headers.get("authorization");
    if (!accessToken || !verifyJwt(accessToken)) {
        return NextResponse.json(
            { error: "No Authorization" },
            { status: 401 }
        );
    }
    const { title, subTitle, body }: RequestBody = await req.json();

    await dbConnect();
    const result = await Post.create({
        title: title,
        subTitle: subTitle,
        body: body,
    });

    return NextResponse.json(result);
}

export async function GET(req: NextRequest) {
    const page: any = new URL(req.url).searchParams.get("page");

    // console.log("page", page);

    await dbConnect();
    const posts = await Post.find()
        .limit(5)
        .sort({ publishedDate: -1 })
        .skip((page - 1) * 5)
        .lean()
        .exec();

    const totalCount = await Post.countDocuments().exec();

    const result = {
        posts: posts,
        totalCount: totalCount,
    };

    // console.log(result);

    return NextResponse.json(result);
}
