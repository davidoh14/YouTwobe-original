import React from "react";
import NavBarContainer from "../nav/nav_bar_container" 

class VideoUploadForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            video: null,
            thumbnail: null,
        },

        this.update = this.update.bind(this);
        this.uploadVideo = this.uploadVideo.bind(this);
        this.uploadThumbnail = this.uploadThumbnail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field){
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    }
    
    uploadVideo(e){
        this.setState({ video: e.currentTarget.files[0]});
    }

    uploadThumbnail(e){
        this.setState({ thumbnail: e.currentTarget.files[0]});
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[uploader_id]', this.props.currentUser.id)
        formData.append('video[video]', this.state.file);
        formData.append('video[thumbnail]', this.state.thumbnail);
        
        this.props.createVideo(formData) 
        // .then(
        //     (response) => console.log(response.message), 
        //     (response) => console.log(response.responseJSON)
        // );
    }
    
    render(){
        console.log(this.state)
        console.log(this.props.currentUser)
        return(
            <div>
                <NavBarContainer/>
                <div className='video-upload-form'>
                    <form onSubmit={this.handleSubmit}>
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
                        <button>Upload Video</button>
                    </form>
                    <button>
                        <label>
                            Upload a video file:
                            <input
                                type='file' 
                                onChange={this.uploadVideo['video']}
                            />
                        </label>
                    </button>
                    <button>
                        <label>
                            Upload a thumbnail:
                            <input 
                                type='file'
                                onChange={this.uploadThumbnail['thumbnail']}
                                />
                        </label>
                    </button>
                        
                </div>
            </div>
        )
    }
    
};

export default VideoUploadForm;