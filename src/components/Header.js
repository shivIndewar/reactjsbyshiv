import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [reactBtn, setreactBtn] = useState("Loign");
  const defaultUser = useContext(UserContext);

  const onlineStatus = useOnlineStaus();

  const cartItems = useSelector((store)=> store.cart.items);

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
          <li className="px-4 text-lg font-bold">
          <Link to="/cart">
              Cart ({cartItems.length} items)
            </Link>
            </li>
          <button className="text-lg font-bold"
            onClick={() => {
              reactBtn == "Login"
                ? setreactBtn("Logout")
                : setreactBtn("Login");
            }}
          >
            {reactBtn}
          </button>

          <li className="px-4 text-lg font-bold">User : {defaultUser.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
