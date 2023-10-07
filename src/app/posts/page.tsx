import * as React from 'react';
import PostList from './list/page';

export interface IPostProps {
}

export default function Post(props: IPostProps) {
    return (
        <>
            <PostList />
        </>
    );
}
