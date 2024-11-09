import { Link } from "react-router-dom";
import RestruntCard, { withPromotedRestrunt } from "./RestruntsCard";
import React,{ useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnline from "../utils/Online";
const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const [restruntsList, setRestruntsList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const UpdatedRestrunCard = withPromotedRestrunt(RestruntCard);
  const isOnline=useOnline();
  const [showCross,setShowcross]=useState(true);
  useEffect(() => {
    fetchdata();
  }, []);
  
  const fetchdata = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8167303&lng=77.6974369&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestruntsList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return isOnline===false?showCross&&<div  className=" bg-black text-white mt-72 mx-5 flex justify-between items-center"><h1 className="text-center  p-2">Offline</h1><span className="mr-3"><button onClick={()=>{setShowcross(false)}} className=" font-bold">&#10005;</button></span></div>: restruntsList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* search */}
      <div className="flex  justify-between  mt-[70px] mb-2">
        <div className="ml-1">
          <input
            type="text"
            data-testid="searchInput"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              e.target.value===""&&setFilteredData(restruntsList);
            }}
            placeholder=""
            className=" border border-violet-500 focus:outline-none rounded-sm"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
              const searchdata = restruntsList.filter((restrunt) =>
                restrunt.info.name
                  .toLowerCase()
                  .includes(searchValue.toLocaleLowerCase())
              );
              setFilteredData(searchdata);
            }
            }}
          ></input>
          <button
            onClick={() => {
              const searchdata = restruntsList.filter((restrunt) =>
                restrunt.info.name
                  .toLowerCase()
                  .includes(searchValue.toLocaleLowerCase())
              );
              setFilteredData(searchdata);
            }}
            className=" bg-violet-500 text-white ml-1 rounded-sm px-1"
          >
            Search
          </button>
        </div>

        <div className="">
          <button
            data-testid="toprated"
            onClick={() => {
              const filterdinfo = restruntsList.filter(
                (restfill) => restfill.info.avgRatingString > 4
              );
              setFilteredData(filterdinfo);
            }}
            className=" bg-violet-500 text-white  rounded-sm px-2 mr-1"
          >
            TopRatings
          </button>
          <button
            onClick={() => {
              const filterdinfo = restruntsList.filter(
                (restfill) => restfill.info.avgRatingString > 0
              );
              setFilteredData(filterdinfo);
            }}
            className=" bg-violet-500 text-white  rounded-sm px-2 mr-1"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredData.map((retrunt) => {
          return (
            <Link
              key={retrunt.info.id}
              to={"/restrunts/" + retrunt.info.id}
              className="w-52 m-2"
            >
              {retrunt.info.veg ? (
                <UpdatedRestrunCard {...retrunt.info} />
              ) : (
                <RestruntCard {...retrunt.info} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
