import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        tags: ["Tag 1", "Tag 2", "Tag 3"]
    };

    handleIncrement = product => {
        //console.log("Increment Clicked", this);
        this.setState({count: this.state.count +1 });
    };

    handleDecrement = product => {
        //console.log("Decrement Clicked", this);
        this.setState({count: this.state.count -1 });
    };

    render() { 

        React.createElement('h1');
        return (
            <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick ={this.handleIncrement} className="btn m-2 btn-secondary btn-sm">Increment</button>
            <button onClick ={this.handleDecrement} className="btn m-2 btn-warning btn-sm">Decrement</button>
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "success";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;