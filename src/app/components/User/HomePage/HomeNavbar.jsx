


"use client"



import { MenuOutlined } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React from "react";

function HomeNavbar() {

  const router = useRouter();
  

  return (
    <nav className="bg-black py-4 sticky top-0 left-0 z-50">
      <div className="container px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center mx-5">
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-white-logo.svg"
              alt="logo"
            />

            <div className="ml-5 hidden md:block">
              <ul className="flex items-center">
                <li className="mr-6">
                  <a href="#0" className="text-white hover:text-blue-300">
                    Ola Electric
                  </a>
                </li>
                <li className="mr-6">
                  <a href="#0" className="text-white hover:text-blue-300">
                    Krutrim
                  </a>
                </li>
                <li className="mr-6">
                  <a href="#0" className="text-white hover:text-blue-300">
                    Outstation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex gap-3 items-center">
          <div className="hidden sm:block">
              <button onClick={()=>router.push('/book-ride')} className="bg-gray-700 text-white hover:bg-gray-900 text-sm font-semibold px-4 py-3">Book an Ola Cab</button>

              <button onClick={()=>router.push('/book-ride')} className=" text-black bg-white hover:bg-gray-300 text-sm font-semibold px-4 py-3 ml-5">Free Test Ride</button>

          </div>

          <MenuOutlined className="ml-3 text-white text-3xl"/>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default HomeNavbar;
