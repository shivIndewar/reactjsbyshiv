import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

Cart = () => {

    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    handleRemove =()=>{
        dispatch(clearCart());
    }

    return(
        <div  className="text-center m-4 p-4">
           <h1 className="text-lg font-bold">Cart</h1>
           <div className="w-6/12 m-auto">
                <button onClick={handleRemove} className="text-white bg-black rounded-lg px-2 my-2">Clear cart</button>
                {cartItems.length === 0 && <h1>Your cart is empty please add items to the cart!!</h1>}
                <ItemList items={cartItems}/>
            </div>  
        </div>
        
    ) 
};

export default Cart;