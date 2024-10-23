import Restrunts from "./RestruntsCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const [restruntsList, setRestruntsList] = useState([]);
  const [filteredData,setFilteredData]=useState([]);

  useEffect(()=>{
    fetchdata();
  },[]);
  
  const fetchdata=async()=>{
    const data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=16.751228&lng=81.7075787");
    const json=await data.json();
    setRestruntsList(json?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    setFilteredData(json?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
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
          return <Restrunts {...retrunt.info} key={retrunt.info.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
