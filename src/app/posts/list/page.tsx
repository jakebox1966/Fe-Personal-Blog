import Card from '@/app/common/card/Card';
import * as React from 'react';
import Link from 'next/link';

export interface IPostListProps {
}

export interface IPost {
    _id: string,
    title: string,
    subTitle: string,
    body: string,
    publishedDate: string
}

const fetchPosts = async () => {

    const result = await fetch("http://localhost:3000/api/posts",
        {
            cache: "no-store",
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
    const posts = await result.json()
    return posts
}

export default async function PostList(props: IPostListProps) {
    const posts = await fetchPosts()

    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center w-full'>
                    <Link href={"/posts/write"} className='w-full sticky top-0 custom_button dark:border-gray-500'>
                        + New
                    </Link>
                    <div className='flex flex-col gap-2 mt-3 w-full'>
                        {posts?.map((post: IPost) => (
                            <Link key={post._id} href={`/posts/${post._id}`}>
                                <Card post={post} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
