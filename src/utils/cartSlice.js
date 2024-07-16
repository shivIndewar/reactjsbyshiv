import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'store',
    initialState :{
        items:[]
    },
    reducers :{
        addItem :(state, action)=>{
            state.items.push(action.payload);
        },
        removeItem : ()=>{
            state.pop();
        },
        clearCart :(state)=>{
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
