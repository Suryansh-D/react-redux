import { useSelector , useDispatch } from "react-redux";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

function AddToCart({ product }) {
    // inc
    // dec
    const { cart ,  increaseQuantity, decreaseQuantity } = useContext(CartContext);

    function increase() {
        //dispatch ({type: 'ADD_ITEM', item: product})
        dispatchEvent({type: "ADD_ITEM", item: product})
    }
    function decrease() {
        //dispatch ({type: 'REMOVE_ITEM', item: product})
        dispatchEvent({type: 'REMOVE_ITEM', item: product})
    }
    let state = useSelector(state => {
        return state.item;
    });

    let quantity = state.items[product.id] ? state.items[product.id].quantity : 0;
    if (quantity === 0) {
        return (
            <div>
                <button onClick={increase}>AddToCart</button>
            </div>
     )  
    } else {
        return ( 
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>

            </div>
        )
    }

}

export default AddToCart;