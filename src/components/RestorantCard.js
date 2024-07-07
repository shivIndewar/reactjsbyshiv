import { CDN_URL } from "../utils/constants";


const RestorantCard =(props)=>{
    const {restData} = props;
    return(
    <div className="rest-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-img" src={CDN_URL + restData.cloudinaryImageId}/>
        <h3>{restData.name}</h3>
        <ul className="food-details">
            <li>Ratings - {restData.avgRating} </li>
            <li> {restData.sla.slaString}</li>
            <li>{restData.areaName}</li>
        </ul>
    </div>
    );
};

export default RestorantCard;