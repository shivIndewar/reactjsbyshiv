
import RestorantCard from "./RestorantCard";
import restList from "../utils/data";
import { useEffect, useState } from "react";

//  let listOfRestaurants = restList;
const BodyComponent = ()=>{
    const[listOfRestaurants, setListOfRestaurants] = useState(restList);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("http://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
    }; 

    return (
    <div className="bodyContainer">
        <div className="filter"> 
            <button className="filter-btn" onClick={()=>{
                const filteredRests = listOfRestaurants.filter((res)=> res.avgRatingString > 4.5);
                setListOfRestaurants(filteredRests);
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {
                listOfRestaurants.map(restaurant =><RestorantCard key={restaurant.id} restData={restaurant} />)
            }
        </div>
    </div>
)};

export default BodyComponent;