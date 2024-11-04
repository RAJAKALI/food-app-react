// import { useState } from "react";
import ListItemCards from "./ListItemCards";

const ItemCards=({
    title,
    itemCards,
    showListItems,
    setShowListItems
})=>{
// const [showListItems,setShowListItems]=useState(false);
const handleList=()=>{
setShowListItems();
}
    return(
        <div className="w-8/12 m-auto my-4 p-4 bg-gray-50 mt-3 shadow-lg  rounded-md">
        <div className=" flex justify-between cursor-pointer" onClick={handleList}>
            <h3 className="font-medium">{title} ({itemCards.length})</h3>
            <span>▼</span>
        </div>
        {showListItems&&<div>
            {
                itemCards.map(item=>
                    <ListItemCards key={item?.card?.info?.id}{...item?.card?.info}/>
                )
            }
        </div>
}
        </div>
    );
}
export default ItemCards;