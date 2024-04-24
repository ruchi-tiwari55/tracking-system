import React, { useState, useRef, useEffect } from 'react';
import './videoRecorder.css'; // CSS file for styling

function VideoRecorder() {
    const [recording, setRecording] = useState(false);
    const [videoURL, setVideoURL] = useState('');
    const videoRef = useRef();

    const startRecording = async (e) => {
        e.preventDefault();
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
            videoRef.current.play();

            const recorder = new MediaRecorder(stream);
            const chunks = [];

            recorder.ondataavailable = (event) => {
                chunks.push(event.data);
            };

            recorder.onstop = () => {
                const blob = new Blob(chunks, { type: 'video/webm' });
                const url = URL.createObjectURL(blob);
                setVideoURL(url);
            };

            recorder.start();
            setRecording(true);
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const stopRecording = (e) => {
        e.preventDefault();
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
            track.stop();
        });

        videoRef.current.srcObject = null;
        setRecording(false);
    };

    const removeVideo = () => {
        setVideoURL('');
    };

    return (
        <div className="video-recorder-container">
            <div className="video-window">
                {videoURL ? (
                    <video src={videoURL} controls autoPlay className="video-player" />
                ) : (
                    <video ref={videoRef} className="video-player" />
                )}
                {videoURL && (
                    <button onClick={removeVideo} className="remove-video-button">
                        Remove
                    </button>
                )}
            </div>
            <div className="controls">
                {recording ? (
                    <button onClick={stopRecording} className="record-button">
                        Stop Recording
                    </button>
                ) : (
                    <button onClick={startRecording} className="record-button">
                        Start Recording
                    </button>
                )}
            </div>
        </div>
    );
}

export default VideoRecorder;
