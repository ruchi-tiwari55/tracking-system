import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "65vw", alignSelf: 'center' }}>
            <video height="280" controls style={{ backgroundColor: "#fff", padding:isMobile? "18px":"10px", width: "90vw", borderRadius: "16px", objectFit: "cover", marginLeft: isMobile ? 118 : 0 }}>
                <source src="https://lzycrazy.com/assets/info.vedio.5920e345.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Home;
