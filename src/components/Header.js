import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
  const [reactBtn, setreactBtn] = useState("Loign");

  const onlineStatus = useOnlineStaus();
  return (
    <div className="flex justify-between bg-pink-400 shadow-lg p-4 m-4">
      <div className="px-4">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg font-bold">Online status : {onlineStatus ? "✅" : "🔴"} </li>
          <li className="px-4 text-lg font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-lg font-bold">
            <Link to="/about"> About Us </Link>
          </li>
          <li className="px-4 text-lg font-bold">
            <Link to="/contactus"> Contact Us</Link>
          </li>
          <li className="px-4 text-lg font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-lg font-bold">Cart</li>
          <button className="text-lg font-bold"
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
