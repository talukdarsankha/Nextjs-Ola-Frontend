


"use client"


import { Verified } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useRouter } from 'next/navigation'
import React from 'react'

function RideCard() {
    const router = useRouter();
  return (
    <div onClick={()=>router.push(`/ride-details/${1}`)} >
      <div className="flex justify-between items-center shadow-lg rounded-s-md p-3 cursor-pointer">
            <div className='flex items-center'>
                <img
                className='w-20 h-20'
                alt='Rake Doe'
                src='https://cdn.pixabay.com/photo/2020/12/01/18/06/porsche-911-gt2-5795128_1280.jpg'
                />

                <div className="ml-5 space-y-1">
                    <p>Monhari Gukesh</p>
                    <p className='text-sm font-semibold'>Today 12:08 PM</p>
                    <p className='text-sm font-semibold opacity-60'>CAB-GJTJO</p>
                    <p className='text-xs opacity-60'>Mubai, India</p>
                    <p className='text-xs opacity-60'>Delhi, Metro Station, India</p>
                </div>
            </div>

            {false ?
                <div className="flex flex-col pl-5">
                    <p className='text-green-500 mb-5'>Scheduled</p>
                    <Avatar src='https://cdn.pixabay.com/photo/2018/03/15/23/16/car-3229816_1280.jpg'/>
                </div> 
                
                : <Verified className='text-green-500 text-4xl' />
            }
        </div>
    </div>
  )
}

export default RideCard
