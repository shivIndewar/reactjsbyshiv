import RestorantCard, {withPromtedLabel} from "./RestorantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
//  let listOfRestaurants = restList;
const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfTempRestaurants, setlistOfTempRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {loggedInUser, setUserInfo} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5678553&lng=73.9143637&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optinal chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setlistOfTempRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // //conditional rendering
  // if(listOfRestaurants.length == 0)
  // {
  //     return <Shimmer />;
  // }

  const onlineStatus = useOnlineStaus();
  const RestoCardWithPromoted = withPromtedLabel(RestorantCard);

  if (onlineStatus === false) {
    return (
      <h1>
        {" "}
        Looks like you are offline, please check your internet connection!!
      </h1>
    );
  }

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="bodyContainer p-4 m-4">
      <div className="filter flex mb-2">
        <div className="search flex items-center">
          <input
            type="text"
            className="search-box border border-solid border-black px-4 py-1 mx-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterdRests = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setlistOfTempRestaurants(filterdRests);
            }}
            className="search-btn bg-pink-300 px-3 py-1 rounded-lg"
          >
            Search
          </button>
        </div>
        <div className="mx-1">
          <button
            className="filter-btn  bg-pink-300 px-3 py-1 rounded-lg"
            onClick={() => {
              const filteredRests = listOfTempRestaurants.filter(
                (res) => res.info.avgRatingString > 4.4
              );
              setlistOfTempRestaurants(filteredRests);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="mx-1">
          <input value={loggedInUser} 
            onChange={(e)=> setUserInfo(e.target.value)}
            className="border border-black  px-3 py-1 rounded-lg" type="text"/>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {listOfTempRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {
              restaurant.info.id ? (<RestoCardWithPromoted restData={restaurant} />) : (<RestorantCard restData={restaurant} />)
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
