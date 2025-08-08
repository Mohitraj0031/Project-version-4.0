import React from 'react'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='p-2 justify-center shadow-xl rounded-xl'>
        <div className='rounded-xl'>
            <img src="/images/img01.png" alt="product-img" />
          </div>
          <div className="text-center font-semibold mt-4">
            <h3 className="text-2xl ">Product Name</h3>
            <p>1000</p>
          </div>
          <div className="text-center mt-4">
            <button className="bg-black p-3 text-white border-2 hover:border-black hover:rounded-full mr-4">
              Remove
            </button>
            <button className="bg-black p-3 text-white border-2 hover:border-black hover:rounded-full">
              <NavLink to="/PaymentGateway">Buy Now</NavLink>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Cart;

