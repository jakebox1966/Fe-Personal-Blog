import Card from '@/app/common/card/Card';
import * as React from 'react';
import Link from 'next/link';
import CreateButton from './components/CreateButton';
import Pagination from './components/Pagination';
import { cookies } from 'next/headers'

export interface IPostListProps {

}

type Props = {
    // searchParams: { [key: string]: string | string[] | undefined };
    searchParams: {
        page: number;
    }
};

export interface IPost {
    _id: string,
    title: string,
    subTitle: string,
    body: string,
    publishedDate: string
}

const fetchPosts = async (page: number) => {

    const result = await fetch(`http://localhost:3000/api/posts?page=${page}`,
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

export default async function PostList({ searchParams }: Props) {

    let page
    if (searchParams.page === undefined) {
        page = 1
    } else {
        page = searchParams.page
    }
    // console.log('searchParams', searchParams)
    // console.log("page", page)
    const result = await fetchPosts(page)

    const { posts, totalCount } = result

    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center w-full'>
                    <CreateButton />
                    <div className='flex flex-col gap-2 mt-3 w-full'>
                        {posts?.map((post: IPost) => (
                            <Link key={post._id} href={`/posts/${post._id}`}>
                                <Card post={post} />
                            </Link>
                        ))}
                    </div>
                    <Pagination page={(page)} totalCount={totalCount} />
                </div>
            </div>
        </>
    );
}
