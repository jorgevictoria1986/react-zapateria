import React from 'react'

const Item = (product) => {
  return (
    <div>
        <div>{product.tipo}</div>
        <div>{product.talles}</div>
        <div>{product.image}</div>
        <div>{product.precio}</div>

    </div>
  )
}

// const Item = (el) => {
//   return (
//     <div>
//         <div>{el.tipo}</div>
//         <div>{el.talles}</div>
//         <div>{el.image}</div>
//         <div>{el.precio}</div>

//     </div>
//   )
// }

export default Item