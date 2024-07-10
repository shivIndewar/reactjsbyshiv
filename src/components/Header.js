import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
  const [reactBtn, setreactBtn] = useState("Loign");

  const onlineStatus = useOnlineStaus();
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status : {onlineStatus ? "✅" : "🔴"} </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about"> About Us </Link>
          </li>
          <li>
            <Link to="/contactus"> Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              reactBtn == "Login"
                ? setreactBtn("Logout")
                : setreactBtn("Login");
            }}
          >
            {reactBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
