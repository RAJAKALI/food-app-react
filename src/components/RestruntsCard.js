import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
const RestruntCard = ({
    name,
    avgRatingString,
    cuisines,
    cloudinaryImageId,
    showLabel
}) => {
  return (
    <div data-testid="resturntcard" className=" relative overflow-hidden h-auto border border-gray-300 shadow-md rounded-md transition-transform duration-300 hover:scale-95">
    {showLabel && (
        <label className="absolute top-1 left-0 bg-black text-white p-2 z-10 rounded-tr-md rounded-br-md">Veg</label>
      )}
    <img className="w-full h-52 object-cover" src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
    <div className="overflow-hidden ml-1">
      <h4 className="overflow-hidden whitespace-nowrap text-ellipsis font-medium">
        {name}
      </h4>
      <h5 className="overflow-hidden whitespace-nowrap text-ellipsis">
        {avgRatingString}
      </h5>
      <h5 className="overflow-hidden whitespace-nowrap text-ellipsis">
        {cuisines.join(', ')}
      </h5>
    </div>
  </div>

  );
};

export default RestruntCard;


export const withPromotedRestrunt=(RestruntCard)=>{
  return (props)=>{
     return(
      <>
      <RestruntCard {...props} showLabel={true}/>
      </>
     );
  };
}