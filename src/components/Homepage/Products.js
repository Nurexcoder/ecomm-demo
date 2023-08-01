import React, { useEffect, useState } from 'react'
import ProductCard from '../custom/ProductCard'

const Products = () => {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProducts(data)
        console.log(data)
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className='flex flex-col gap-y-10 p-4'>
            <h1 className='text-4xl font-semibold'>Products for you</h1>
            <div className="grid grid-cols-3 gap-10">
                {
                    products.map(product => (
                        <ProductCard product={product} key={product.id} />)
                    )}
            </div>
        </div>
    )
}

export default Products