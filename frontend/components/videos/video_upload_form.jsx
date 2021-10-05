import React from "react";

class VideoUploadForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
        },

        this.update = this.update.bind(this)
    };



    update(field){
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    }
    
    render(){
        return(
            <div>
                <div className='video-upload-form'>
                    <form>
                        <h1>Video Upload</h1>
                        <label>
                            Title: 
                            <input
                                type='text'
                                value={this.state.title}
                                onChange={this.update('title')}
                            />
                        </label>
                        <label>
                            Description:
                            <textarea
                                value={this.state.description}
                                onChange={this.update('description')}
                            />
                        </label>
                        <label>
                            Upload a video file:
                            <input
                                type='file' 
                            />

                        </label>
                        <label>
                            Upload a thumbnail:
                            <input 
                                type='file'
                            />
                        </label>
                    </form>
                </div>
            </div>
        )
    }
    
};

export default VideoUploadForm;