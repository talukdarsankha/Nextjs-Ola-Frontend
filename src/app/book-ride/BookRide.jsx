




"use client"





import React, { useState } from 'react';
import BookRideNavbar from './BookRideNavbar';
import { Button } from '@mui/material';
import AvailableCabCard from './AvailableCabCard';
import SearchResultComponents from './SearchResultComponents';
import { useRouter } from 'next/navigation';


// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   pickUpLocation: Yup.string().required("Pickup Location is required"),
//   destinationLocation: Yup.string().required("Destination Location is required")
// });

function BookRide() {
  
  // const formik = useFormik({
  //   initialValues: {
  //     pickUpLocation: "",
  //     destinationLocation: ""
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   }
  // });


  const [activeField, setActiveField] = useState("");
  const [activeFieldValue, setActiveFieldValue] = useState("");


  const handleChange = (e)=>{
    const {name} = e.target;   // input tag name
    setActiveField(name);
    setActiveFieldValue(e.target.value);

  }

  const router = useRouter();

  return (
    <div className='w-full'>
      <BookRideNavbar />

      <div className="px-3 lg:px-5 mt-10">
        <form 
        className='space-y-3'
          // onSubmit={formik.handleSubmit}
          >  
          <div>
            {/* Pickup Location */}
            <div className='border p-2 flex items-center relative'>
              <p className="pr-3">From</p>
              <input
                className='border-none outline-none'
                name='pickUpLocation'
                placeholder='Enter Pickup Location'
                // value={formik.values.pickUpLocation}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                onChange={handleChange}
                type="text"
              />

                {activeField == "pickUpLocation" && 
                  activeFieldValue.length>0 &&
                // formik.values.pickUpLocation &&
                <div>
                  <SearchResultComponents/>
                </div>}
            </div>
            {/* Pickup Location Error Message */}
            {/* {formik.errors.pickUpLocation && formik.touched.pickUpLocation && (
              <div>
                <p className="text-xs text-red-500 px-2 py-1">
                  {formik.errors.pickUpLocation}
                </p>
              </div>
            )} */}
          </div>

          {/* Destination Location */}
          <div>
            <div className='border p-2 flex items-center relative'>
              <p className="pr-3">To</p>
              <input
                className='border-none outline-none'
                name='destinationLocation'
                placeholder='Enter Destination Location'
                // value={formik.values.destinationLocation}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                onChange={handleChange}
                type="text"
              />

               {activeField == "destinationLocation" && 
                  activeFieldValue.length>0 &&
                // formik.values.destinationLocation &&
                <div>
                  <SearchResultComponents/>
                </div>
                }
            </div>
            {/* Destination Location Error Message */}
            {/* {formik.errors.destinationLocation && formik.touched.destinationLocation && (
              <div>
                <p className="text-xs text-red-500 px-2 py-1">
                  {formik.errors.destinationLocation}
                </p>
              </div>
            )} */}
          </div>

          <Button  onClick={()=>router.push(`/ride-details/${1}`)}
           sx={{width:"100%", padding:".7rem 0rem"}}
            variant='contained' 
            color='secondary' 
            // type='submit'
            >
            Find Driver
          </Button>

        </form>

        <div className='-z-10 px-2 lg:px-5 mt-5'>
           <p className='font-bold p-3'>Available Cabs</p>
           <div className='space-y-3'>
           {[1,1,11].map((item,i)=><AvailableCabCard key={i}/>)}
           </div>
        </div>
      </div>
    </div>
  );
}

export default BookRide;
