import { useState } from 'react';

import products from '../data/MOCK_DATA.json'
import ItemList from './ItemList';

const ItemListContainer = () => {

const [productList, setProductList] = useState([])

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 200);
  })

  myPromise.then((res) => {
     setProductList(res)
  })

  return (
    <>
    <ItemList items={ productList } />
    </>
    

  )

}



  export default ItemListContainer