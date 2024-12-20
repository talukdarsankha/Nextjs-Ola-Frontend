import React from 'react'
import Layout from '../components/User/Layout/Layout'
import Profile from './Profile'

function Page() {
  return (
    <div>
      <Layout children={<Profile/>}/>
    </div>
  )
}

export default Page
