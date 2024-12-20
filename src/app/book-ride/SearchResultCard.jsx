import { LocationOn } from '@mui/icons-material'
import { Divider } from '@mui/material'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

function SearchResultCard() {

  const pickup_latitude = 19.0785451;
  const pickup_longitude = 72.878176;
  const pickup_area = "Mumbai, Mumbai Suburban, India";
  const destination_latitude = 42.2781401;
  const destination_longitude = 74.9159946;
  const destination_area = "Delhi, Town of delhi, India";

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handleSelect = ()=>{
     const params = new URLSearchParams(searchParams);
     params.set("pickup_latitude", pickup_latitude);
     params.set("pickup_longitude", pickup_longitude);
     params.set("pickup_area", pickup_area);

     router.replace(pathName+ "?" +params.toString())

  }

  return (
    <div onClick={()=>handleSelect()} className='flex items-center py-2 z-10 bg-white cursor-pointer'>
      <div className="pr-5">
        <LocationOn/>
      </div>
      <div>
        <p className='font-semibold'>Mumbai, India</p>
        <p className='font-semibold text-sm opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit.</p>
      </div>
      <Divider/>
    </div>
  )
}

export default SearchResultCard
