import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr, Top, TopButton, TopText, Summary, SummaryItem, SummaryTitle, SummaryItemText, SummaryItemPrice, Button } from './styledComponents';

import styled from "styled-components";



const Cart = () => {
    const test = useContext(CartContext);
    // console.log(test.CartContext)

    return (
        <WrapperCart>
            <TitleCart>Tu carrito</TitleCart>
            <Top>
                <Link to='/'><TopButton>Continuar Compranado</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.removeList}>Detalle de Productos</TopButton>
                    : <TopText>Carrito Vacio</TopText>
                }
            </Top>
            <ContentCart>
                    {
                        test.cartList.length > 0 ? 
                        test.cartList.map(product => 
                        <Product key={product.itemId}>
                        <ProductDetail>
                            <ImageCart src={product.image} />
                            <Details>
                            <span>
                                <b>Product:</b> {product.tipo}
                            </span>
                            <TopButton type="filled" onClick={() => test.deleteItem(product.itemId)}>Borrar</TopButton>
                            </Details>
                        </ProductDetail>
                        {/* <PriceDetail>
                            <ProductAmountContainer>
                            <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                            </ProductAmountContainer>
                            <ProductPrice>$ {product.precio} each</ProductPrice>
                        </PriceDetail> */}
                        </Product>
                        )
                        : <TitleCart></TitleCart>
                    }
            </ContentCart>
        </WrapperCart>
    );
    
}

export default Cart;