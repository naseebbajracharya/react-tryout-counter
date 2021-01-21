import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value: this.props.value
    };

    handleIncrement = () => {
        this.setState({value: this.state.value + 1 });
    };

    render() { 
        return (
            <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick ={this.handleIncrement} 
            className="btn m-2 btn-secondary btn-sm">Increment</button>

            <button onClick={() => this.props.onDelete(this.props.id)} className="btn m-2 btn-danger btn-sm m-2">Delete</button>
            <br/>
            
            </div>
            
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "success";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;