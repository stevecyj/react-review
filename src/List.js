import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    render() {
        return (
            <ol>
                <Item text='learn javascript' />
                <Item text='learn react' />
                <Item text='make money' />
                <Item text='buy house' />
            </ol>
        );
    }
}

export default List;
