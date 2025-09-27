"use client"
import React from 'react'

export default function ProductAddForm() {

    //Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ea temporibus veritatis, molestiae quo quasi illo magnam soluta laborum consectetur eligendi eaque. Consequatur tempora sunt doloremque quos corrupti itaque facilis!
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const product_name = form.product_name.value;
        const product_details = form.product_details.value;
        console.log({ product_details, product_name })
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}api/items`, {
            method: "POST",
            body: JSON.stringify({
                product_name,
                product_details
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await res.json();

        console.log(result);
        if (result?.insertedId) {
            form.reset();
            alert("Product Added successfully!")
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen">
            <form
                onSubmit={handleFormSubmit}
                className="flex flex-col min-w-sm space-y-2 border rounded-2xl p-5 bg-white border-gray-300">
                <label htmlFor="">Product Name:</label>
                <input type="text" name='product_name' className='border rounded-lg py-1 px-2 border-gray-300' placeholder='Product Name: ' />

                <label htmlFor="">
                    Product Details:
                </label>
                <textarea name="product_details" className='border rounded-lg py-1 px-2 border-gray-300' placeholder='Product Details' defaultValue={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, ea temporibus veritatis, molestiae quo quasi illo magnam soluta laborum consectetur eligendi eaque. Consequatur tempora sunt doloremque quos corrupti itaque facilis!`}></textarea>

                <button className="border rounded-lg py-1 px-2 border-gray-300 active:scale-[98%]" type='submit'>
                    Add product
                </button>
            </form>
        </div>


    )
}
