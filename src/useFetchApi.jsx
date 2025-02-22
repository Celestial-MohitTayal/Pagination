import React, { useEffect, useState } from "react";

const useFetchApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    // console.log(url)
    try{
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.products);
        setData(data.products);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {data, error, loading};
};

export default useFetchApi;


