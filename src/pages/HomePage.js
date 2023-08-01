import React from 'react'
import Trending from '../components/Homepage/Trending'
import Filter from '../components/Filter'
import Products from '../components/Homepage/Products'

const HomePage = () => {
  return (
    <div className='w-full h-full flex flex-col gap-y-5'>
        <Trending/>
        <div className='flex flex-col gap-y-8'>
            <Filter/>
            <Products/>
        </div>
    </div>
  )
}

export default HomePage