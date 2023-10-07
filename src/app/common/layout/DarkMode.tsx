"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

const DarkModeButton = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button className='right-4 bottom-4 hover:text-orange-400 dark:hover:text-yellow-400' onClick={e => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
            {theme === 'dark' ? <FaMoon /> : <FaSun />}
        </button>
    )
}

export default DarkModeButton