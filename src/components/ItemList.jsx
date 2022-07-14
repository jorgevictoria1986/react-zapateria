import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
  return (
    <div>
    {items.map (item => <Item key={item.id} product={ item } /> )}
    </div>
  )
}


// const ItemList = ({ products }) => {
//   return (
//     <div className="justify-content-center row row-cols-1 row-cols-sm-2 g-3">
//       {products.map((el) => (
//         <Item {...el} key={el.id} />
//       ))}
//     </div>
//   );
// };




export default ItemList