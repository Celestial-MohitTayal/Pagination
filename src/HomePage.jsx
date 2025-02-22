import React, { useState } from "react";
import useFetchApi from "./useFetchApi";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

const HomePage = () => {
  const { data, error, loading } = useFetchApi(
    "https://dummyjson.com/products?limit=50"
  );
  const [curentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);

  const lastPostIndex = curentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentData = data?.slice(firstPostIndex, lastPostIndex);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No Data Available</div>;
  }
  console.log(data);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <h1> Product Gallery </h1>
        <Pagination totalPosts={data.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} />
        <ProductList currentData={currentData} />
    </div>
  );
};

export default HomePage;
