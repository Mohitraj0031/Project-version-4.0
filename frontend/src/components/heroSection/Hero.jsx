import React from "react";

const Hero = () => {
  return (
    <div className=" bg-purple-200  mb-10">
      <div className="text-center p-4 mb-10">
        <h2 className="text-3xl font-semibold mt-5 ">Products</h2>
        <p className="text-lg font-sans">
          Here you can find a variety of products that we offer.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:bg-gray-200 transition-shadow duration-300">
          <div>
            <img src="/images/img01.png" alt="product-img" />
          </div>
          <div className="text-center font-semibold mt-4">
            <h3 className="text-2xl ">Product Name</h3>
            <p>1000</p>
          </div>
          <div className="text-center mt-4">
            <button className="bg-black p-3 text-white border-2 hover:border-black hover:rounded-full">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:bg-gray-200 transition-shadow duration-300">
          <div>
            <img src="/images/img02.png" alt="product-img" />
          </div>
          <div className="text-center font-semibold mt-4">
            <h3 className="text-2xl ">Product Name</h3>
            <p>1000</p>
          </div>
          <div className="text-center mt-4">
            <button className="bg-black p-3 text-white border-2 hover:border-black hover:rounded-full">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:bg-gray-200 transition-shadow duration-300">
          <div>
            <img src="/images/img03.png" alt="product-img" />
          </div>
          <div className="text-center font-semibold mt-4">
            <h3 className="text-2xl ">Product Name</h3>
            <p>1000</p>
          </div>
          <div className="text-center mt-4">
            <button className="bg-black p-3 text-white border-2 hover:border-black hover:rounded-full">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:bg-gray-200 transition-shadow duration-300">
          <div>
            <img src="/images/img04.png" alt="product-img" />
          </div>
          <div className="text-center font-semibold mt-4">
            <h3 className="text-2xl ">Product Name</h3>
            <p>1000</p>
          </div>
          <div className="text-center mt-4">
            <button className="bg-black p-3 text-white border-2 hover:border-black hover:rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
        
        <div className="bg-white p-6 rounded-lg sshadow-xl hover:shadow-2xl hover:bg-gray-200 transition-shadow duration-300">
          <div>
            <img src="/images/img01.png" alt="product-img" />
          </div>
          <div className="text-center font-semibold mt-4">
            <h3 className="text-2xl ">Product Name</h3>
            <p>1000</p>
          </div>
          <div className="text-center mt-4">
            <button className="bg-black p-3 text-white border-2 hover:border-black hover:rounded-full">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:bg-gray-200 transition-shadow duration-300">
          <div>
            <img src="/images/img02.png" alt="product-img" />
          </div>
          <div className="text-center font-semibold mt-4">
            <h3 className="text-2xl ">Product Name</h3>
            <p>1000</p>
          </div>
          <div className="text-center mt-4">
            <button className="bg-black p-3 text-white border-2  hover:border-black hover:rounded-full">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:bg-gray-200 transition-shadow duration-300">
          <div>
            <img src="/images/img03.png" alt="product-img" />
          </div>
          <div className="text-center font-semibold mt-4">
            <h3 className="text-2xl ">Product Name</h3>
            <p>1000</p>
          </div>
          <div className="text-center mt-4">
            <button className="bg-black p-3 text-white border-2  hover:border-black hover:rounded-full">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl hover:bg-gray-200 transition-shadow duration-300">
          <div>
            <img src="/images/img04.png" alt="product-img" />
          </div>
          <div className="text-center font-semibold mt-4">
            <h3 className="text-2xl ">Product Name</h3>
            <p>1000</p>
          </div>
          <div className="text-center mt-4">
            <button className="bg-black p-3 text-white border-2  hover:border-black hover:rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
