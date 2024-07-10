import UserFunctional from "./UserFunctional";
import UserClass from "./UserClass";
const About =()=>{
    return(
    <div className="aboutPage">
        <h1>About</h1>
        <h2>Our Main Technicalaties -  </h2>
        <div className="devloper">
            {/* <UserFunctional name="Shivprasad Indewar" location="Wagholi,Pune" /> */}
            <UserClass name="John" location="USA"/>
        </div>
    </div>
    )
};

export default About;