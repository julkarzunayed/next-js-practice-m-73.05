// hooks/useReverseGeocoding.js

import { useState, useEffect } from 'react';

const useReverseGeocoding = (latitude, longitude) => {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAddress = async () => {
      if (!latitude || !longitude) {
        return;
      }

      setLoading(true);
      setError(null);
      setAddress(null);

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch address');
        }

        const data = await response.json();
        
        // Check if a detailed address was found
        if (data.address) {
          // You can customize how you want to format the address
          const formattedAddress = `${data.address.house_number ? data.address.house_number + ' ' : ''}${data.address.road}, ${data.address.city || data.address.town || data.address.village}, ${data.address.state_district}, ${data.address.country}`;
          setAddress(formattedAddress);
        } else {
          setAddress('Address not found');
        }

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAddress();
  }, [latitude, longitude]);

  return { address, loading, error };
};

export default useReverseGeocoding;