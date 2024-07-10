
import RestorantCard from "./RestorantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";
//  let listOfRestaurants = restList;
const BodyComponent = ()=>{
    const[listOfRestaurants, setListOfRestaurants] = useState([]);
    const[listOfTempRestaurants, setlistOfTempRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5678553&lng=73.9143637&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards);
        //optinal chaining 
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistOfTempRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }; 

    // //conditional rendering
    // if(listOfRestaurants.length == 0)
    // {
    //     return <Shimmer />;
    // }

    const onlineStatus = useOnlineStaus(); 

    if(onlineStatus === false){
        return <h1> Looks like you are offline, please check your internet connection!!</h1>;
    } 

    return listOfRestaurants.length == 0 ? <Shimmer /> : (
    <div className="bodyContainer">
        <div className="filter"> 
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }} />
                <button onClick={()=>{
                    const filterdRests = listOfRestaurants.filter(
                        (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setlistOfTempRestaurants(filterdRests);
                }} className="search-btn">Search</button>
            </div>
            <button className="filter-btn" onClick={()=>{
                const filteredRests = listOfTempRestaurants.filter((res)=> res.info.avgRatingString > 4.4);
                setlistOfTempRestaurants(filteredRests);
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {
                listOfTempRestaurants.map(restaurant => <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestorantCard  restData={restaurant} /> </Link> )
            }
        </div>  
    </div>
)};

export default BodyComponent;