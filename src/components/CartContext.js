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
                    imgItem: product.image[0],
                    nameItem: product.tipo,
                    costItem: product.precio,
                    qtyItem: qty
                }
            ]);
        } else {
            //al encontrarlo, entonces aumentamos el qty de ese producto
            found.qtyItem += qty;
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


    return (
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem}}>
            { children }
        </CartContext.Provider>
    );
}



export default CartContextProvider;