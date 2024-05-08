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
import { Link } from "react-router-dom";


const drawerWidth = 230;

export default function MobileSUbCategories({ categoryName, setShowMarketSidebar }) {
    const [subcategories, setSubcategories] = useState([]);


    const isMobile = useMediaQuery('(max-width:600px)');
    const goBack = () => {
        setShowMarketSidebar(true)
    };
    useEffect(() => {
        const fetchSubcategories = async () => {
            try {
                const response = await fetch(
                    "https://lzycrazy-tracking-backend.onrender.com/subcategories/getAll"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch subcategories");
                }
                const data = await response.json();
                setSubcategories(data);
            } catch (error) {
                console.error("Error fetching subcategories:", error);
            }
        };

        fetchSubcategories();
    }, []);
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
                    <div style={{ textAlign: 'center', fontWeight: "500", fontSize: "14px", backgroundColor: 'white', display: 'flex', alignItems: 'center', marginBottom: 10, gap: 10 }}>
                        <i className="fas fa-arrow-left fa-1x" onClick={goBack} style={{ cursor: "pointer", marginLeft: 5 }} ></i>
                        <span>{categoryName?.Categoryname}</span>

                    </div>
                    <div style={{ alignItems: 'center', marginBottom: 100, }}>
                        {
                            subcategories.map((subcategory) => {
                                return (
                                    <div style={{ margin: 0, padding: 0, alignItems:'center' }}>
                                        <Link to="/marketplacePage" className="subcategory-link">
                                          { subcategory.addIcon && <img src={subcategory.addIcon}  style={{ alignSelf: 'center', marginLeft: 30, height:30, width:30, borderRadius:40 }} />}
                                            <p style={{
                                                textAlign: 'center',
                                                fontSize: '12px',
                                                fontWeight: 'bold',
                                                color: 'black'

                                            }}>{subcategory.subCategoryName}</p>
                                        </Link>
                                    </div>
                                )
                            })

                        }



                    </div>
                </Box>
            </Drawer>
        </Box>
    );
}
