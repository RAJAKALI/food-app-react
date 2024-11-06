import { useContext, useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [loginToggle, setLoginToggle] = useState("Login");
  const {LogedInUser}=useContext(UserContext);
  const data=useSelector((store)=>store.cart.items);
  return (
      <div className="fixed w-full top-0  bg-slate-50 flex justify-between p-2 border border-b-gray-300 shadow-md z-50">
        <Link to="/"><img className=" w-12 ml-2" src={LOGO} /></Link>
        <div className="mr-2">
          <ul className="flex pt-2">
            <li className=" mx-3 hover:text-violet-600">
              <Link to="/">Home</Link>
            </li>
            <li className=" mx-3  hover:text-violet-600">
              <Link to="/about">About</Link>
            </li>
            <li className=" mx-3  hover:text-violet-600">
              <Link to="/contacts">Contacts</Link>
            </li>
            <li className=" mx-3  hover:text-violet-600">
              <Link to="/cart">Cart-({data.length})</Link>
            </li>
            <li className=" mx-3  hover:text-violet-600">
              <Link href="#">
                <button
                  onClick={() => {
                    setLoginToggle(
                      loginToggle === "Login" ?`Logout ${LogedInUser}` : "Login"
                    );
                  }}
                >
                  {loginToggle}
                </button></Link>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Navbar;
