import * as React from 'react';
import Link from 'next/link';
import DarkModeButton from './DarkMode';

export interface IHeaderProps {
}

export default function Header(props: IHeaderProps) {
    return (
        <header className="body-font">
            <div className="w-full md:max-w-[900px] lg:max-w-[1300px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center mb-4 md:mb-0">
                    <span className="text-xl dark:text-gray-300">DALDAL</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center dark:text-gray-300">
                    <Link href="/posts/list" className="mr-5 hover:text-gray-400 font-bold">
                        Blog
                    </Link>
                    {/* <Link href="/" className="mr-5 hover:text-gray-900 font-bold dark:text-white">
                        Gallery
                    </Link> */}
                    <DarkModeButton />
                </nav>
            </div>
        </header>
    );
}
