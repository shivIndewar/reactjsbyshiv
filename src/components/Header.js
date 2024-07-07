import { LOGO_URL } from "../utils/constants";

const HeaderComponent =()=>(
    <div className="header">
        <div className="logoContainer">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default HeaderComponent;