import React from 'react'
import SearchResultCard from './SearchResultCard'

function SearchResultComponents() {
  return (
    <div className='absolute top-12 left-0 right-0 z-10 bg-white rounded-md overflow-y-auto p-2 border max-h-[50vh] shadow-xl'>
      {[11,1,1,1,1,1].map((_,i)=><SearchResultCard key={i}/>)}
    </div>
  )
}

export default SearchResultComponents
