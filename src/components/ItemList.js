import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList =({items})=>{
    
    const dispath = useDispatch();
    
    addHandler =(item)=>{
        dispath(addItem(item));
    }; 
    return (
        <div>
            <ul>
                {items.map(item=>(
                <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-500 border-b-2 flex justify-between">
                    
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span> -₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>
                        </div>
                    <p className="text-xs">{item?.card?.info?.description}</p>      
                    </div>
                    <div className="w-2/12 py-4">
                        <div className="absolute">
                            <button className="p-2 bg-black text-white shadow-lg mx-8 rounded-lg" onClick={()=>addHandler(item)}>Add +</button>
                        </div>
                        <img className="rounded-lg" src={CDN_URL + item?.card?.info?.imageId}></img>
                    </div>
                </div>
            ))}
            </ul>
        </div>
    )
}

export default ItemList;