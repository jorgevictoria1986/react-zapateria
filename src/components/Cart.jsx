import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';

import styled from "styled-components";

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.span`
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;






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