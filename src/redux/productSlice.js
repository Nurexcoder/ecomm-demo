// src/redux/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
    filteredProducts: [],
    categories: [],
    status: 'idle',
    error: null,
};

// Async Thunk for fetching products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');

    const newResponse = response.data.map((product) => {
        product.isWishlisted = false
        return product
    })
    return newResponse;
});

// export const fetchCategoryProducts = createAsyncThunk('products/fetchProducts/category', async (category) => {
//     if (category === 'Category (all)') {

//         return []
//     }
    
//     const response = await axios.get('https://fakestoreapi.com/products/category/' + category);
//     return response.data;
// });



const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProductsByCategory: (state, action) => {
            const { category } = action.payload;
            console.log(category)
            state.filteredProducts = state.products.filter((product) => product.category === category)

        },
        setProductWishlistStatus: (state, action) => {
            const { productId, isWishlisted } = action.payload;
            state.products = state.products.map((product) =>
                product.id === productId ? { ...product, isWishlisted: isWishlisted } : product
            );
            return state
        },
        sortProductByPrice: (state, action) => {
            const { sort } = action.payload
            console.log(sort)
            state.filteredProducts = state.filteredProducts.length ? state.filteredProducts : [...state.products]
            if (sort == 'Low to High') {

                state.filteredProducts = state.filteredProducts.sort((a, b) => a.price - b.price)
            } else if (sort == 'High to Low') {
                state.filteredProducts = state.filteredProducts.sort((a, b) => b.price - a.price)
            }
            else {
                state.filteredProducts = []
            }
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});
export const { setProductWishlistStatus,getProductsByCategory, sortProductByPrice } = productSlice.actions;
export default productSlice.reducer;
