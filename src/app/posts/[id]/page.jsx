import React from 'react'

export const getPosts = async (postId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await res.json();
    return data;
}

export async function generateMetadata({ params }) {
    // read route params
    const { id } = await params


    const post = await getPosts(id)


    return {
        title: post.title,
    }
}

export default async function PostDetails({ params }) {
    const { id } = await params;
    const postData = await getPosts(id);
    console.log(postData)
    return (
        <div className='p-5'>
            <h1 className="text-4xl font-bold text-center">
                {postData?.title.toUpperCase()}
            </h1>
            <p className="">
                {postData?.body}
            </p>
        </div>
    )
}
