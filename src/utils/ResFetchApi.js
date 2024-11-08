import { RES_INFO_API } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestruntInfo=(ResId)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchResAPi();
    },[])
    
    const fetchResAPi=async()=>{
          const data=await fetch(RES_INFO_API+ResId);
          const json=await data.json();
          setResInfo(json.data);
    }

    return resInfo;
}
export default useRestruntInfo;