import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: 'Dummy',
                location: 'Default',
                login: 'dummy',
                avatar_url: 'https://picsum.photos/200',
            },
        };
    }

    async componentDidMount() {
        //console.log('UserClass Component mounted');
        // API call 
        const data = await fetch('https://api.github.com/users/ayushtri');
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }

    render() {
        const { name, location, login, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="User Avatar" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact : @{login}</h4>
            </div>
        );
    }
}

export default UserClass;