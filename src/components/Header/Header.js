import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Header.css';

class Header extends Component{
    render(){
        return (
            <div>
            <header className="App-header">
             <h1>Feedback</h1>
             <h2>Don't forget it!</h2>  
             
          </header>
            </div>
            
        )
    }
}

export default connect()(Header);