import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo:{
            name:"dummy",
            avatar_url:"default",
        },
    };
  }

  async componentDidMount(){
    console.log("componentDidMount get called");
    const data= await fetch("https://api.github.com/users/shivindewar");
    const json = await data.json();
    this.setState({
        userInfo : json
    });
  }

  render() {
    return (
        <div className="user-card top-margin">
            <div className="user-card-inner">
                <div className="card-flex">
                    <img src={this.state.userInfo.avatar_url} className="user-avtar" />
                    <h1>{this.state.userInfo.name}</h1>
                </div>
                <div className="font-bold">
                  Logged In user :  
                  <UserContext.Consumer>
                     {(data)=> data.loggedInUser }
                  </UserContext.Consumer>
                </div>
            </div>
      </div>
    );
  }
}

export default UserClass;
