import { Grid } from '@mui/material'
import React from 'react'

function Layout({children}) {
  return (
    <div className='h-screen'>
      <Grid container className='h-full'>
        <Grid className='pb-10 h-full overflow-auto' item xs={12} md={8} lg={5} >
           {children}
        </Grid>

        <Grid className='hidden md:block h-screen w-full' item xs={0} md={4} lg={7} >
           <img className='w-full h-full object-cover object-right-top' src="https://olawebcdn.com/images/v1/bg_city.jpg" alt="ride" />
        </Grid>
      </Grid>
    </div>
  )
}

export default Layout
