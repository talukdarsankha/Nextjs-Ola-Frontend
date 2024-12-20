

"use client"

import Layout from '@/app/components/User/Layout/Layout'
import React, { useEffect } from 'react'
import RideDetails from './RideDetails'

function page(id) {

    useEffect(()=>{
      console.log(id)
    },[])

  return (
    <div>
         <Layout children={<RideDetails/>}/>
    </div>
   
  )
}

export default page
