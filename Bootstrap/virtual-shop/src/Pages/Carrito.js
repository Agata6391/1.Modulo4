import { useState } from "react";
import React from "react";
import {CardContext} from "../Context/CardContext";
const carrito=()=>{
    const {carrito, removeFromCart, updateQuantity,total}=React.useContext(CardContext)
};