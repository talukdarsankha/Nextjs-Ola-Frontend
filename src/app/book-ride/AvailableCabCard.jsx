import React from 'react'

function AvailableCabCard() {
  return (
    <div className='flex gap-2 items-center border rounded-md py-2 px-5 cursor-pointer'>
        <div>
           <img className='w-14' src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="cabs" />
           <p className='font-semibold text-xs'>1 min</p>
        </div>

        <div className='pl-5 text-sm'>
            <p className='font-semibold'>Ojaki Mana</p>
            <p className='text-xs -z-10'>Ojaki Mana with Free Wifi and top drivers</p>
        </div>

    </div>
  )
}

export default AvailableCabCard
