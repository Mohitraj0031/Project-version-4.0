import React from 'react'

const PaymentGateway = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
      {/* Order Summary */}
      <div className="mb-8 border-b pb-6">
        <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
        <div className="flex justify-between mb-2">
          <span>Product Name</span>
          <span>1000</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>49</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Discount</span>
          <span>-299</span>
        </div>
         <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>750</span>
        </div>
      </div>
      {/* Payment Methods */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Payment Method</h3>
        <div className="space-y-4">
          <button className="w-full flex items-center border rounded-md p-3 hover:border-blue-500 focus:outline-none">
        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="w-8 h-8 mr-3" />
        <span>Credit/Debit Card</span>
          </button>
          <button className="w-full flex items-center border rounded-md p-3 hover:border-blue-500 focus:outline-none">
        <img src="https://img.icons8.com/fluency/48/000000/money.png" alt="Cash" className="w-8 h-8 mr-3" />
        <span>Cash on Delivery</span>
          </button>
          <button className="w-full flex items-center border rounded-md p-3 hover:border-blue-500 focus:outline-none">
        <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" className="w-8 h-8 mr-3" />
        <span>PayPal</span>
          </button>
        </div>
      </div>
      {/* Pay Button */}
      <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
        Pay 750
      </button>
    </div>
  )
}

export default PaymentGateway
