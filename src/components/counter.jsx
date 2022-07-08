import React, { Component } from 'react';

class Counter extends Component {
    state = {
     count : 1,
     
    }
     
    

    render() { 
        let colors = "badge m-2 badge-";
     colors += this.state.count === 0 ? "warning" : "primary"; 
        return <React.Fragment> 
        <span  className={colors}>{this.formatCount()}</span>
        <button className="btn btn-secondary">Increment</button>
         </React.Fragment>;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "zero" : count 
    }

    
}
 
export default Counter;