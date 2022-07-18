import React from 'react'
import Item from './Item'


const ItemList = ({items}) => {
  return (
    <div>
    {items.map (item => <Item key={item.id} tipo={item.tipo} talles={item.talles} image={item.image} precio={item.precio} />)}
    </div>
  
  )
}
 

export default ItemList