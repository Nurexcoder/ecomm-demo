import React, { useEffect, useState } from 'react'
import ProductCard from '../custom/ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, updateProduct } from '../../redux/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const filteredProducts = useSelector((state) => state.products.filteredProducts);
    const status = useSelector((state) => state.products.status);
    console.log(filteredProducts)
    useEffect(() => {
        if(!products.length)
            dispatch(fetchProducts());
    }, [dispatch]);
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
            <h1 className='text-4xl font-semibold'>Products for you</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {status === 'loading' ? (<>
                    <ProductCard loading={true} />
                    <ProductCard loading={true} />
                    <ProductCard loading={true} />
                </>) :
                    filteredProducts.length ? filteredProducts.map(product => (
                        <ProductCard product={product} key={product.id} loading={false} dispatch={dispatch} />
                    )) :
                        products.map(product => (
                            <ProductCard product={product} key={product.id} loading={false} dispatch={dispatch} />)
                        )}
            </div>
        </div>
    )
}

export default Products