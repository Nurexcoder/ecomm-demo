import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import OfferBar from './components/OfferBar'
const HomeLayout = () => {
    return (
        <div className=' h-full w-full min-h-screen'>
            <OfferBar/>
            <Navbar />
            <div className='max-w-[1300px] w-full m-auto'>
            <Outlet/>

            </div>
    </div>
    )
}

export default HomeLayout