import React from 'react'



const ItemDetail = (product) => {
   
  
    return (
   
    <div>
        <div>{product.tipo}</div>
        <div>{product.talles}</div>
        <img src={product.image}></img>
        <div>{product.precio}</div>
        
        </div>
  
    )
}

export default ItemDetail