import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class ReviewFeedback extends Component{

    state = {
        feedbackToAdd : {
            feeling : 0,
            understanding : 0,
            support : 0,
            comments : '',
            flagged : '',
            date : ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let propertyName = event.target.name
        this.setState({
            feedbackToAdd: {
                ...this.state.feedbackToAdd,

            }
        })

        }
     console.log('you clicked submit button',this.props.reduxstate.feedbackToAdd);
    //  axios.post('/feedback', {  name : this.state.feedbackToAdd} )
    // .then( response => {
    //     console.log('response from POST in client',response)
    //   // GET WILL BE DONE BY ARTISTLIST
    //   // TAKE ME THERE NOW
    //   this.props.history.push('/');

    // })
    // .catch( err => {
    //   alert('in axios post',err)
    // })

  }
        
        
    
    render(){
        return (
            <div>
              <h2>Review Your Feedback</h2> 
              <form onSubmit={this.handleSubmit}>
              <p>Feelings:{this.props.reduxState.feelingReducer}</p>
               <p>Understanding:{this.props.reduxState.understandingReducer}</p>
               <p>Support:{this.props.reduxState.supportReducer}</p>
               <p>Comments:{this.props.reduxState.commentsReducer}</p>
               <button type="submit">INCOMPLETE</button>
               </form> 
               
            
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