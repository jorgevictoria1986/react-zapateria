import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetch } from '../utils/firestoreFetch';
import { collection, getDocs } from "firebase/firestore";
import  db  from '../utils/firebaseConfig'

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const { idCategory } = useParams();

    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setProductList(result))
            .catch(err => console.log(err));
        // const firestoreFetch = async () => {
        // const querySnapshot = await getDocs(collection(db, "products"));
        // const dataFromFiresotre = querySnapshot.docs.map((doc) => ({
        //     id: doc.id,
        //     ...doc.data()
        //  }));
        //  return dataFromFiresotre
        // }
      
        // firestoreFetch()
        // .then(result => setProductList(result))
        // .catch(err => console.log(err));

    }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
          setProductList([]);
        })
    }, []);

    return (
            <ItemList items={productList} />
    );
}

export default ItemListContainer;