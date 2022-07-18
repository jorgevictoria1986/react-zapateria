import React from 'react'
import './ItemStyle.css'

const Item = (product) => {
  return (
    <div className='container'>
    <div className='col-3'>
    <div className='card h-100'>
    <img src={`/img/${product.image}`} alt={product.id} className='card-img-top'></img>
    <div class="card-body">
        <h5 class="card-title">{product.tipo}</h5>
        <h6 class="card-text">{product.talles}</h6>
        <h5 class="card-title">{product.precio}</h5>
    </div>
    </div>
    </div>
    </div>
  )
}


export default Item

