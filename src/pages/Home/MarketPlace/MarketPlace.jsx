import React from 'react';
import video1 from '../../../assets/video1.mp4';
import video2 from '../../../assets/video2.mp4';

function VideoComponent() {
  return (
    <div className="row ps-2 pe-2 mob-pl">
      <div className="main-section">
        <div className="row">
          <div className="col-6">
            <div className="banner">
              <div className="video-wrapper">
                <video className="video-size" preload="metadata" controls poster="/assets/banner5.37291f5c.jpg">
                  <source src={video1} type="video/mp4" />
                  <source src="" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner">
              <div className="video-wrapper">
                <video preload="metadata" className="video-size" controls poster="/assets/banner3.9cf0ab5a.jpg">
                  <source src={video2} type="video/mp4" />
                  <source src="" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;
