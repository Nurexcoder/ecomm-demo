import { Rating } from '@mui/material'
import React from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../redux/wishlistSlice';
import { setProductWishlistStatus } from '../../redux/productSlice';
import { addItemToCart } from '../../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ product, loading }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleToggleWishlist = () => {
        if (!loading) {
            dispatch(setProductWishlistStatus({ productId: product.id, isWishlisted: !product?.isWishlisted }));
            let tempProduct={...product};
            if (product.isWishlisted) {
                // tempProduct.isWishlisted=false
                dispatch(removeFromWishlist(tempProduct.id));
            } else {
                // let tempProduct=product;
                tempProduct.isWishlisted=true
                dispatch(addToWishlist(tempProduct));
            }
        }
    };
    const handleAddToCart = () => {
        
        dispatch(addItemToCart(product));
    }
    return (
        <div className={`flex items-start justify-center flex-col   group/product ${loading && 'animate-pulse'} `}>

            <div className="bg-[#f5f6f6] w-full flex items-center justify-center p-4 relative ">
                <Link to={`/product/${product?.id}`} className=''>

                    <img src={product?.image} alt="" className={`h-60 mix-blend-multiply group-hover/product:scale-105 delay-75 transition  `} />
                </Link>
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

                <div className="w-full flex  items-center justify-between gap-x-2">
                    <button onClick={handleAddToCart} className="bg-green-900 text-white px-8 py-2 rounded-full hover:bg-green-700 transition">{product?.inCard ? 'Added to Card' : 'Add to Cart'}</button>
                    <button onClick={() => navigate('/product/' + product?.id)} className="bg-white text-black px-8 py-2 rounded-full hover:bg-green-700 hover:text-white border border-green-800  transition">View Product</button>
                </div>

            </div>
        </div>
    )
}

export default ProductCard