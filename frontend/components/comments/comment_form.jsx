import React from 'react';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { Button } from '@mui/material';


class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: '',
            video_id: this.props.videoId,
            // commenter_id: this.props.currentUserId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.currentUserCheck = this.currentUserCheck.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.composeComment(this.state);
    }

    currentUserCheck(){
        if (!this.props.currentUserId) {
            this.props.history.push('/login')
        }
    }

    update(field){
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render(){
        return(
            <div onClick={this.currentUserCheck}>
                <form >
                    <textarea
                        value={this.state.body}
                        placeholder={'Add a public comment...'}
                        onChange={this.update('body')}
                    />
                    <Button onClick={this.handleSubmit}>COMMENT</Button>
                    {/* <button>CANCEL</button> */}
                </form>
            </div>
        )
    }
}

export default CommentForm;