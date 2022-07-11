import cart from "../img/cart.png";
import './CartWidget.css';


const CartWidget = () => {
return (
   <div className='divCont'>
    
    <img src={cart} class='cart' alt='carrito' />
    <p className='p_cart'>Ver Carrito</p>
    </div>
);

}

export default CartWidget;