import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
            <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick ={() => this.props.onIncrement(this.props.counter)} 
            className="btn m-2 btn-primary btn-sm">Increment</button>

            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn m-2 btn-danger btn-sm m-2">Delete</button>
            <br/>
            
            </div>
            
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "success";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;