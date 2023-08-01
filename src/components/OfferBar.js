import React from 'react'
import { BsPhone } from 'react-icons/bs'
import { IoMdCall } from 'react-icons/io'

const OfferBar = () => {
    return (
        <div className='w-full bg-green-900  text-white'>
            <div className="flex items-center max-w-[1300px] m-auto w-full justify-between px-4 py-2">

                <a href='call:+91 999999999' className='flex flex-1 items-center gap-x-2'>
                    <IoMdCall />
                    +91 999999999
                </a>
                <div className="flex items-center text-center flex-1 justify-center">
                    <h1>

                        Get 50% off | Shop Now
                    </h1>
                </div>
                <div className="flex items-center flex-1 justify-end">
                    EN <feDropShadow />
                </div>
            </div>
        </div>
    )
}

export default OfferBar