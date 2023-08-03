import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '../../redux/cartSlice'
import { Tooltip } from '@mui/material'
import { AiFillDelete } from 'react-icons/ai'

const CartProductCard = ({ product }) => {
    const [counter, setCounter] = useState(product?.quantity)
    const dispatch = useDispatch()
    const handleCounterChange = (isDesc) => {
        if (isDesc && counter > 1) {
            setCounter(prevCounter => prevCounter - 1)
        }
        else if (!isDesc) {
            setCounter(prevCounter => prevCounter + 1)
        }
    }
    const handleCartUpdate = () => {
        const tempProduct = { ...product }
        tempProduct.quantity = counter - tempProduct.quantity
        dispatch(addItemToCart(tempProduct))
    }
    const handleRemoveItem=()=>{
        dispatch(removeItemFromCart(product.id))
    }
    return (
        <div className='flex flex-col sm:flex-row gap-x-4 gap-y-3 items-start bg-slate-100 p-2'>
            <div className=" ">

                <img src={product.image} alt={product.title} className='w-20 h-20 mix-blend-multiply' />

            </div>
            <div className="flex flex-col items-start justify-between h-full">
                <div className="flex gap-x-4 items-start  md:items-center flex-col md:flex-row">
                    <Tooltip title={product.title}>

                        <h1 className='font-bold text-sm'>{product.title?.substr(0, 50)}</h1>
                    </Tooltip>
                    <h1 className='text-sm font-normal'>$({product.price} per piece)</h1>
                </div>
                <div className="flex gap-x-5 gap-y-2 flex-col md:flex-row items-center">

                    <div className=" bg-[#f5f6f6] rounded-full flex  items-center text-xl">
                        <button className='px-3 py-1 rounded-l-full' onClick={() => handleCounterChange(true)}>
                            -
                        </button>
                        <span className='px-3'>

                            {counter}
                        </span>
                        <button className='px-3 py-1 rounded-r-full' onClick={() => handleCounterChange(false)}>
                            +
                        </button>
                    </div>

                    <button className='bg-green-900 text-white px-8 py-1 rounded-full hover:bg-green-700 transition capitalize' onClick={handleCartUpdate}>Update <span className='hidden sm:inline'> Cart</span> </button>
                    <button className='text-red-500 text-xl' onClick={handleRemoveItem}><AiFillDelete/></button>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard