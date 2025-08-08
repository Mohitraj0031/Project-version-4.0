import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white lg:flex items-center justify-between p-6'>
      <div className='flex items-center justify-center gap-4 text-2xl p-4 '>
        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
        <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
      </div>
      <div className='flex items-center justify-center gap-4 p-4'>
        <img src="logo" alt="company-logo" />
      </div>
      <div className='text-center p-4'>
        <p>All rights are reserved by Ryshkka</p>
      </div>
      
    </div>
  )
}

export default Footer
