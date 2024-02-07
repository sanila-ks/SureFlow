
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { productId: "p001", productName: "Maggi", price: "430", quantity: 43, threshold: 12, expiry: "11/12/22", availability: "In-stock" },
    { productId: "p002", productName: "Bru", price: "257", quantity: 22, threshold: 12, expiry: "21/12/22", availability: "Out of stock" },
    { productId: "p003", productName: "Red Bull", price: "405", quantity: 36, threshold: 9, expiry: "5/12/22", availability: "In-stock" },
    { productId: "p004", productName: "Ariel", price: "508", quantity: 10, threshold: 5, expiry: "20/12/22", availability: "Out of stock" },
];

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        addProduct(state, action) {
            console.log("add action", action)
            state.push(action.payload)
        },
        deleteProduct(state, action) {
            let index = state.findIndex(data => data.productId === action.payload.productId)
            state.splice(index, 1)
        }
    }
})

export const {
    addProduct,
    deleteProduct
} = productsSlice.actions;

export default productsSlice.reducer;