import React from 'react'

const Trending = () => {
  return (
    <div className='w-full flex bg-[#f3bfa1] p-4 px-10'>
        <div className='flex-1 flex items-start justify-center flex-col gap-4'>
            <h3 className='text-3xl md:text-5xl font-bold text-green-900'>
                Grap upto 50% Discounts <br/> on Selected Items
            </h3>
            <button className='bg-green-900 text-white px-8 py-2 rounded-xl hover:bg-green-700 transition'>Shop Now</button>
        </div>
        <div className="flex-1 flex justify-center">
            <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" className="mix-blend-multiply max-h-[200px] md:max-h-[300px]" alt="" />
        </div>
    </div>
  )
}

export default Trending