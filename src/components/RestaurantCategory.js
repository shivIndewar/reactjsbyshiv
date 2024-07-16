import { useContext, useState } from "react";
import ItemList from "./ItemList";
import UserContext from "../utils/UserContext";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

  // const[showItems, setItems] = useState(false);

  handleClick=()=>{
    setShowIndex();
  }
 const userData = useContext(UserContext);
 
  return (
    <div>
      <div className="mx-auto my-4 w-6/12 bg-gray-50 p-4 shadow-lg">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
          Order will be placed for : {userData.loggedInUser}
          <span>⬇️</span>
        </div>
         { showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
