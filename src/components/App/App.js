import React, { Component } from 'react';
// Shorthand import, {} in import is called destructuring
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
// Components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import Thanks from '../Thanks/Thanks'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path='/' component={Feeling} />
          <Route exact path='/understanding' component={Understanding} />
          <Route exact path='/support' component={Support} />
          <Route exact path='/comments' component={Comments} />
          <Route exact path='/thank' component={Thanks} />
          <br />
          <ReviewFeedback />
        </div>

      </Router>


    );
  }
}

export default connect()(App);
