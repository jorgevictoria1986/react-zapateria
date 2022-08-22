import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { firestoreFetchOne, firestoreFetch } from "../utils/firestoreFetch";
import { doc, getDoc } from "firebase/firestore";
import  db  from '../utils/firebaseConfig'

const ItemDetailContainer = () => {
    const [productList, setProductList] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
      firestoreFetchOne(idItem)
            .then(result => setProductList(result))
            .catch(err => console.log(err))
    
        // const firestoreFetchOne = async () => {
        // const docRef = doc(db, "products", "4OhViAnxbu5tORmkwwCx");
        // const docSnap = await getDoc(docRef);

        //   if (docSnap.exists()) {
        //   console.log("Document data:", docSnap.data());
        //     } else {
        //   // doc.data() will be undefined in this case
        //   console.log("No such document!");
        // }

    // }
    // firestoreFetchOne()
    // .then(result => setProductList(result))
    // .catch(err => console.log(err));


    }, []);
    
    // useEffect(() => {
    //     return (() => {
    //       setProductList([]);
    //     })
    // }, []);
    
    return (
        <ItemDetail product={productList} />
    );
}

export default ItemDetailContainer;