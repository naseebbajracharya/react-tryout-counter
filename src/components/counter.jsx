import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
            <div className="row">
            <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col">
                {/* Increase Button */}
            <button 
            onClick ={() => this.props.onIncrement(this.props.counter)} 
            className="btn m-2 btn-info btn-sm">+</button>

            {/* Decrease Button */}
            <button 
            onClick ={() => this.props.onDecrement(this.props.counter)} 
            className="btn m-2 btn-info btn-sm" disabled={this.props.counter.value === 0 ? 'disabled' : ''}>-</button>

            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn m-2 btn-danger btn-sm">Delete</button>
            <br/>
            </div>

            

            
            
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