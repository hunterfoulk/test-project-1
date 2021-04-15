import React, { createContext, useReducer } from 'react';
import { cartReducer } from "../context/cartReducer"


export const CartContext = createContext(undefined);


export const CartContextProvider = ({ children }) => {
    const initialState = {
        cart: [],
        cartCount: 0


    };
    const [cartData, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cartData, dispatch }}>
            { children}
        </CartContext.Provider>
    );
};