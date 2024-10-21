import Restrunts from "./RestruntsCard";
import { restruntsobj } from "../contants";
import { useState } from "react";

function filterList(searchValue,restruntsList){
    const filterdvalue= restruntsList.filter((restrunt)=>restrunt.info.name.includes(searchValue));
    return filterdvalue;
}

const Body = () => {
  const [searchValue,setSearchValue]=useState("");
  const [restruntsList,setRestruntsList]=useState(restruntsobj);
  return (
    <>
    <div className="search">
    <input type="text" value={searchValue} onChange={(e)=>{
        setSearchValue(e.target.value)
    }}></input>
    <button onClick={()=>{
        const searchdata= filterList(searchValue,restruntsList);
        setRestruntsList(searchdata);
    }} className="searchbtn">Search</button>
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
