// export const dynamic = 'force-static'

import dbConnect from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";

const collection = {
    products: 'products',

}
// get API of Posts
export async function GET() {

    const data = await dbConnect(collection.products).find({}).toArray();

    return Response.json(data);
};


// post API of Posts
export async function POST(req) {

    const post = await req.json();
    const data = await dbConnect(collection.products).insertOne(post);
    revalidatePath("/products")
    return Response.json(data)
};

