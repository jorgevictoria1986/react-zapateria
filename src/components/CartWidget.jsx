import {Badge} from "@material-ui/core";
import {ShoppingCartOutlined} from "@material-ui/icons";

const CartWidget = () => {
return (
    <Budge badgeContent={4} >
        <ShoppingCartOutlined />
    </Budge>
);

}

export default CartWidget;