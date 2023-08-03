import React from 'react'
import { AiFillShop, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillPersonFill, BsHeartFill } from 'react-icons/bs'
import { IoIosArrowDropdown } from 'react-icons/io'
import { Badge, Box, Tooltip } from '@mui/material'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const cartLenght = useSelector((state) => state.cart.totalQuantity)
    return (
        <div className='w-full min-h-[60px] flex items-start justify-between px-4 py-4 max-w-[1300px] mx-auto'>
            <div className="flex items-center gap-x-8">
                <Link to='/'>

                    <div className='flex items-center gap-x-2'>
                        <AiFillShop className='text-4xl text-green-900' />
                        <h1 className='text-2xl font-medium text-green-900'>ECOM</h1>
                    </div>
                </Link>
                <ul className='hidden md:flex gap-x-5 items-end'>
                    <li className='text-base font-medium cursor-pointer hover:scale-105 flex items-center gap-x-2'>
                        <IoIosArrowDropdown />
                        <span>

                            Categories
                        </span>
                    </li>
                    <li className='text-base font-medium cursor-pointer hover:scale-105'>
                        <Link to='/wishlist'>

                            WishList
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
                <div className=" lg:flex items-center border rounded-full focus-within:outline hidden">
                    <input name='search' type="text" placeholder='Search...' className='py-2 px-4 rounded-full outline-none' />
                    <div className='py-2 px-4'>
                        <AiOutlineSearch />
                    </div>
                </div>
                <div className="flex items-center gap-x-2 text-lg cursor-pointer md:hidden" onClick={()=>navigate('/wishlist')}>
                    <Tooltip title='Wishlist'>

                        <BsHeartFill className='text-red-900' />
                    </Tooltip>
                </div>
                <div className="flex items-center gap-x-2 text-lg cursor-pointer">
                    <BsFillPersonFill className='text-xl' />
                    <span className='hidden md:inline'>

                        Account
                    </span>
                </div>

                <Box className="flex items-center gap-x-2 text-lg cursor-pointer" onClick={() => navigate('/cart')}>

                    <Badge badgeContent={cartLenght} color="primary">
                        <AiOutlineShoppingCart className='text-xl' />
                    </Badge>
                    <span className='hidden md:inline'>
                        Cart
                    </span>
                </Box>
            </div>
        </div>
    )
}

export default Navbar