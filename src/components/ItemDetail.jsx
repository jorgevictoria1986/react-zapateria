
import React from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import { useState, useContext  } from 'react';
import { CartContext } from './CartContext';
import { TopButton } from './styledComponents';


const ItemDetail = (product) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);


    const onAdd = (qty) => {
        alert("Has agregado " + qty + " productos.");
        setItemCount(qty);
        test.addToCart(product, qty);
    }
   
  
    return (
   
    <><div className='container'>
      <div className='col-3 '>
        <div className='card h-100'>
          <img src={product.image} alt={product.itemId} className='card-img-top'></img>
          <div className="card-body">
            <h5 className="card-title">{product.tipo}</h5>
            <h6 className="card-text">{product.talles}</h6>
            <h5 className="card-title">{product.precio}</h5>
          <div>
            <Link to={`/item/${product.itemId}`}><button>Ver detalles</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div>
        
        {
         
         itemCount === 0
        ? <ItemCount stock={5} initial={itemCount} onAdd={onAdd}/>
        : <Link to='/Cart' style={{textDecoration: 'none'}}><button variant="contained" color="secondary">CheckOut</button></Link>
           
        }
        
       
         </div>
         
         <Link to='/'><TopButton>Continuar Compranado</TopButton></Link>
         
         </>
        
             
    );
   
}






export default ItemDetail
