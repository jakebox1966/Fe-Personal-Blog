"use client"
import { useRouter } from 'next/navigation'
import * as React from 'react';

export interface IDeleteButtonProps {
    postId: string
}

export default function DeleteButton({ postId }: IDeleteButtonProps) {
    const router = useRouter()

    const deletePost = async () => {
        console.log(postId)
        const result = await fetch(`http://localhost:3000/api/posts/${postId}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                cache: "no-store",
            })
        if (result.status === 200) {
            router.refresh()
            router.push('/posts/list')
        }
    }

    return (
        <div className='flex-1' onClick={deletePost}>
            <div className='text-center border-2 rounded-lg px-3 py-3 font-bold cursor-pointer bg-white dark:bg-zinc-900 dark:border-gray-300 hover:text-gray-400 basis-1/3'>
                Delete
            </div>
        </div>
    );
}
