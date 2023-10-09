import * as React from 'react';
import Link from 'next/link'
import DeleteButton from './components/DeleteButton';
import ButtonContainer from './components/ButtonContainer';

export interface IPostDetailProps {
    _id: string,
    title: string,
    subTitle: string,
    body: string,
    publishedDate: string
}

type Props = {
    params: {
        postId: string
    }
}
const fetchOnePost = async (postId: string) => {
    const result = await fetch(
        `http://localhost:3000/api/posts/${postId}`,
        {
            cache: "no-store",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
    if (!result) return null

    const post = await result.json()
    console.log(post)
    return post
}

export default async function PostDetail({ params: { postId } }: Props) {

    const post = await fetchOnePost(postId)

    if (!post) {
        return null
    }
    const { _id, title, subTitle, publishedDate, body } = post

    return (

        <div className='flex flex-col justify-center items-start break-word gap-10'>
            {/* 포스트 {postId}상세페이지 입니다. */}
            <div className='text-5xl font-bold w-full leading-normal'>{title}</div >
            <h4 className='text-2xl leading-normal break-word'>{subTitle}</h4>
            <div className='flex gap-3 text-sm'>
                <p>Author</p>
                <p>-</p>
                <p className='text-gray-400'>{new Date(publishedDate).toLocaleDateString("ko-kr", { year: "numeric", month: "short", day: "numeric" })}</p>
            </div>

            <div>
                <div className='break-word' dangerouslySetInnerHTML={{ __html: body }} >
                </div>
            </div>

            <div className='flex flex-col gap-3 mt-6 w-full md:flex-row'>
                <ButtonContainer postId={_id} />
                {/* <Link href={"/posts"} className='flex-1'>
                    <div className='text-center border-2 rounded-lg px-3 py-3 font-bold cursor-pointer bg-white dark:bg-zinc-900 dark:border-gray-300 hover:text-gray-400 basis-1/3'>
                        List
                    </div>
                </Link>
                <Link href={`/posts/write?postId=${_id}`} className='flex-1'>
                    <div className='text-center border-2 rounded-lg px-3 py-3 font-bold cursor-pointer bg-white dark:bg-zinc-900 dark:border-gray-300 hover:text-gray-400 basis-1/3'>
                        Update
                    </div>
                </Link>
                <DeleteButton postId={_id} /> */}
            </div>
        </div>
    )
}
