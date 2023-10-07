import * as React from 'react';

export interface ICardProps {
}

export default function Card(props: ICardProps) {
    return (
        <div className='border-2 mx-3 my-3 px-3 py-3 rounded-lg max-w-[410px] md:max-w-[768px] lg:max-w[1024px] max-h-[300px] hover:text-gray-400 cursor-pointer'>
            <div className='mb-3 h-1/3'>
                <h1 className='text-xl md:text-3xl truncate'>Title : Lorem ipsum,  consectetur </h1>
            </div>
            <div className='h-2/3'>
                <h3 className='text-xs md:text-sm truncate'>Body :    Quod ex doloremque omnis!Quod ex doloremque omnis!Quod ex doloremque omnis!Quod ex doloremque omnis!</h3>
            </div>
        </div>
    );
}
