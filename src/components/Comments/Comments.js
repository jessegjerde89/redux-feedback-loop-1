import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header'


class Comments extends Component{
    // Called when the input field changes
    handleChange = (event) => {
        //dispatching an action
        this.props.dispatch({type: 'SET_FEEDBACK', payload: event.target.value, name:event.target.name})
    }
    // Called when the submit button is pressed
    handleClick = () => {
        //navigates to the taco page (which just displays the review feedback component)
        this.props.history.push('/taco');
    }
 
    render() {
        return (
            <div>
                <Header />
                <h2>Any comments you want to leave?</h2>
                <label>comments:</label>
                <input onChange={this.handleChange} type="text" name="comments"/>
                <button onClick={this.handleClick}>NEXT</button>
                
            </div>
        )
    }
 
}


export default connect()(Comments);