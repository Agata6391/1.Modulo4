import { useContext } from "react";
import React from "react";
import { CardContext } from "../Context/CardContext";
const Carrito=()=>{
    const {cart, removeFromCart, updateQuantity,total}=useContext(CardContext);

    return(
        <div className="container">
            <h1>Carrito</h1>
            {cart.lenght === 0 ?(
                <p>No hay productos en el carrito</p>
            ):(
                <div>
                    {cart.map( product=>(
                        <div key={product.id}>
                        <h4>{product.title}</h4>
                        <p>{product.price}</p>
                        <input
                        type="number"
                        value={product.quantity}
                        onChange={(e)=>updateQuantity(product.id,e.target.value)}
                        />                       
                        <button onClick={()=>removeFromCart(product.id)}>Eliminar</button>
                        </div>

                    ))}
                    <p>Total: ${total}</p>
                </div>
            )}
            
        </div>
    );

};
export default Carrito