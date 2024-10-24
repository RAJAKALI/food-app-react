import { useEffect, useState } from "react";
import { RES_INFO_API } from "../utils/constants";
import { json, useParams } from "react-router-dom";
const ResturntInfo=()=>{
    const {ResId}=useParams();
    console.log(ResId);
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchResAPi();
    },[])
    
    const fetchResAPi=async()=>{
          const data=await fetch(RES_INFO_API+ResId);
          const json=await data.json();
          console.log(json.data);
          setResInfo(json.data);
    }
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