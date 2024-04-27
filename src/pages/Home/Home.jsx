import React from 'react';

const Home = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "65vw" }}>
            <video height="280" controls style={{ backgroundColor: "#fff", padding: "10px", width: "40vw", borderRadius: "16px", objectFit: "cover" }}>
                <source src="https://lzycrazy.com/assets/info.vedio.5920e345.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Home;
