import React, { Component } from 'react';

class Message extends Component {
    state = {
        title: 'Message',
        text: 'hello',
    };
    sayHi = () => {
        this.setState({
            text: 'Hi!',
        });
    };
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.text}</h3>
                <button onClick={this.sayHi}>Say Hi</button>
            </div>
        );
    }
}

export default Message;
