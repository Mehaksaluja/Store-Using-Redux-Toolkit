import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="flex flex-wrap gap-5 justify-center p-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-lg p-4 w-64 flex flex-col items-center border border-gray-300"
        >
          <img src={product.image} alt="" className="h-45 w-full" />
          <h4 className="text-md font-semibold text-gray-800 text-center mt-3">
            {product.title}
          </h4>
          <h5 className="text-sm text-gray-700 font-bold mt-2 mb-2">
            Price: $ {product.price}
          </h5>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition mt-auto">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
