import React from 'react'
import { AiFillShop, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoIosArrowDropdown } from 'react-icons/io'
import { Badge, Box } from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='w-full min-h-[60px] flex items-start justify-between px-4 py-4 max-w-[1300px] mx-auto'>
            <div className="flex items-center gap-x-8">

                <div className='flex items-center gap-x-2'>
                    <AiFillShop className='text-4xl text-green-900' />
                    <h1 className='text-2xl font-medium text-green-900'>Jabardast Dukan</h1>
                </div>
                <ul className='flex gap-x-5 items-end'>
                    <li className='text-base font-medium cursor-pointer hover:scale-105 flex items-center gap-x-2'>
                        <IoIosArrowDropdown />
                        <span>

                            Categories
                        </span>
                    </li>
                    <li className='text-base font-medium cursor-pointer hover:scale-105'>
                        <Link to='/deals'>

                            Deals
                        </Link>
                    </li>
                    <li className='text-base font-medium cursor-pointer hover:scale-105'>
                        <Link to={'/latest'}>
                            What's New
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-x-5">
                <div className=" flex items-center border rounded-full focus-within:outline">
                    <input name='search' type="text" placeholder='Search...' className='py-2 px-4 rounded-full outline-none' />
                    <div className='py-2 px-4'>
                        <AiOutlineSearch />
                    </div>
                </div>
                <div className="flex items-center gap-x-2 text-lg cursor-pointer">
                    <BsFillPersonFill className='text-xl' />
                    Account
                </div>

                <Box className="flex items-center gap-x-2 text-lg cursor-pointer">
                    <Badge badgeContent={4} color="primary">
                        <AiOutlineShoppingCart className='text-xl' />
                    </Badge>
                    Cart
                </Box>
            </div>
        </div>
    )
}

export default Navbar