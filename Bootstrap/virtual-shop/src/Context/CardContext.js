import React, { createContext, useState} from "react";

export const CartContest=createContext();
export const CartProvide=({children})=>{
    const [cart,setCart]=useState([]);
    const addToCart=(product)=>{
        setCart([...cart,product])  
    }
    const removeFromCart=(productId)=>{
        set(cart.filter(item=>item.id !==productId))
    };
    const updateQuantity=(productId,quantity)=>{
        setCart(cart.map(product=>product.id===productId ?{...product , quantity}:product
        ));
    }
    const total = cart.reduce((sum, product)=> sum +product.price*product.quantity,0);
    return(
        <CartContest.Provider value={{cart,addToCart,removeFromCart,updateQuantity,total}}>
        {children}
        </CartContest.Provider>
    );

};