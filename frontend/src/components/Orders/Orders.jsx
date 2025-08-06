import React from 'react'

const Orders = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center my-4 text-gray-800">Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Order ID</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Date</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Customer</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Total</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Status</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-6 border-b text-gray-600">12345</td>
              <td className="py-4 px-6 border-b text-gray-600">2023-01-01</td>
              <td className="py-4 px-6 border-b text-gray-600">John Doe</td>
              <td className="py-4 px-6 border-b text-gray-600">$100.00</td>
              <td className="py-4 px-6 border-b text-gray-600">Shipped</td>
              <td className="py-4 px-6 border-b">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 border-b text-gray-600">12346</td>
              <td className="py-4 px-6 border-b text-gray-600">2023-01-02</td>
              <td className="py-4 px-6 border-b text-gray-600">Jane Smith</td>
              <td className="py-4 px-6 border-b text-gray-600">$200.00</td>
              <td className="py-4 px-6 border-b text-gray-600">Delivered</td>
              <td className="py-4 px-6 border-b">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
