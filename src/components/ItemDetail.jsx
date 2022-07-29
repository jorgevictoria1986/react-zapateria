import React from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import { useState, useContext  } from 'react';
import { CartContext } from './CartContext';


const ItemDetail = ({ product }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("Has agregado " + qty + " productos.");
        setItemCount(qty);
        test.addToCart(product, qty);
    }
   
  
    return (
   
    <><div>
            <div>{product.tipo}</div>
            <div>{product.talles}</div>
            <img src={`/img/${product.image}`} alt={product.id}></img>
            <div>{product.precio}</div>
            {/* {`/dir1/dir2/${elemento.img}`} */}
        </div>
        <div>
        
        {
         
         itemCount === 0
        ? <ItemCount stock={5} initial={itemCount} onAdd={onAdd}/>
        : <Link to='/Cart' style={{textDecoration: 'none'}}><button variant="contained" color="secondary">CheckOut</button></Link>
           
        }
        
       
         </div></>
        
             
    )
   
}



export default ItemDetail