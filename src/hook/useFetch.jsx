import React, { useCallback, useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => { 
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(url);

      if (!res) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const output = await res.json();
      setData(output);
    }
    
    catch (err) {
      setError(err.message || 'An error occurred while fetching data');
    }
    
    finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (!url) return;

    fetchData();
  }, [url, fetchData]);

  return {data, loading, error, refetch: fetchData};
}

export default useFetch;