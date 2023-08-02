import React, { useEffect, useState } from 'react'
import ProductCard from '../custom/ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, updateProduct } from '../../redux/productSlice';

const WishListProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.wishlist.items);
    // const filteredProducts = useSelector((state) => state.products.filteredProducts);
    // const status = useSelector((state) => state.products.status);
    // useEffect(() => {
    //     dispatch(fetchProducts());
    // }, [dispatch]);
    // const getProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products')
    //     const data = await res.json()
    //     setProducts(data)
    //     console.log(data)
    // }
    // useEffect(() => {
    //     getProducts()
    // }, [])

    return (
        <div className='flex flex-col gap-y-10 p-4'>
            <h1 className='text-4xl font-semibold'>Your Wishlist</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    products.map(product => (
                        <ProductCard product={product} key={product.id} loading={false} dispatch={dispatch} />)
                    )}
            </div>
        </div>
    )
}

export default WishListProducts