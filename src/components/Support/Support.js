import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';


class Support extends Component{
    
    handleChange = (event) => {
              
        this.props.dispatch({type: 'SET_FEEDBACK', payload:event.target.value, name:event.target.name}) 
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
                <input onChange={this.handleChange} type="number" name="support" />
                <button onClick={this.handleClick}>NEXT</button>
                
            </div>
        )
    }
 
}



export default connect()(Support);