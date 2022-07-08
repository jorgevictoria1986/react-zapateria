import cart from "../img/cart.png";


const CartWidget = () => {
return (
   <div className="divCont">
    <img src={cart} class="cart" alt="carrito" />
    <p className="p">Ver Carrito</p>
    </div>
);

}

export default CartWidget;