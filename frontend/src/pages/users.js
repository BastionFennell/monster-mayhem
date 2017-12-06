import React, { Component } from 'react';
import { routeNode } from 'react-router5'

class Users extends Component {
    state = {users: []}

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    render() {
        return (
            <div className="App">
            <h1>Users</h1>
            {this.state.users.map(user =>
                <div key={user.id}>{user.username}</div>
            )}
            </div>
        );
    }
}

export default routeNode('users')(Users);
