import { Instagram, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'

function Footer() {
  return (
    <footer className='mt-20'>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 space-y-5 pl-9 sm:flex justify-around">
          <div>
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/OLA.svg"
              alt="logo"
            />

            <div className='flex items-center mt-5'>
                <Instagram className='' style={{fontSize:30}}/> 
                <YouTube className='ml-5' style={{fontSize:30}}/> 
                <Twitter className='ml-5' style={{fontSize:30}}/> 

            </div>

          </div>

          <div className="footer-links">
              <h1 className='text-lg font-semibold'>Explore</h1>
              <ul className="mt-4">
              <li>
                <a href="#" className='text-gray-400 hover:text-gray-600'>Home</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-gray-600'>Book a ride</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-gray-600'>About us</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-gray-600'>Careers</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
              <h1 className='text-lg font-semibold'>Customer Support</h1>
              <ul className="mt-4">
              <li>
                <a href="#" className='text-gray-400 hover:text-gray-600'>Our Center</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-gray-600'>Contact Us</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-gray-600'>Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-gray-600'>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>

      <div className='bg-gray-800 py-4'>
            <div className="container mx-auto">
              <p className='text-center text-gray-400 text-sm'>
                &copy; {new Date().getFullYear()} Ola Cabs. All Rights Reserved
              </p>
            </div>
      </div>
    </footer>
  )
}

export default Footer
