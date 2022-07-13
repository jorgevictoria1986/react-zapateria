import { useState } from "react"


function ItemCount({stock, initial, onAdd}){
        
        

        const [count,setCoutn] = useState(initial);

        const suma = () => {
            if (count < stock){
                setCoutn(count +1)
            } else{
                console.log("No hay mas stock")
            }
        }

        const resta = () => {
            if(count>initial){
                setCoutn(count -1)
            } else{
                console.log("Lo minimo a comprar es 1 unidad")
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