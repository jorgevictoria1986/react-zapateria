import { useState } from 'react';
import products from '../data/MOCK_DATA.json'
import ItemList from './ItemList';



const [productList, setProductList] = useState([])

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 200);
  })

  myPromise.then((res) => {
     setProductList(res)
  })

  export default ItemListContainer