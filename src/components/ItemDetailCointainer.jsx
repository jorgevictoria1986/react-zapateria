import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {
    const [productList, setProductList] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        firestoreFetchOne(itemId)
            .then(result => setProductList(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={productList} />
    );
}

export default ItemDetailContainer;