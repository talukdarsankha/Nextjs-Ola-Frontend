import React from 'react'
import Layout from '../components/User/Layout/Layout'
import BookRide from './BookRide'

function page() {
  return (
    <div>
      <Layout children={<BookRide/>} />
    </div>
  )
}

export default page
