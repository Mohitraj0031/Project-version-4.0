import React from 'react'

const Contacts = () => {
  return (
    <div className=' bg-purple-200  h-screen'>
      <div className='p-6'>
        <h2 className='text-3xl font-semibold text-center mt-6'>Contact Us</h2>
      </div>
      <div>
        <form className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md'>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>Name</label>
            <input type='text' className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black' placeholder='Your Name' required/> 
            <label className='block mt-4 mb-2 text-sm font-medium text-gray-700'>Email</label>
            <input type='email' className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black' placeholder='Your Email' required />
            <label className='block mt-4 mb-2 text-sm font-medium text-gray-700'>Message</label>
            <textarea className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black mt-4' rows='4' placeholder='Your Message'></textarea>
            <button className='mt-4 bg-purple-400 p-3 hover:bg-purple-600 text-white font-semibold rounded-lg w-full'>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts
