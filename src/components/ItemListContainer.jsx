import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetch } from '../utils/firestoreFetch';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const { categoryId } = useParams();

    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(categoryId)
            .then(result => setProductList(result))
            .catch(err => console.log(err));
    }, [categoryId]);

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