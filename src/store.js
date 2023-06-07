import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cart/CartSlice"

// reduxjs/toolkitからstoreを作る。
export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})