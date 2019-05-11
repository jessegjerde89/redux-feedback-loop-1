import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component{
    render(){
        return (
            <p>feeling goes here!</p>
        )
    }
}

export default connect()(Feeling);