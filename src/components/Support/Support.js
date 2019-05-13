import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';


class Support extends Component{
    // Called when the input field changes
    handleChange = (event) => {
         //dispatching an action     
        this.props.dispatch({type: 'SET_FEEDBACK', payload:event.target.value, name:event.target.name}) 
    }
    
     // Called when the submit button is pressed
    handleClick = () => {
        //navigate to the comments page
        this.props.history.push('/comments');
    }
 
    render() {
        return (
            <div>
                <Header />
                <h2>How well are you being supported?</h2>
                {/* display input field for support */}
                <label>support? (1 - 5)</label>
                <input onChange={this.handleChange} type="number" name="support" />
                <button onClick={this.handleClick}>NEXT</button>
                
            </div>
        )
    }
 
}



export default connect()(Support);