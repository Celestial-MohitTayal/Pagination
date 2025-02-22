import React from "react";
import useFetchApi from "./useFetchApi";

const HomePage = () => {
  const { data, error, loading } = useFetchApi("https://dummyjson.com/products?limit=1000");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if(!data) {
    return <div>No Data Available</div>
  }
  console.log(data);

  return (
    <>
        {
            data?.map((product) => {
                return (
                    <div key={product.id}>
                        <p>{product.brand}</p>
                        <p>{product.description}</p>
                    </div>
                )
            })
        }
    </>
  )
};

export default HomePage;
