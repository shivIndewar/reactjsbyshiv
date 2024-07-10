import { CDN_URL } from "../utils/constants";


const RestorantCard =(props)=>{
    const {restData} = props;
    return(
    <div className="rest-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-img" src={CDN_URL + restData.info.cloudinaryImageId}/>
        <h3>{restData.info.name}</h3>
        <ul className="food-details">
            <li>Ratings - {restData.info.avgRating} </li>
            <li> {restData.info.sla.slaString}</li>
            <li>{restData.info.areaName}</li>
        </ul>
    </div>
    );
};

export default RestorantCard;