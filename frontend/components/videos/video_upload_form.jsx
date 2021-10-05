import React from "react";
import { $CombinedState } from "redux";

class VideoUploadForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            file: null,
            thumbnail: null,
        },

        this.update = this.update.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.uploadThumbnail = this.uploadThumbnail.bind(this);
    };

    update(field){
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    }
    
    uploadFile(e){
        this.setState({ videoFile: e.currentTarget.files[0]});
    }
    uploadThumbnail(e){
        this.setState({ videoThumbnail: e.currentTarget.files[0]});
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        
        $.ajax({
            url: 'api/posts',
            method: 'POST',
            data: formData
        })
    }
    
    render(){
        console.log(this.state)
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
                        <button/>
                    </form>
                        <label>
                            Upload a video file:
                            <input
                                type='file' 
                                onChange={this.uploadFile['file']}
                            />
                        </label>
                        <label>
                            Upload a thumbnail:
                            <input 
                                type='file'
                                onChange={this.uploadThumbnail['thumbnail']}
                            />
                        </label>
                </div>
            </div>
        )
    }
    
};

export default VideoUploadForm;