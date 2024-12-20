


"use client"




import React from 'react'

import './Banner.css'
import { Circle, KeyboardArrowRight } from '@mui/icons-material'
import { useRouter } from 'next/navigation';

function Banner() {
  
    const router = useRouter();

  return (
    <div className='h-[40rem]'>
      <div className='cropped-image'></div>
      <div className='banneerMinContainer px-5 md:px-32'>
          <p className='text-5xl font-bold text-white md:w-[25rem] mb-5'>Moving People, and the world</p>

          <div className='py-5 bg-white md:w-[25rem] flex space-x-7 justify-around border border-b-2'>
              <p>Daily</p>
              <p>Rental</p>
              <p>OutStation</p>
          </div>

          <div className='py-5 bg-white'>
              <div className='flex flex-col space-y-5 px-5 lg:space-y-0 lg:flex-row items-center justify-around'>
                <div className='w-full lg:w-auto flex items-center py-2 px-14 border border-slate-500'>
                  <Circle className='pr-8 text-green-800' style={{fontSize:40}} />
                  <p>Current Location</p>
                </div>

                <div className='w-full lg:w-auto flex items-center py-2 px-14 border border-slate-500'>
                  <Circle className='pr-8 text-red-700' style={{fontSize:40}} />
                  <p>Enter Destination</p>
                </div>

                <div onClick={()=>router.push('/book-ride')} className='searchOlaCabButton cursor-pointer flex items-center py-4 px-14 border border-slate-900 justify-around'>
                  <p className='text-white font-semibold'> Search <span className='text-green-400'>Ola Cabs</span></p>
                  <KeyboardArrowRight className='text-green-400'/>
                </div>
              </div>
          </div>

          <div>
            <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/banner-green-desktop.png" alt="" />
          </div>
      </div>
    </div>
  )
}

export default Banner
