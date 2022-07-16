import { useState } from 'react';

import products from '../data/MOCK_DATA.json'
import ItemDetail from './ItemDetail';
// import ItemList from './ItemList';

const ItemDetailCointainer = () => {

const [productList, setProductList] = useState([])

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products[2]);
    }, 200);
  })

  myPromise.then((res) => {
     setProductList(res)
  })

  return (
    <>
    <ItemDetail items={ productList } />
    </>
    

  )

}

export default ItemDetailCointainer