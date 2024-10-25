import { useParams } from "react-router-dom";
import useRestruntInfo from "../utils/ResFetchApi";

const ResturntInfo=()=>{
    const {ResId}=useParams();
    console.log(ResId);
    const resInfo=useRestruntInfo(ResId);
    if(resInfo===null){ return <h1>Loading...</h1>}
    const {name,city,cuisines,sla}=resInfo?.cards[2]?.card?.card?.info;
    return(
       <div className="restruntinfo-container">
            <h1>{name}</h1>
            <h2>{city}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{sla.deliveryTime} min</h4>
       </div>
    );
}
export default ResturntInfo;