import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        login: "dummy",
        avatar_url: "https://picsum.photos/200",
      },
    };
  }

  async componentDidMount() {
    //console.log('UserClass Component mounted');
    // API call
    const data = await fetch("https://api.github.com/users/ayushtri");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;

    return (
      <div className="flex">
        <div className="flex border border-black items-center p-4 m-4">
          <img src={avatar_url} alt="User Avatar" className="w-28 h-28" />
          <div>
            <h2 className="m-4">Name: {name}</h2>
            <h3 className="m-4">Location: {location}</h3>
            <h4 className="m-4">Contact : @{login}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
