import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice } from './styledComponents';
import { Top, TopButton, TopText, Bottom, Button, Info, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle } from './styledComponents';

import FormatNumber from "./FormatNumber";
// import styled from "styled-components";


const Cart = () => {
    const test = useContext(CartContext);

    return (
        <WrapperCart>
            <TitleCart>Tu Carrito</TitleCart>
            <Top>
                <Link to='/'><TopButton>Continuar Comprando</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.removeList}>Borrar Todo</TopButton>
                    : <TopText>Carrito Vacío</TopText>
                }
            </Top>
            <ContentCart>
            <Bottom>
                <Info>
                    {
                        test.cartList.length > 0 &&
                            test.cartList.map(product => 
                            <Product key={product.idItem}>
                            <ProductDetail>
                                <ImageCart src={product.imgItem} />
                                <Details>
                                <span>
                                    <b>Producto:</b> {product.nameItem}
                                </span>
                                <TopButton type="filled" onClick={() => test.deleteItem(product.idItem)}>Borrar</TopButton>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                <ProductAmount>{product.qtyItem} item(s)</ProductAmount>
                                /
                                <ProductAmount>$ {product.costItem} each</ProductAmount>
                                </ProductAmountContainer>
                                <ProductPrice>$ {test.calcTotalPerItem(product.idItem)} </ProductPrice>
                            </PriceDetail>
                            </Product>
                            )
                    }
                </Info>
                {
                    test.cartList.length > 0 &&
                        <Summary>
                            <SummaryTitle>Tu Orden</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Taxes</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Taxes Discount</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={-test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <Button>PAGAR</Button>
                        </Summary>
                }
            </Bottom>
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;