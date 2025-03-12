import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-center text-4xl font-bold mb-6">Cart</h1>

      {products.length === 0 ? (
        <p className="text-center text-xl text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-cover mb-4"
              />
              <h4 className="text-lg font-semibold">{product.title}</h4>
              <h5 className="text-gray-700 text-lg font-medium">
                ₹{product.price}
              </h5>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
