import Link from 'next/link';
import * as React from 'react';
import { generatePageArray } from '@/app/utils/pagination';

export interface IPaginationProps {
    page: number;
    totalCount: number;
}

export default function Pagination({ page, totalCount }: IPaginationProps) {

    const totalPage = Math.ceil(totalCount / 5)
    const generatedPage = generatePageArray(page, Math.ceil(totalCount / 5))

    console.log("totalCount", totalCount)
    console.log("totalPage", totalPage)
    console.log((+page) + 1)
    console.log((+page) + 1 <= totalPage)


    // console.log("페이지", props)
    return (
        <>

            <div className='flex flex-row justify-around items-center gap-5 mt-5 font-bold'>
                {+page - 1 >= 1 && (
                    <Link
                        href={`http://localhost:3000/posts/list?page=${+page - 1}`}
                    >
                        이전
                    </Link>
                )}
                {generatedPage.map((pageNumber) => (
                    <Link key={`page_${pageNumber}`} href={`/posts/list?page=${pageNumber}`}
                        className={+page === +pageNumber ? "opacity-40" : ""}
                    >
                        {pageNumber}
                    </Link>
                ))}

                {+page + 1 <= totalPage && (
                    <Link
                        href={`http://localhost:3000/posts/list?page=${+page + 1}`}
                    >
                        다음
                    </Link>
                )}
            </div>
        </>
    );
}
