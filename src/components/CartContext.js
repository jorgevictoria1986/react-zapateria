import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (product, qty) => {
        let found = cartList.find(product => product.idItem === product.itemId);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: product.itemId,
                    imgItem: `/img/${product.image}`,
                    nameItem: product.tipo,
                    costItem: product.precio,
                    qtyItem: qty
                }
            ]);
        } else {
            //al encontrarlo, entonces aumentamos el qty de ese producto
            found.qtyItem += qty;
            setCartList([
                ...cartList
            ]);
        }
    }

    // console.log(addToCart)
    
    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (itemId) => {
        let result = cartList.filter(product => product.idItem != itemId);
        setCartList(result);
    }

    const calcTotalPerItem = (itemId) => {
        let index = cartList.map(product => product.itemId).indexOf(itemId);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(product => calcTotalPerItem(product.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTaxes = () => {
        return calcSubTotal() * 0.18;
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(product => product.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }


    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            removeList, 
            deleteItem, 
            calcTotalPerItem, 
            calcSubTotal, 
            calcTaxes, 
            calcTotal,
            calcItemsQty
        }}>
            
            { children }
        </CartContext.Provider>
    );
}



export default CartContextProvider;