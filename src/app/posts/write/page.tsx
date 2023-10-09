'use client'
import QuillEditor from '@/app/common/editor/QuillEditor';
import * as React from 'react';
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react';
// import { fetchOnePost } from '../[postId]/page';

export interface IPostWriteProps {
    _id: string,
    title: string,
    subTitle: string,
    body: string,
}

export default function PostWrite(props: IPostWriteProps) {
    const [title, setTitle] = React.useState('')
    const [subTitle, setSubtitle] = React.useState('')
    const [body, setBody] = React.useState('')
    const [isUpdate, setIsUpdate] = React.useState(false)

    const searchParams = useSearchParams()
    const postId = searchParams.get('postId')

    React.useEffect(() => {
        if (postId) {
            setIsUpdate(true)

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
                const { title, subTitle, body } = post
                setTitle(title)
                setSubtitle(subTitle)
                setBody(body)
            }

            fetchOnePost(postId)
        }
    }, [])

    const router = useRouter()

    const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const subTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubtitle(event.target.value)
    }

    const writePost = async () => {
        const result = await fetch(`http://localhost:3000/api/posts`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    subTitle: subTitle,
                    body: body
                })
            })
        if (result.status === 200) {
            router.refresh()
            router.push('/posts/list')
        }
    }

    const updatePost = async (postId: string | null) => {
        const result = await fetch(`http://localhost:3000/api/posts/${postId}`,
            {
                cache: "no-store",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    subTitle: subTitle,
                    body: body
                })
            })
        router.refresh()
        router.push(`/posts/${postId}`)
    }

    return (
        <>
            <div className='flex flex-col justify-center gap-5'>
                <div className='w-full'>
                    <input
                        type="text"
                        value={title}
                        name='title'
                        placeholder='제목을 입력해주세요.'
                        onChange={titleHandler}
                        className='placeholder:italic w-full text-xl outline-none md:text-2xl rounded-lg border border-gray-300 dark:text-gray-800  dark:bg-white py-3 pl-3' />
                </div>
                <div className='w-full'>
                    <input
                        type="text"
                        name='subTitle'
                        value={subTitle}
                        placeholder='부제목을 입력해주세요.'
                        onChange={subTitleHandler}
                        className='placeholder:italic w-full text-xs outline-none md:sm rounded-lg border border-gray-300 dark:text-gray-800 dark:bg-white py-3 pl-3' />
                </div>
                <div className='dark:text-gray-800'>
                    <QuillEditor setBody={setBody} body={body} />
                </div>

                {!isUpdate ?
                    <div onClick={writePost} className='text-center border-2 rounded-lg px-3 py-3 font-bold cursor-pointer bg-white dark:bg-zinc-900 dark:border-gray-300 hover:text-gray-400'>
                        Write
                    </div>
                    :
                    <div onClick={() => updatePost(postId)} className='text-center border-2 rounded-lg px-3 py-3 font-bold cursor-pointer bg-white dark:bg-zinc-900 dark:border-gray-300 hover:text-gray-400'>
                        Update
                    </div>
                }

                <Link href={"/posts"}>
                    <div className='text-center border-2 rounded-lg px-3 py-3 font-bold cursor-pointer bg-white dark:bg-zinc-900 dark:border-gray-300 hover:text-gray-400'>
                        List
                    </div>
                </Link>
                <div onClick={() => signIn()} className='text-center border-2 rounded-lg px-3 py-3 font-bold cursor-pointer bg-white dark:bg-zinc-900 dark:border-gray-300 hover:text-gray-400'>
                    login
                </div>
            </div >
        </>
    );
}
