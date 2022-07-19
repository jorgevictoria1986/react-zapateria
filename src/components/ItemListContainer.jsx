import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router'
import products from '../data/MOCK_DATA.json'
import ItemList from './ItemList';

const ItemListContainer = () => {

const [productList, setProductList] = useState([])
 
const {id} = useParams();

useEffect(() =>{

if (id === undefined){

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 200);
  })


  myPromise.then((res) => {
     setProductList(res)
  })
     }else{

      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products.filter(product => product.categoryId == id));
        }, 200);
      })
    
    
      myPromise.then((res) => {
         setProductList(res)
      })

     }


},[id]);






  return (
    <>
    <ItemList items={ productList } />
    </>
    

  )

}



  export default ItemListContainer