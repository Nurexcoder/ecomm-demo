import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SelectBox from './custom/SelectBox'
import { useDispatch } from 'react-redux';
import {  getProductsByCategory, sortProductByPrice } from '../redux/productSlice';

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
    const handleSortChange = (value) => {

        setSelectedSortBy(value)
        dispatch(sortProductByPrice({ sort: value?.name }))
    }
    useEffect(() => {
        // if (selectCategory?.name !== 'Category (all)') {
        dispatch(getProductsByCategory({ category: selectCategory?.name}))
        // }
        if (selectedSortBy?.name !== 'Sort By') {
            handleSortChange(selectedSortBy)
        }
    }, [selectCategory])




    return (
        <div className='flex flex-col md:flex-row  items-start md:items-center justify-between w-full p-2 md:p-4'>
            <div className="flex items-center gap-x-2 flex-1">
                <SelectBox options={category} selected={selectCategory} setSelected={setSelectCategory} />
            </div>
            <div className="flex items-center gap-x-2 flex-1 justify-end">
                <SelectBox options={sortBy} selected={selectedSortBy} setSelected={handleSortChange} />
            </div>
        </div>
    )
}

export default Filter