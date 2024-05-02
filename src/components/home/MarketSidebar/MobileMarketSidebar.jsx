import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import Hearder from './Header';
import { Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import MobileSUbCategories from '../MarketSubcategory/MobileSubCategories';

const drawerWidth = 230;

export default function MobileMarketSideBar() {

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showMarketSidebar, setShowMarketSidebar] = useState(true);
    const isMobile = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://lzycrazy-backend.onrender.com/api/admins/all-category"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const responseData = await response.json();
                console.log("Fetched data:", responseData);
                if (responseData.code === 200 && Array.isArray(responseData.data)) {
                    setCategories(responseData.data);
                } else {
                    throw new Error("Invalid data format received from the server");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);


    const handleCategoryClick = async (categoryName) => {
        setSelectedCategory(categoryName);
        setShowMarketSidebar(false);
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Navbar />
            </AppBar>

            <Drawer
                variant="permanent"

                sx={{
                    width: isMobile ? drawerWidth : drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': { width: isMobile ? 96 : drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Box sx={{ marginTop: 12 }}>
                    <div style={{background:'Lightgray'}}>Catergories</div>
                    <div style={{ alignItems: 'center', marginBottom: 100, }}>
                        {categories.map((text, index) => (
                            <div key={text} disablePadding onClick={() => handleCategoryClick(text)}>
                                <div style={{ margin: 0, padding: 0 }} onClick={() => handleCategoryClick(category.Categoryname)}>
                                    <img src="assets/images/response.png" alt="category" style={{ alignSelf: 'center', marginLeft: 30 }} />
                                    <p style={{
                                        textAlign: 'center',
                                        fontSize: '12px',
                                        fontWeight: 'bold'
                                    }}>{text?.Categoryname}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                    {!showMarketSidebar && <MobileSUbCategories categoryName={selectedCategory} setShowMarketSidebar={setShowMarketSidebar} />}

                </Box>
            </Drawer>
        </Box>
    );
}
