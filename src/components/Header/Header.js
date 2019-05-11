import React, { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component{
    render(){
        return (
            <p>Header goes here!</p>
        )
    }
}

export default connect()(Header);