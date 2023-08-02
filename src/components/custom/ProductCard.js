import { Rating } from '@mui/material'
import React from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../redux/wishlistSlice';
import { setProductWishlistStatus } from '../../redux/productSlice';
import { addItemToCart } from '../../redux/cartSlice';

const ProductCard = ({ product, loading }) => {
    const dispatch=useDispatch();
    const handleToggleWishlist = () => {
        if(!loading){
            if (product.isWishlisted) {
                dispatch(removeFromWishlist(product.id));
              } else {
                dispatch(addToWishlist(product));
              }
            dispatch(setProductWishlistStatus({ productId: product.id, isWishlisted: !product?.isWishlisted }));
        }
    };
    const handleAddToCart=() => {
        dispatch(addItemToCart(product));
    }
    return (
        <div className={`flex items-start justify-center flex-col   group/product ${loading && 'animate-pulse'} `}>
            <div className="bg-[#f5f6f6] w-full flex items-center justify-center p-4 relative ">

                <img src={product?.image} alt="" className={`h-60 mix-blend-multiply group-hover/product:scale-105 delay-75 transition  `} />
                <div className="absolute top-1 right-3 " onClick={handleToggleWishlist}>
                    {product?.isWishlisted ?
                        <BsHeartFill className='text-2xl text-red-900' /> :
                        <BsHeart className='text-2xl text-red-900' />
                    }
                </div>
            </div>
            <div className="w-full p-2 grid gap-2">
                <div className="w-full flex justify-between items-center">
                    <h1 className='text-xl font-bold'>{product?.name}</h1>
                    <h1 className='text-xl font-bold'>${product?.price}</h1>
                </div>

                <div className="w-full flex justify-start gap-x-1 items-center">
                    <span className='text-sm font-normal capitalize'>{product?.category}</span>
                </div>
                <div className="w-full flex  gap-x-1 items-center">
                    <Rating
                        name="simple-controlled"
                        value={product?.rating?.rate}
                        precision={0.1}
                        readOnly
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    />
                    <span className='text-xs'>({product?.rating?.count})</span>
                </div>

                <div className="w-full flex  items-center justify-start gap-x-2">
                    <button onClick={handleAddToCart} className="bg-green-900 text-white px-8 py-2 rounded-full hover:bg-green-700 transition">Add to Cart</button>
                </div>

            </div>
        </div>
    )
}

export default ProductCard