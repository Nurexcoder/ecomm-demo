import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import SelectBox from './custom/SelectBox'

const Filter = () => {
    const [category, setCategory] = useState([
        { name: "Category (all)" },
        { name: "electronics" },
        { name: "jewelery" },
        { name: "men's clothing" },
        { name: "women's clothing" }])
    const [sortBy, setSortBy] = useState([
        { name: 'Sort By' },
        { name: 'Low to High' },
        { name: 'High to Low' },

    ])
    const [price, setPrice] = useState([
        { name: 'Price (All)' },
        { name: '$0 - $50' },
        { name: '$50 - $100' },
        { name: '$100+' },
    ])
    return (
        <div className='flex items-center justify-between w-full p-4'>
            <div className="flex items-center gap-x-2 flex-1">
                <SelectBox options={category} setOptions={setCategory} />
                <SelectBox options={price} setOptions={setPrice} />
            </div>
            <div className="flex items-center gap-x-2 flex-1 justify-end">
                <SelectBox options={sortBy} setOptions={setSortBy} />
            </div>
        </div>
    )
}

export default Filter