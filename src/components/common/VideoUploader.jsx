import React, { useState } from 'react';
import './videoUploader.css'; // CSS file for styling

function VideoUploader() {
    const [videoURL, setVideoURL] = useState('');

    // Function to handle video upload
    const handleVideoUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setVideoURL(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // Function to remove uploaded video
    const removeVideo = () => {
        setVideoURL('');
    };

    return (
        <div className="video-uploader-container">
            <div className="video-preview">
                {videoURL && (
                    <>
                        <span className="remove-video" onClick={removeVideo}>
                            &#10006;
                        </span>
                        <video controls src={videoURL} className="video-player" />
                    </>
                )}
                {!videoURL && <p>No video uploaded</p>}
            </div>
            <div className="video-uploader">
                <label htmlFor="video-input" className="upload-label">
                    Upload
                </label>
                <input
                    type="file"
                    id="video-input"
                    accept="video/*"
                    onChange={handleVideoUpload}
                />
            </div>

            
        </div>
    );
}

export default VideoUploader;
