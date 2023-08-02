import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProductCard from '../components/Cart/CartProductCard'

const CartPage = () => {
    const dispatch = useDispatch()
    const cartProducts = useSelector((state) => state.cart.items)
    const totalPrice = useSelector((state) => state.cart.totalPrice)


    console.log(cartProducts)
    return (
        <div className='grid gap-8 p-4 relative'>
            <h1 className='text-5xl font-bold'>
                Shopping Cart
            </h1>
            <div className="flex  gap-6  items-start ">
                <div className="flex-[74%] grid gap-y-20">
                    {cartProducts.length? cartProducts.map(product => (
                        <CartProductCard product={product} key={product?.id} />
                    )
                    ):<div>No Products</div>}
                </div>
                <div className="flex-1 flex justify-center sticky top-0 ">
                    <div className=" grid bg-[#f1ece2] p-4 rounded-md  sm:min-w-[200px] md:min-w-[250px]">
                        <h2 className='text-xl sm:text-2xl md:text-4xl font-bold my-2'>
                            Cart Details
                        </h2>
                        <h3 className='my-2'>
                            Total Items: {cartProducts?.length}
                        </h3>
                        <h3 className='my-2'>
                            Total Price: ${totalPrice?.toFixed(2)}
                        </h3>
                        <button className='bg-green-900 text-white px-8 py-2 rounded-md hover:bg-green-700 transition'>Checkout</button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage