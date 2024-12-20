import React from 'react'

function CardVideoSection() {
  return (
    <div className='lg:mt-32'>
      <div className="text-xl  sm:text-5xl font-bold my-10 text-center"> India's most ambition car</div>
      <div>
        <video controls autoPlay loop style={{width:"100%", height:"100%"}} src="https://videos.pexels.com/video-files/6161372/6161372-hd_1920_1080_30fps.mp4"/>
      </div>
    </div>
  )
}

export default CardVideoSection
