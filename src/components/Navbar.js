import logo from "../../assets/Google.png";

const Navbar = () => {
    return (
      <div className="nav-main">
      <div className="navbar">
        <img className="nav-header" src={logo} />
        <div className="right-nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Restrunts</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    );
  };

  export default Navbar;