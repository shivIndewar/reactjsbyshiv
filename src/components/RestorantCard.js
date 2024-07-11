import { CDN_URL } from "../utils/constants";


const RestorantCard =(props)=>{
    const {restData} = props;
    return(
    <div className="rest-card p-4 m-4 w-[250px] rounded-lg bg-pink-100 shadow-lg hover:bg-pink-300">
        <img className="res-img rounded-lg" src={CDN_URL + restData.info.cloudinaryImageId}/>
        <h3 className="font-bold py-2 text-xlg">{restData.info.name}</h3>
        <ul className="food-details">
            <li>Ratings - {restData.info.avgRating} </li>
            <li> {restData.info.sla.slaString}</li>
            <li>{restData.info.areaName}</li>
        </ul>
    </div>
    );
};

export default RestorantCard;