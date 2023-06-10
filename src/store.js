import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cart/CartSlice"
import modalReducer from "./slices/modal/ModalSlice"

// reduxjs/toolkitからstoreを作る。
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    },
})