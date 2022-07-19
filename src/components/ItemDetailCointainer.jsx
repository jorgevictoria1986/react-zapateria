import { useState } from 'react';
import {useParams} from 'react-router'
import products from '../data/MOCK_DATA.json'
import ItemDetail from './ItemDetail';
// import ItemList from './ItemList';
import { useEffect } from 'react';

const ItemDetailCointainer = () => {

const [productList, setProductList] = useState({})

const {id} = useParams();

useEffect(() =>{


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products[id]);
    }, 200);
  }) 

  myPromise.then((res) => {
     setProductList(res)
  })

},[id])

  return (
    <>
    <ItemDetail product={ productList } />
    </>
    

  )

}

export default ItemDetailCointainer