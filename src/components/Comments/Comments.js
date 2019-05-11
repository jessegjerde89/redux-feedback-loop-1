import React, { Component } from 'react';
import {connect} from 'react-redux';

class Comments extends Component{
    render(){
        return (
            <p>comments goes here!</p>
        )
    }
}

export default connect()(Comments);