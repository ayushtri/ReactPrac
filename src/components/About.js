import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContexts";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About us</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is the about us page</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
