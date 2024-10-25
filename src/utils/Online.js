import { useEffect,useState } from "react";
const useOnline=()=>{
     const [isOnline,setIsOnline]=useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setIsOnline(false);
           });
        window.addEventListener("Online",()=>{
               setIsOnline(true);
              });
    },[]);
    return isOnline;
}
export default useOnline;