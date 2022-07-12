import { useState } from "react"


function ItemCount({stock, initial, onAdd}){
        
        

        const [count,setCoutn] = useState(initial);

        const suma = () => {
            if (count < stock){
                setCoutn(count +1)
            }
        }

        const resta = () => {
            if(count>0){
                setCoutn(count -1)
            }
        }

        return(
            <div className="count">
                <button className="count_button" onClick={resta}>-</button>
                <span className="count_content">{count}</span>
                <button className="count_button" onClick={suma}>+</button>
                <div>
                <button onClick={ ()=> onAdd(count)}>Agregar al Carrito</button>
                </div>
            </div>
        );


}

export default ItemCount;