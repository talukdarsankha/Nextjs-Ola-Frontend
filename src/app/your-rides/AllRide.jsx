



"use client"


import { WestOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'
import RideCard from '../components/User/RideCard/RideCard';

function AllRide() {

     const router = useRouter();
    const handleBack = ()=>{
        router.back();
    }

  return (
    <div className='px-2 lg:px-5 py-5 '>

        <div className='flex items-center gap-5'>
          <IconButton onClick={()=>router.back()}  className='cursor-pointer'>
             <WestOutlined  />
          </IconButton>

         <p className=' py-3 text-2xl font-semibold'>Your Rides</p>

        </div>
        
         <div className='space-y-3'> 
            {[1,1,1,11,1].map((_,i)=><RideCard key={i}/>)}
         </div>
    </div>
  )
}

export default AllRide
