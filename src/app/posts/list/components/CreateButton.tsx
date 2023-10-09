'use client'
import * as React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";

export interface ICreateButtonProps {
}

export default function CreateButton(props: ICreateButtonProps) {

    const { data: session } = useSession()
    console.log(session)

    return (
        <>
            {/* {session && session.user && */}
            <Link href={"/posts/write"} className={`w-full sticky top-0 custom_button dark:border-gray-500 ${session && session.user ? 'visible' : 'invisible'}`}>
                + New
            </Link>
            {/* } */}
        </>
    );
}
