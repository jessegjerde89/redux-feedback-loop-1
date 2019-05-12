import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header'
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Comments extends Component{
    handleChange = (event) => {
        this.props.dispatch({type: 'SET_COMMENTS', payload: event.target.value})
    }
 
    handleClick = () => {
        this.props.history.push('/');
    }
 
    render() {
        return (
            <div>
                <Header />
                <h2>Any comments you want to leave?</h2>
                <label>understanding? (1 - 5)</label>
                <input onChange={this.handleChange} type="text"/>
                <button onClick={this.handleClick}>NEXT</button>
                <ReviewFeedback />
            </div>
        )
    }
 
}


export default connect()(Comments);