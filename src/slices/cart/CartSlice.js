import {createSlice} from "@reduxjs/toolkit";

const cartItems = [
    {
        id: 1,
        title: "Next.js入門講座",
        price: "12000",
        img: "https://uploda1.ysklog.net/uploda/3f3dc982dc.png",
        amount: 1,
    },
    {
        id: 2,
        title: "MERNスタックで本格的なSNSアプリ構築講座",
        price: "24000",
        img: "https://uploda1.ysklog.net/uploda/bf73156667.png",
        amount: 1,
    },
    {
        id: 3,
        title: "GraphQLとApollo入門講座",
        price: "8900",
        img: "https://uploda1.ysklog.net/uploda/9a99f8ca04.png",
        amount: 1,
    },
    {
        id: 4,
        title: "Three.jsでモダンウェブサイト構築講座",
        price: "14000",
        img: "https://uploda1.ysklog.net/uploda/59060b3cd3.png",
        amount: 1,
    },
];


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
        clearCart: (state, action) => {
            console.log(state, action)
            // state.cartItems = []
            // initialStateを↓にすると、amountも0になる
            return {cartItems: [], amount: 0, total: 0}
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            cartItem.amount = cartItem.amount + 1
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            cartItem.amount = cartItem.amount - 1
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            })
            state.amount = amount
            state.total = total
        }
    },
});

// action
export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions

// reducer
export default cartSlice.reducer
