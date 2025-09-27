// export const dynamic = 'force-static'

import dbConnect from "@/app/lib/dbConnect";

const collection = {
    posts: 'posts',

}
// get API of Posts
export async function GET() {

    const data = await dbConnect(collection.posts).find({}).toArray();

    return Response.json(data);
};


// post API of Posts
export async function POST(req) {

    const post = await req.json();
    const data = await dbConnect(collection.posts).insertOne(post);

    return Response.json(data)
};

