import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SelectBox from './custom/SelectBox'
import { useDispatch } from 'react-redux';
import { fetchCategoryProducts, setPriceRange, sortProductByPrice } from '../redux/productSlice';

const Filter = () => {
    const dispatch = useDispatch();

    const [category, setCategory] = useState([
        { name: "Category (all)" },
        { name: "electronics" },
        { name: "jewelery" },
        { name: "men's clothing" },
        { name: "women's clothing" }])
    const [selectCategory, setSelectCategory] = useState(category[0])
    const [sortBy, setSortBy] = useState([
        { name: 'Sort By' },
        { name: 'Low to High' },
        { name: 'High to Low' },

    ])
    const [selectedSortBy, setSelectedSortBy] = useState(sortBy[0])
    const [price, setPrice] = useState([
        { name: 'Price (All)' },
        { name: '$0-$50' },
        { name: '$50-$100' },
        { name: '$100   +' },
    ])
    const [selectPrice, setSelectPrice] = useState(price[0])

    useEffect(() => {
        // if (selectCategory?.name !== 'Category (all)') {
            dispatch(fetchCategoryProducts(selectCategory?.name))
        // }
    }, [selectCategory])
    const handlePriceRangeChange = (value) => {
        setSelectPrice(value)
        const minMax = value?.name?.split('-')?.map((x) => parseInt(x.slice(1)))
        console.log(minMax)
        dispatch(setPriceRange(minMax.length === 2 ? { min: minMax[0], max: minMax[1] } : { min: minMax[0] }))
    }

    const handleSortChange = (value) => {
        setSelectedSortBy(value)
        dispatch(sortProductByPrice({sort:value?.name}))
    }

    return (
        <div className='flex flex-col md:flex-row  items-start md:items-center justify-between w-full p-2 md:p-4'>
            <div className="flex items-center gap-x-2 flex-1">
                <SelectBox options={category} selected={selectCategory} setSelected={setSelectCategory} />
                <SelectBox options={price} setSelected={handlePriceRangeChange} selected={selectPrice} />
            </div>
            <div className="flex items-center gap-x-2 flex-1 justify-end">
                <SelectBox options={sortBy} selected={selectedSortBy} setSelected={handleSortChange} />
            </div>
        </div>
    )
}

export default Filter