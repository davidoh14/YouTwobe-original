import React from 'react';
import { Button } from '@mui/material';


class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: '',
            video_id: this.props.videoId,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.currentUserCheck = this.currentUserCheck.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.composeComment(this.state, {videoId: this.props.videoId});
    }

    currentUserCheck(){
        if (!this.props.currentUserId) {
            this.props.history.push('/login')
        } else {
            this.setState({video_id: this.props.videoId}) 
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