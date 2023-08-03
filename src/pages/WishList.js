import React, { useEffect } from 'react'
import WishListProducts from '../components/WishList/Products'

const WishList = () => {
    useEffect(() => {
        document.title = 'ECOM | Wishlist Page'
      
    }, [])
    
  return (
    <div className='flex flex-col gap-y-8'>
        <WishListProducts/>
    </div>
  )
}

export default WishList