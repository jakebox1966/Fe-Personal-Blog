'use client'
import * as React from 'react';

export interface ICardProps {
    post: { _id: string, title: string, subTitle: string, body: string, publishedDate: string }
}

export default function Card({ post }: ICardProps) {
    const { _id, title, subTitle, publishedDate } = post

    return (
        <div className='flex flex-col gap-2 border-2 px-3 py-3 rounded-lg max-h-[300px] min-h-[155px] hover:text-gray-300 cursor-pointer dark:border-gray-500'>
            <div className='mb-3'>
                <h1 className='text-xl md:text-3xl truncate'>{title}</h1>
            </div>
            <div>
                <h3 className='text-sm md:text-xl truncate'>{subTitle}</h3>
            </div>
            <div className='text-xs'>
                {new Date(publishedDate).toLocaleDateString()}
            </div>
        </div>
    );
}
