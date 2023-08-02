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

export const fetchCategoryProducts = createAsyncThunk('products/fetchProducts/category', async (category) => {
    const response = await axios.get('https://fakestoreapi.com/products/category/' + category);
    return response.data;
});



const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductWishlistStatus: (state, action) => {
            const { productId, isWishlisted } = action.payload;
            console.log(isWishlisted)
            state.products = state.products.map((product) =>
                product.id === productId ? { ...product, isWishlisted: isWishlisted } : product
            );
            return state
        },
        setPriceRange: (state, action) => {

            const { min, max } = action.payload
            console.log(min, max)
            state.filteredProducts = state.products.filter((product) => {
                return product.price >= min && (max !== undefined ? (product.price <= max) : true)
            })
            console.log(state.filteredProducts)
        },
        sortProductByPrice: (state, action) => {
            const { sort } = action.payload
            console.log(sort)
            if (sort == 'Low to High') {
                state.filteredProducts = state.filteredProducts.length ? state.filteredProducts : [...state.products]
                state.filteredProducts = state.filteredProducts.sort((a, b) => a.price - b.price)
            } else if (sort == 'High to Low') {
                state.filteredProducts = state.filteredProducts.length ? state.filteredProducts : [...state.products]
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
            .addCase(fetchCategoryProducts.pending, (state) => {
                state.status = 'loading';
                state.error = 'error';
            })
            .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchCategoryProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            }).addCase(setPriceRange, (state, action) => {
                // Call the fetchProducts action when the price range changes
                state.products = []; // Clear the products array
                dispatch(fetchProducts()); // Dispatch the fetchProducts action
            });
    },
});
export const { setProductWishlistStatus, setPriceRange, sortProductByPrice } = productSlice.actions;
export default productSlice.reducer;