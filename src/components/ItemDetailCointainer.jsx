import { useState } from 'react';

import products from '../data/MOCK_DATA.json'
import ItemDetail from './ItemDetail';
// import ItemList from './ItemList';
import '/ItemStyle.css'

const ItemDetailCointainer = () => {

const [productList, setProductList] = useState({})

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products[0]);
    }, 200);
  }) 

  myPromise.then((res) => {
     setProductList(res)
  })

  return (
    <>
    <ItemDetail product={ productList } />
    </>
    

  )

}

export default ItemDetailCointainer