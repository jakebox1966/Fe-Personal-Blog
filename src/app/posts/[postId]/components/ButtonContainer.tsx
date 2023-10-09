
'use client'
import { useRouter } from 'next/navigation'
import * as React from 'react';
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react";

export interface IButtonContainerProps {
    postId: string
}

export default function ButtonContainer({ postId }: IButtonContainerProps) {
    const router = useRouter()
    const { data: session } = useSession()

    const deletePost = async () => {
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
        <>
            <Link href={"/posts"} className='flex-1'>
                <div className='text-center border-2 rounded-lg px-3 py-3 font-bold cursor-pointer bg-white dark:bg-zinc-900 dark:border-gray-300 hover:text-gray-400 basis-1/3'>
                    List
                </div>
            </Link>
            <Link href={`/posts/write?postId=${postId}`} className={`flex-1 ${session && session.user ? ' visible' : 'invisible'}`}>
                <div className='text-center border-2 rounded-lg px-3 py-3 font-bold cursor-pointer bg-white dark:bg-zinc-900 dark:border-gray-300 hover:text-gray-400 basis-1/3'>
                    Update
                </div>
            </Link>
            <div className={`flex-1 ${session && session.user ? ' visible' : 'invisible'}`} onClick={deletePost}>
                <div className='text-center border-2 rounded-lg px-3 py-3 font-bold cursor-pointer bg-white dark:bg-zinc-900 dark:border-gray-300 hover:text-gray-400 basis-1/3'>
                    Delete
                </div>
            </div>
        </>
    );
}
