import dynamic from 'next/dynamic'
import * as React from 'react';
import 'react-quill/dist/quill.bubble.css';

interface IQuillEditorProps {
    setBody: React.Dispatch<React.SetStateAction<string>>;
    body: string
}

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' },],
        // [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [
            // { list: 'ordered' },
            { list: 'bullet' },
            // { indent: '-1' },
            // { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header',
    // 'font',
    // 'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    // 'bullet',
    'link',
    // 'image',
    // 'video',
]

export default function QuillEditor({ setBody, body }: IQuillEditorProps) {
    const onChangeContents = (content: string) => {
        setBody(content)
        console.log("body", body)
    }
    return <QuillNoSSRWrapper
        placeholder='내용을 입력해주세요'
        modules={modules}
        formats={formats}
        theme="bubble"
        value={body}
        className='w-full h-[500px] dark:bg-white rounded-lg border border-gray-300'
        onChange={onChangeContents}
    />
}