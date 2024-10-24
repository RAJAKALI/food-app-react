import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loginToggle, setLoginToggle] = useState("Login");
  return (
    <div className="nav-main">
      <div className="navbar">
        <img className="nav-header" src={LOGO} />
        <div className="right-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="#">Cart</Link>
            </li>
            <li>
              <Link href="#">
                <button
                  onClick={() => {
                    setLoginToggle(
                      loginToggle === "Login" ? "Logout" : "Login"
                    );
                  }}
                >
                  {loginToggle}
                </button></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
