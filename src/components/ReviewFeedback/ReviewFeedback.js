import React, { Component } from 'react';
import {connect} from 'react-redux';

class ReviewFeedback extends Component{
    render(){
        return (
            <div>
              <h2>Review Your Feedback</h2>  
               <p>Feelings:{this.props.reduxState.feelingReducer}</p>
               <p>Understanding:{this.props.reduxState.understandingReducer}</p>
               <p>Support:{this.props.reduxState.supportReducer}</p>
               <p>Comments:{this.props.reduxState.commentsReducer}</p>
               <button>INCOMPLETE</button>
            
            </div>
            
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(ReviewFeedback);