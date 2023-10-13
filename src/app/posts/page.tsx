import * as React from 'react';
import PostList from './list/page';

export interface IPostProps {
}

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

export default function Post({ searchParams }: Props) {
    return (
        <>
            <PostList searchParams={searchParams} />
        </>
    );
}
