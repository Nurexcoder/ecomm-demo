import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import { AiOutlineInbox } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import ReadMore from '../components/custom/ReadMore'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../redux/cartSlice'
const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState()
    const [counter, setCounter] = useState(1)
    const dispatch = useDispatch()
    const getProduct = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        setProduct(data)
    }

    useEffect(() => {
        document.title = 'ECOM | Product Page'
          
        getProduct()
    }, [])
    const handleCounterChange = (isDesc) => {
        if (isDesc && counter > 1) {
            setCounter(prevCounter => prevCounter - 1)
        }
        else if (!isDesc) {
            setCounter(prevCounter => prevCounter + 1)
        }
    }
    if (!product)
        return <h1>Loading...</h1>

    const handleAddToCart = () => {
        const tempProduct = product
        tempProduct.quantity = counter
        dispatch(addItemToCart(tempProduct))
    }
    return (
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start p-4 gap-x-10'>
            <div className="flex-1 flex items-center justify-center bg-[#f5f6f6] p-2">
                <img src={product.image} className="mix-blend-multiply max-h-[400px] md:max-h-[500px] p-4" alt="" />
            </div>
            <div className="flex-1 flex justify-start items-start flex-col h-full p-2 gap-7">
                <div className="grid gap-2">

                    <h1 className='text-3xl font-bold'>{product.title}</h1>
                    <ReadMore  >
                        {product.description}
                    </ReadMore>
                    {/* <p className='text-sm font-normal'>{product.description}</p> */}
                    <div className=" flex items-center">

                        <Rating name="simple-controlled" value={product.rating.rate} readOnly />
                        <span>({product.rating.count})</span>
                    </div>
                </div>
                <div className="">
                    <h1 className='text-2xl font-bold'>
                        ${product.price} or ${((product.price + (5 * product.price) / 100) / 6).toFixed(2)}/month
                    </h1>
                    <p className="text-sm font-normal">
                        Suggested payments with 6 months special financing
                    </p>
                </div>
                <div className="flex items-center gap-x-5">
                    <div className="p-1 bg-[#f5f6f6] rounded-full flex  items-center text-xl">
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
                    <div className='text-xs'>
                        Only <span className='text-red-900'> 12 items</span> left!
                        <br /> Don&apos;t miss this deal.
                    </div>
                </div>
                <div className="flex items-center gap-x-5">
                    <button className='bg-green-900 text-white px-8 py-2 rounded-full hover:bg-green-700 transition' onClick={handleAddToCart}>Add to Cart</button>
                    <button className='bg-white text-black border-green-900 border px-8 py-2 rounded-full hover:bg-green-700 hover:text-white transition'>Buy Now</button>
                </div>
                <div className="flex items-start gap-5">
                    <CiDeliveryTruck className='text-2xl text-orange-500' />
                    <div className="grid text-xs">
                        <span className='font-bold'>Free Dilivery</span>
                        <span className='underline'>Enter your postal code for dilivery</span>
                    </div>
                </div>
                <div className="flex items-start gap-5">
                    <AiOutlineInbox className='text-2xl text-orange-500' />
                    <div className="grid text-xs">
                        <span className='font-bold'>Return available</span>
                        <span className='underline'>30 days return policy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage