import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white flex items-center justify-between p-6'>
      <div>
        <img src="logo" alt="company-logo" />
      </div>
      <div className='text-center'>
        <p>All rights are reserved by Ryshkka</p>
      </div>
      <div className='flex items-center gap-4 text-2xl'>
        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
        <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
      </div>
      
    </div>
  )
}

export default Footer
