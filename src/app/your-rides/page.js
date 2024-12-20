import React from 'react'
import Layout from '../components/User/Layout/Layout'
import AllRide from './AllRide'


function page() {
  return (
    <Layout children={<AllRide/>} />
  )
}

export default page
