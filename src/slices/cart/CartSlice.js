import {createSlice} from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0
}

// スライスは、state, reducer, actionCreatorをまとめたもの
// actionCreatorは、reducerの中に含まれる。
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // "clearCart"がそのままaction名になる
        clearCart: (state) => {
            // state.cartItems = []
            // initialStateを↓にすると、amountも0になる
            return {cartItems: [], amount: 0, total: 0}
        }
    },
});

// action
export const {clearCart} = cartSlice.actions

// reducer
export default cartSlice.reducer