

"use client"

import { AccountBalance, AccountBalanceWallet, ContactPhone, West, Wifi } from '@mui/icons-material';
import { Avatar, Button, IconButton } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { useRouter } from 'next/navigation';
import React from 'react'

 // ridecard
import RideCard from '../components/User/RideCard/RideCard';

const Profile = () => {

     const router = useRouter();
     const handleBack=()=>{
        router.back();
     }
  return (
    <div className='px-2 lg:px-5'>
       <div className="px-2 lg:px-5 py-4">
           <IconButton onClick={handleBack}> <West className='cursor-pointer' /> </IconButton>   
        </div>
        <div className="flex flex-col items-center space-y-2">
            <Avatar sx={{bgcolor:deepOrange[500]}}>R</Avatar>
            <p>Sandakan</p>
            <p>9562323569</p>
        </div> 

        <div className="border rounded-sm mt-5">
            <RideCard/>
            <div onClick={()=>{router.push('/your-rides')}} className="flex flex-col items-center p-3">
                <Button>see all rides</Button>
            </div>
        </div>

        <div className="border mt-5">
            <div className="flex items-center p-3 border-b">
                <AccountBalanceWallet className='text-green-600'/>
                <p className="ml-4 ">Ola money</p>
            </div>
        </div>
        <div className="border mt-5">
            <div className="flex items-center p-3 border-b">
                <ContactPhone className='text-green-600'/>
                <p className="ml-4 ">Emergency contact</p>
            </div>
        </div>
        <div className="border mt-5">
            <div className="flex items-center p-3 border-b">
                <Wifi className='text-green-600'/>
                <p className="ml-4 ">Ola wifi conections</p>
            </div>
        </div>

        <div className="border mt-5">
            <Button className='w-full' variant='contained' color='error'>logout</Button>
        </div>


    </div>
  )
}

export default Profile