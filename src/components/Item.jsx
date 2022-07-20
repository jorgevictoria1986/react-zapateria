import React from 'react'
import './ItemStyle.css'
import { Link } from 'react-router-dom'


const Item = (product) => {



  return (
    <><div className='container'>
      <div className='col-3 '>
        <div className='card h-100'>
          <img src={`/img/${product.image}`} alt={product.id} className='card-img-top'></img>
          <div className="card-body">
            <h5 className="card-title">{product.tipo}</h5>
            <h6 className="card-text">{product.talles}</h6>
            <h5 className="card-title">{product.precio}</h5>
          <div>
            <Link to={`/item/${product.id}`}><button>Ver detalles</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
        
      </>


  )
}


export default Item

