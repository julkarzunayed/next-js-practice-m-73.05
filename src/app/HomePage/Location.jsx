"use client"

import React from 'react'
import { useEffect, useState } from 'react';
import useGeolocation from '../hooks/useGeolocation';
import useReverseGeocoding from '../hooks/useReverseGeocoding';



export default function Location() {
    const [currentLocation, setCurrentLocation] = useState('');

    const { location, error } = useGeolocation();

    const { address, loading, error: geocodeError } = useReverseGeocoding(
        location?.latitude,
        location?.longitude
    );

    const handleLocation = () => {
        setCurrentLocation(address)
    }

    // console.log(error)

    return (
        <div className='mt-10'>
            <h2 className="text-2xl">
                Location
            </h2>
            <div className="">
                {loading ? "Loading" : currentLocation}
            </div>
            <button
                onClick={handleLocation}
                className='bg-gray-800 text-gray-300 px-3 py-1.5'>
                My Location
            </button>
        </div>
    )
}
