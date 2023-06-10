import React from "react";
import {useDispatch} from "react-redux";
import {closeModal} from "../slices/modal/ModalSlice";
import {clearCart} from "../slices/cart/CartSlice";

export const Modal = () => {
    const dispatch = useDispatch()

    return (<aside className="modal-container">
        <div className="modal">
            <h4>買い物かごをすべて空にしますか？</h4>
            <div className="btn-container">
                <button className="btn confirm-btn" onClick={() => {
                    dispatch(clearCart())
                    dispatch(closeModal())
                }}>OK
                </button>
                <button className="btn clear-btn-btn" onClick={() => dispatch(closeModal())}>やめとく</button>
            </div>
        </div>
    </aside>)
}