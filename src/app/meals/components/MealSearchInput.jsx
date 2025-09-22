"use client";

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function MealSearchInput() {
    
    // const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathname = usePathname();


    // ------------- Here is the uls pushing code ----------------
    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParam = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParam}`;
        router.push(url);
        // console.log(url);
    }, [search]);

    return (
        <div className="p-5">
            <input
                // value={search}
                className='border'
                onChange={(e) => setSearch(e.target.value)}
                type="text" />
        </div>
    )
}
