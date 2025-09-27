import React from 'react'

export default async function Products() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}api/items`, {
        cache: "force-cache"
    });
    const data = await res.json();

    return (
        <div className='mt-10'>
            <h1 className="text-2xl mb-8 font-bold text-center">
                This is all Products page.
            </h1>
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-2">
                {data?.map((product) =>
                    <div key={product?._id} className="p-3 rounded-2xl border border-gray-300">
                        <h3 className="text-2xl font-bold text-center my-3">
                            {product?.product_name}
                        </h3>
                        <p className="">
                            {product?.product_details}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
