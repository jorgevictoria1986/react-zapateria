import React from 'react'
import ItemCount from './ItemCount';

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
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
         </div></>
        

    )
}

export default ItemDetail