import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header className="App-header">
             <h1>Feedback</h1>
             <h2>Don't forget it!</h2>  
          </Header>

          <Route exact path='/feeling' 
            component={Feeling}
          />
          <Route exact path='/understanding' 
            component={Understanding}
          />
          <Route exact path='/support' component = {Support}  />
          <Route exact path='/comments'
            component={Comments}
          />
          <br/>
        </div>
      </Router>
    );
  }
}

export default connect ()(App);
