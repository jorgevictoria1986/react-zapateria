import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { firestoreFetchOne, firestoreFetch } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {
    const [productList, setProductList] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        firestoreFetchOne(itemId)
            .then(result => setProductList(result))
            .catch(err => console.log(err))
    }, [itemId]);
    
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