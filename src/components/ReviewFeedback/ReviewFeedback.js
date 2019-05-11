import React, { Component } from 'react';
import {connect} from 'react-redux';

class ReviewFeedback extends Component{
    render(){
        return (
            <div>
              <h2>Review Your Feedback</h2>  
               <p>Feelings:0</p>
               <p>Understanding:0</p>
               <p>Support:0</p>
               <p>Comments:</p>
               <button>INCOMPLETE</button>
            
            </div>
            
        )
    }
}

export default connect()(ReviewFeedback);