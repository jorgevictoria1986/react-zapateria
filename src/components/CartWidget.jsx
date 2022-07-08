import cart from "../img/cart.jpg";
import {ShoppingCartOutlined} from "@material-ui/icons";

const CartWidget = () => {
return (
   <div className="divCont">
    <img src={cart} class="cart" alt="carrito" />
    <p className="p">Ver Carrito</p>
    </div>
);

}

export default CartWidget;