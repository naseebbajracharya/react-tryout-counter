import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    };

    render() { 
        React.createElement('h1');
        return (
            <React.Fragment>
            <span className="badge badge-warning m-2">{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;