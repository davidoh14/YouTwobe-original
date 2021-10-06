import React from "react";
import NavBarContainer from "../nav/nav_bar_container" 

class VideoUploadForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            video: null,
            videoUrl: '',
            thumbnail: null,
            thumbnailUrl: '',
            attachmentErrors: ''
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
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ video: file, videoUrl: fileReader.result});
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    uploadThumbnail(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ thumbnail: file, thumbnailUrl: fileReader.result});
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e){
        e.preventDefault();

        if (!this.state.video){
            this.setState({attachmentErrors: 'Please attach a video and thumbnail'})
            return
        }
            
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[uploader_id]', this.props.currentUser.id);
        formData.append('video[video]', this.state.video);
        formData.append('video[thumbnail]', this.state.thumbnail);
        
        this.props.createVideo(formData);
    }
    
    render(){
        console.log(this.state);
        const preview = this.state.thumbnailUrl ? <img src={this.state.thumbnailUrl}/> : null;
        return(
            <div>
                <NavBarContainer/>
                <div className='video-upload-form'>
                    <div>
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
                       
                        <button>
                            <label>
                                Upload a video file:
                                <input
                                    type='file' 
                                    onChange={this.uploadVideo}
                                    />
                            </label>
                        </button>

                        <button>
                            <label>
                                Upload a thumbnail:
                                <input 
                                    type='file'
                                    onChange={this.uploadThumbnail}
                                    />
                                <h3>Preview</h3>
                                {preview}
                            </label>
                        </button>
                        <div className='attachment-errors'>
                            {this.state.attachmentErrors}
                        </div>
                        <button  onClick={this.handleSubmit}>Upload Video</button>
                    </div>
                </div>



                <ul>                     
                    {this.props.errors.map((error, i) => 
                        <li key={i}>{error}</li>)}
                </ul>

            </div>
        )
    }
    
};

export default VideoUploadForm;