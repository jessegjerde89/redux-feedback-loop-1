import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Support extends Component{

    handleChange = (event) => {
        this.props.dispatch({type: 'SET_SUPPORT', payload: event.target.value})
    }
 
    handleClick = () => {
        this.props.history.push('/comments');
    }
 
    render() {
        return (
            <div>
                <Header />
                <h2>How well are you being supported?</h2>
                <label>support? (1 - 5)</label>
                <input onChange={this.handleChange} type="number"/>
                <button onClick={this.handleClick}>NEXT</button>
                <ReviewFeedback />
            </div>
        )
    }
 
}



export default connect()(Support);