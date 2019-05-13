import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';




class Feeling extends Component{
    handleChange = (event) => {
        this.props.dispatch({type: 'SET_FEEDBACK', payload: event.target.value, name:event.target.name})
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
                <input onChange={this.handleChange} type="number" name="feeling"/>
                <button onClick={this.handleClick}>NEXT</button>
                
            </div>
        )
    }
 
}



export default connect()(Feeling);