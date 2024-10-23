import Restrunts from "./RestruntsCard";
import { restruntsobj } from "../utils/constants";
import { useState } from "react";

const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const [restruntsList, setRestruntsList] = useState(restruntsobj);
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
                restrunt.info.name.includes(searchValue)
              );
              setRestruntsList(searchdata);
            }}
            className="searchbtn"
          >
            Search
          </button>
        </div>

        <div className="filter-container">
          <button className="filter-btn" onClick={()=>{
            const filterddata=restruntsList.filter((restfill)=>restfill.info.avgRatingString>4)
            setRestruntsList(filterddata);
          }} >TopRatings</button>
        </div>
      </div>
      <div className="body-cards">
        {restruntsList.map((retrunt) => {
          return <Restrunts {...retrunt.info} key={retrunt.info.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
