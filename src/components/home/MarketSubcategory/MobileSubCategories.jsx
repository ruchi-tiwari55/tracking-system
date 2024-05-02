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


    const isMobile = useMediaQuery('(max-width:600px)');
    const goBack = () => {
        setShowMarketSidebar(true)
    };

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
                    <div style={{ textAlign: 'center', fontWeight: "500", fontSize: "14px", backgroundColor: 'white', display: 'flex', alignItems: 'center', marginBottom:10, gap:10  }}>
                        <i className="fas fa-arrow-left fa-1x" onClick={goBack} style={{ cursor: "pointer", marginLeft:5}} ></i>
                        <span>{categoryName?.Categoryname}</span>

                    </div>
                    <div style={{ alignItems: 'center', marginBottom: 100, }}>
                        <div style={{ margin: 0, padding: 0 }}>
                            <Link to="/marketplacePage">
                                <img src="assets/images/response.png" alt="category" style={{ alignSelf: 'center', marginLeft: 30 }} />
                                <p style={{
                                    textAlign: 'center',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    color: 'black'

                                }}>Grain</p>
                            </Link>
                        </div>
                        <div style={{ margin: 0, padding: 0 }}>
                            <Link to="/marketplacePage">
                                <img src="assets/images/response.png" alt="category" style={{ alignSelf: 'center', marginLeft: 30 }} />
                                <p style={{
                                    textAlign: 'center',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    color: 'black'

                                }}>Milk</p>
                            </Link>
                        </div>
                        <div style={{ margin: 0, padding: 0 }}>
                            <Link to="/marketplacePage">
                                <img src="assets/images/response.png" alt="category" style={{ alignSelf: 'center', marginLeft: 30 }} />
                                <p style={{
                                    textAlign: 'center',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    color: 'black'

                                }}>Fruits</p>
                            </Link>
                        </div>
                        <div style={{ margin: 0, padding: 0 }}>
                            <Link to="/marketplacePage">
                                <img src="assets/images/response.png" alt="category" style={{ alignSelf: 'center', marginLeft: 30 }} />
                                <p style={{
                                    textAlign: 'center',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    color: 'black'

                                }}>Fish</p>
                            </Link>
                        </div>
                        <Link to="/marketplacePage">
                            <div style={{ margin: 0, padding: 0 }}>
                                <img src="assets/images/response.png" alt="category" style={{ alignSelf: 'center', marginLeft: 30 }} />
                                <p style={{
                                    textAlign: 'center',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    color: 'black'
                                }}>Vegetables</p>
                            </div>
                        </Link>

                    </div>
                </Box>
            </Drawer>
        </Box>
    );
}
