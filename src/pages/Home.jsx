import React from "react";
import Products from "../components/Products"; // Corrected Import

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl text-center m-8 font-bold text-gray-800">
        Welcome to DressStore
      </h1>
      <section>
        <Products />
      </section>
    </div>
  );
};

export default Home;
