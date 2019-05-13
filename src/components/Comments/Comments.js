import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header'


class Comments extends Component{
    handleChange = (event) => {
        this.props.dispatch({type: 'SET_FEEDBACK', payload: event.target.value, name:event.target.name})
    }
 
    handleClick = () => {
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