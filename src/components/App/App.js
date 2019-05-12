import React, { Component } from 'react';
import axios from 'axios';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
         
          <Route exact path='/' component={Feeling}/>

          <Route exact path='/understanding' 
            component={Understanding}
          />
          <Route exact path='/support' component = {Support}  />
          <Route exact path='/comments' component={Comments} />
          <br/>
        </div>
      </Router>
    );
  }
}

export default connect ()(App);
