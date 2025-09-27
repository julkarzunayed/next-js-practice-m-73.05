import dbConnect from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";


export async function GET(req, { params }) {

    const p = await params;
    // console.log(p.id);
    const post = await dbConnect("products")
        .findOne(
            { _id: new ObjectId(p.id) }
        );



    return Response.json(post);
};

// 
export async function DELETE(req, { params }) {

    const p = await params;
    const res = await dbConnect("products")
        .deleteOne(
            { _id: new ObjectId(p.id) }
        );

    return Response.json(res);
};

// PATCH API for single post
export async function PATCH(req, { params }) {

    const p = await params;
    const updateData = await req.json();

    const updateReq = await dbConnect("products")
        .updateOne(
            { _id: new ObjectId(p.id) },
            {
                $set: updateData
            },
            { upsert: true }
        );

    return Response.json(updateReq);
};

