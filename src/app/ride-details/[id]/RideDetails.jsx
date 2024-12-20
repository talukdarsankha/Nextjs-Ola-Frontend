import { Call, Key, Star, WestOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

function RideDetails() {
    const router = useRouter();
    const handleBack = ()=>{
       router.back();
    }
  return (
    <div>
        <div  className='flex items-center px-2 lg:px-5 py-2'>
            <IconButton onClick={handleBack} className='cursor-pointer'>
                <WestOutlined  />
            </IconButton>
            <p className='text-center w-full'>RIDE-ghsh3bfj&/i7sdh</p>
       </div>

       <div className='px-2 lg:px-5 py-5 '>
            <div className="border rounded-md ">
                <div  className='flex items-center border-b  p-3'>
                    <span className='pr-5 opacity-70 text-xs font-semibold'>PICKUP :{""}</span>
                    <span >Mumbai, India</span>
                </div>

                <div  className='flex items-center border-b  p-3'>
                    <span className='pr-5 opacity-70 text-xs font-semibold'>DROP :{""}</span>
                    <span >Delhi, Metro Station</span>
                </div>
            </div>
       </div>

       <p className="p-2 bg-green-400 text-white text-center">
         Picking ariving in 1 min.
       </p>

       <div className='flex items-center justify-center w-full mt-5'>
          <div className='text-center flex justify-center w-full'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15081.63060141423!2d72.86263285679428!3d19.089764359748894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA1JzIzLjEiTiA3MsKwNTInNTEuOSJF!5e0!3m2!1sen!2sin!4v1734669806363!5m2!1sen!2sin" width="70%" height="290"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
       </div>

       <div className='px-2 lg:px-5 mt-4'>
        <div className="border rounded-md">
          <div className="flex justify-between w-full border-b p-3">
            <div className="flex items-center">
              <Avatar
               alt='Rake Doe'
               src='https://cdn.pixabay.com/photo/2020/12/01/18/06/porsche-911-gt2-5795128_1280.jpg'
              />

              <div className="pl-4">
                <p>Toyota Fortuner</p>
                <p className='text-sm font-bold opacity-60'>
                  Family Cab
                </p>
              </div>
            </div>

            <div className="">
              <p>RJ-nsje0</p>
              <p>4154</p>
            </div>
          </div>

          <div className="flex justify-between w-full border-b p-3">
            <div className="flex items-center">
              <Avatar
               alt='Rake Doe'
               src='https://cdn.pixabay.com/photo/2018/03/15/23/16/car-3229816_1280.jpg'
              />

              <div className="pl-4">
                <p>Driver Name</p>
                <p className='text-sm flex items-center'>
                  4.7 <Star className='text-yellow-400 text-sm'/>
                </p>
              </div>
            </div>

            <IconButton className='text-green-500'>
              <Call/>
            </IconButton>
          </div>

          <div className="flex justify-between w-full border-b p-3 bg-yellow-600 text-white">
            <div className="flex items-center gap-2">
              <Key/>
              <p>OTP</p>
            </div>

            <p>
              415261
            </p>
          </div>
        </div>
       </div>
       
    </div>
    
  )
}

export default RideDetails
