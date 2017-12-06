import React, { Component } from 'react';
import { routeNode } from 'react-router5'
import StripeCheckout from 'react-stripe-checkout';

class Users extends Component {
    state = {order: []}

    componentDidMount() {
        fetch('/charge/create')
            .then(res => res.json())
            .then(order => this.setState({ order }));
    }

    onPay(token) {
        fetch('/charge/pay', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                token,
                orderId: this.state.order.id
            })
        }).then(() => console.log("SUCCESS"));
    }

    render() {
        return (
            <div className="App">
                <h1>Users</h1>
            {this.state.order.id}
                <StripeCheckout
                    amount={this.state.order.amount}
                    token={this.onPay.bind(this)}
                    stripeKey="pk_test_P3IUMnzaN5zDqWzNT0KV20xw"
                />
            </div>
        );
    }
}

export default routeNode('users')(Users);
