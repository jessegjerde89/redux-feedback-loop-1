import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';



class Feeling extends Component{

    handleChange = (event) => {
        this.props.dispatch({type: 'SET_FEELING', payload: event.target.value})
    }
 
    handleClick = () => {
        this.props.history.push('/understanding');
    }
 
    render() {
        return (
            <div>
                <Header />
                <h2>How are you feeling today?</h2>
                <label>Feeling? (1 - 5)</label>
                <input onChange={this.handleChange} type="number"/>
                <button onClick={this.handleClick}>NEXT</button>
                <ReviewFeedback />
            </div>
        )
    }
 
}

export default connect()(Feeling);