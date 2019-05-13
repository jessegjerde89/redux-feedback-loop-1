import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";


class ReviewFeedback extends Component {
   state= {
    feeling : 0,
    understanding : 0,
    support : 0,
    comments : ''
   }
    
    handleSubmit = () => {
        
        console.log('you clicked submit button',(this.props.reduxState.feedbackReducer));
        
        axios.post('/feedback',  (this.props.reduxState.feedbackReducer))
            .then(response => {
                console.log('response from POST in client', response.data)
               
            })
            .catch(err => {
                alert('in axios post', err)
            })
            this.props.history.push('/thank');
            
    }

    isComplete = () => {
        let feeling = this.props.reduxState.feedbackReducer.feeling;
        let understanding = this.props.reduxState.feedbackReducer.understanding;
        let support = this.props.reduxState.feedbackReducer.support;
        let comments = this.props.reduxState.feedbackReducer.comments;
        if(feeling && understanding && support && comments){
            return true;
        }
        return false;
    }

    conditionalButton = () => {
        return (
            (this.isComplete()) ?
                <Button onClick={() => this.handleSubmit()}  variant="outlined" color="primary">submit</Button>
                
                :            
                <Button variant="outlined" disabled >
                  Incomplete
               </Button>            
        )
    }




    render() {
        return (
            <div>

                <h2>Review Your Feedback</h2>
                    <form >
                    <p>Feeling:{this.props.reduxState.feedbackReducer.feeling}</p>
                    <p>Understanding:{this.props.reduxState.feedbackReducer.understanding}</p>
                    <p>Support:{this.props.reduxState.feedbackReducer.support}</p>
                    <p>Comments:{this.props.reduxState.feedbackReducer.comments}</p>
                    {/* <button type="submit" >SUBMIT</button> */}
                    {this.conditionalButton()}
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

const connectedReviewFeedback = connect(mapStateToProps)(ReviewFeedback)

export default withRouter(connectedReviewFeedback)