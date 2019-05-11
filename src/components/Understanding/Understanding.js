import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';



class Understanding extends Component{
    handleChange = (event) => {
        this.props.dispatch({type: 'SET_UNDERSTANDING', payload: event.target.value})
    }
 
    handleClick = () => {
        this.props.history.push('/support');
    }
 
    render() {
        return (
            <div>
                <Header />
                <h2>How well are you understanding the content?</h2>
                <label>understanding? (1 - 5)</label>
                <input onChange={this.handleChange} type="number"/>
                <button onClick={this.handleClick}>NEXT</button>
                <ReviewFeedback />
            </div>
        )
    }
 
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}


export default connect(mapStateToProps)(Understanding);