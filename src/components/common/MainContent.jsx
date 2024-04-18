import React from 'react';

const MainContent = () => {
    return (
        <div className="main-content right-chat-active border border-danger">
            <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left">
                    <div className="preloader-wrap p-3" style={{ display: "none" }}>
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="box shimmer mb-3">
                                <div className="lines">
                                    {[...Array(4)].map((_, index) => (
                                        <div key={index} className="line s_shimmer"></div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row feed-body" style={{ marginTop: "10px" }}>
                        <div className="col-xl-6 col-xxl-9 col-lg-8 px-0 px-lg-2">
                            <div className="rounded-xxl border-0 mt-2" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "60vw" }}>
                                <video height="280" controls style={{ backgroundColor: "#fff", padding: "10px", width: "40vw", borderRadius: "16px", objectFit: "cover" }}>
                                    <source src="https://lzycrazy.com/assets/info.vedio.5920e345.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="col-xl-3 col-xxl-3 col-lg-4 ps-md-0 left-banner-head">
                            <img src="/assets/left-banner.43793d40.jpg" className="left-banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;