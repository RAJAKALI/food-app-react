import { Link } from "react-router-dom";
import RestruntCard from "./RestruntsCard";
import { useEffect, useState } from "react";
const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const [restruntsList, setRestruntsList] = useState([]);
  const [filteredData,setFilteredData]=useState([]);
  useEffect(()=>{
    fetchdata();
  },[]);
  
  const fetchdata=async()=>{
    const data=await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.8167303&lng=77.6974369&carousel=true&third_party_vendor=1");
    const json=await data.json();
    setRestruntsList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  return (
    <>
      {/* search */}
      <div className="Search-filter">
        <div className="search">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const searchdata = restruntsList.filter((restrunt) =>
                restrunt.info.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
              );
              setFilteredData(searchdata);
            }}
            className="searchbtn"
          >
            Search
          </button>
        </div>

        <div className="filter-container">
          <button className="filter-btn" onClick={()=>{
            const filterdinfo=restruntsList.filter((restfill)=>restfill.info.avgRatingString>4)
            setFilteredData(filterdinfo);
          }} >TopRatings</button>
          <button className="filter-btn" onClick={()=>{
            const filterdinfo=restruntsList.filter((restfill)=>restfill.info.avgRatingString>0)
            setFilteredData(filterdinfo);
          }} >Clear</button>
        </div>
      </div>
      <div className="body-cards">
        {filteredData.map((retrunt) => {
          return <Link className="link-cards" key={retrunt.info.id} to={"/restrunts/"+retrunt.info.id}><RestruntCard {...retrunt.info} /></Link>;
        })}
      </div>
    </>
  );
};
export default Body;
