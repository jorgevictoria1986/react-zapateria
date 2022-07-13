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

export default Item