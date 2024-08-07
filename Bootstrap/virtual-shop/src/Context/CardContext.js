import React, { createContext, useState} from "react";

export const CardContext=createContext();
export const CartProvide=({children})=>{
    const [cart,setCart]=useState([]);
    const addToCart=(product)=>{
        setCart([...cart,product])  
    }
    const removeFromCart=(productId)=>{
        setCart(cart.filter(item=>item.id !==productId))
    };
    const updateQuantity=(productId,quantity)=>{
        setCart(cart.map(product=>product.id===productId ?{...product , quantity}:product
        ));
    }
    const total = cart.reduce((sum, product)=> sum +product.price*product.quantity,0);
    return(
        <CardContext.Provider value={{cart,addToCart,removeFromCart,updateQuantity,total}}>
        {children}
        </CardContext.Provider>
    );

};
