import Link from 'next/link'
import React from 'react'

export default async function NavBar() {
    
    return (
        <div className='w-full flex justify-between bg-gray-900 text-white p-2'>
            <div className="">NavBar</div>
            <ul className="flex-1 flex gap-10 justify-center">
                <Link href={`/`}><li>Home</li></Link>
                <Link href={`/posts`}><li>Post</li></Link>
            </ul>
        </div>
    )
}
