import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Top, TopButton, TopText, Summary, SummaryItem, SummaryTitle, SummaryItemText, SummaryItemPrice, Button } from './styledComponents';
import FormatNumber from "./FormatNumber";
// import styled from "styled-components";


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
                    ? <TopButton type="filled" onClick={test.removeList}>Borrar Todo</TopButton>
                    : <TopText>Carrito Vacio</TopText>
                }
            </Top>
            <ContentCart>
                    {
                        test.cartList.length > 0 ? 
                        test.cartList.map(product => 
                        <Product key={product.idItem}>
                        <ProductDetail>
                            <ImageCart src={product.imgItem} />
                            <Details>
                            <span>
                                <b>Product:</b> {product.nameItem}
                            </span>
                            <TopButton type="filled" onClick={() => test.deleteItem(product.idItem)}>Borrar</TopButton>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                            <ProductAmount>{product.qtyItem} item(s)</ProductAmount>
                            </ProductAmountContainer>
                            <ProductPrice> {product.costItem} each</ProductPrice>
                        </PriceDetail>
                        </Product>
                        )
                        : <TitleCart></TitleCart>
                    }

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
            




            </ContentCart>
        </WrapperCart>
    );
    
}

export default Cart;
