import Link from 'next/link';
import React from 'react'

export const metadata = {
  title: "All Posts",
  description: "Loading Post data in server component.",
};


export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

export default async function Posts() {

    const posts = await getPosts();

    return (
        <div>
            <div className="grid grid-cols-3 gap-4 p-4">
                {posts?.map(post =>
                    <div
                        key={post?.id}
                        className="p-2 flex flex-col bg-white">
                        <h3 className="text-2xl font-bold">
                            {post?.title}
                        </h3>
                        <p className="">
                            {post?.body}
                        </p>

                        {/* links added here */}

                        <div className="flex-1 flex justify-end items-end">
                            <Link
                                href={`/posts/${post?.id}`}>

                                <button className="px-2 py1 bg-gray-800 text-white">
                                    Details
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
