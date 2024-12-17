import ProductsGrid from "./ProductsGird";
import ProductsList from "./ProductsList";
import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");
  const setActiveStyle = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "text-base-content btn-ghost"
    }`;
  };
  return (
    <>
      <div className="flex items-center mt-8 pb-5 justify-between border-b border-base-300">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 ? "s" : ""}
        </h4>
        <div className="flex gap-x-3">
          <button
            className={setActiveStyle("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            className={setActiveStyle("list")}
            onClick={() => setLayout("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            There is no item matched your search
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
     
    </>
  );
};

export default ProductContainer;
