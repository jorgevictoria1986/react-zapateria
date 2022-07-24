import React from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'


const ItemDetail = ({product}) => {
    const onAdd =(param) => {console.log(`La cantidad comprada es ${param}`)}
  
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
         
         ItemCount === 0
        ? <ItemCount stock={5} initial={0} onAdd={onAdd}/>
        : <Link to='/Cart' style={{textDecoration: 'none'}}><button variant="contained" color="secondary">CheckOut</button></Link>
 
        }
         </div></>
        

    )
}

export default ItemDetail