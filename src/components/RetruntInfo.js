import { useParams } from "react-router-dom";
import useRestruntInfo from "../utils/ResFetchApi";
import ItemCards from "./ItemCards";

const ResturntInfo=()=>{
    const {ResId}=useParams();
    const resInfo=useRestruntInfo(ResId);
    if(resInfo===null){ return <h1>Loading...</h1>}
    const {name,city,cuisines,sla}=resInfo?.cards[2]?.card?.card?.info;
    const CardItems=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(CardItems);
    return(
        <>
       <div className="mt-20 text-center">
            <h1 className="font-bold">{name}</h1>
            <h2>{city}, {sla.deliveryTime} min</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4></h4>
       </div>
       <div className="mt-5">
        {
            CardItems.map(c=>
                <ItemCards key={c.card.card.title} {...c?.card?.card}/>
            )
        }
       </div>
       </>
    );
}
export default ResturntInfo;