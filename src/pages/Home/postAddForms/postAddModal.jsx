import React from 'react';
import { Modal, Box, Typography, Divider, IconButton } from '@mui/material';
import DirectByFarmIcon from '@mui/icons-material/Agriculture';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VehiclesIcon from '@mui/icons-material/DriveEtaOutlined';
import RealEstateIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import MobilesIcon from '@mui/icons-material/PhoneIphoneOutlined';
import FurnitureIcon from '@mui/icons-material/ChairOutlined';
import FashionIcon from '@mui/icons-material/WomanOutlined';
import ElectronicsIcon from '@mui/icons-material/CableOutlined';
import TourAndTravelsIcon from '@mui/icons-material/PublicOutlined';
import RentalItemsIcon from '@mui/icons-material/ShoppingCartOutlined';
import SelfMadeIcon from '@mui/icons-material/Inventory2Outlined';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PostAdsModal = ({ open, handleClose }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleClickCategory = (category) => {
        setSelectedCategory(category);
    };

    const handleMouseEnter = (category) => {
        setSelectedCategory(category);
    };

    const handleMouseLeave = (category) => {
        setSelectedCategory(null);
    };

    const handleNavigate = (subCategoryName, categoryName) => {
        console.log(categoryName, subCategoryName);
        const state = {
            categoryName: categoryName,
            subCategoryName: subCategoryName
        };

        navigate('/mainForms', { state });
        handleClose()
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            sx={{ zIndex: 1000 }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '60%',
                    maxHeight: '80vh',
                    overflowY: 'hidden',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: 4,
                    zIndex: 1000
                }}
            >
                <Box sx={{ position: 'sticky', top: 0, zIndex: 1, bgcolor: 'background.paper', p: 2 }}>
                    <Typography variant="h6" id="modal-title" sx={{ textAlign: 'center', color: 'black', fontWeight: '600' }}>
                        Post Your Ad
                    </Typography>
                </Box>
                <Divider sx={{ height: 1, background: 'black', marginBottom: 3 }} />


                <Box sx={{ maxHeight: 'calc(80vh - 56px)', overflowY: 'auto', padding: 3, paddingBottom: 10 }}>
                    <Typography variant="body1" id="modal-description" gutterBotton sx={{ color: 'black', fontWeight: '600' }}>
                        Choose a Category
                    </Typography>


                    <Box sx={{ display: 'flex' }}

                    >
                        <Box>
                            {AddsCategory?.map((item, index) => (
                                <Box
                                    key={index}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    width={200}
                                    border={0.1}
                                    borderRadius={1}
                                    borderColor="gray"
                                    padding={0.5}
                                    marginTop={2}
                                    marginBottom={2}
                                    onMouseEnter={() => handleMouseEnter(item)}
                                    onClick={() => handleClickCategory(item)}

                                    sx={{
                                        cursor: 'pointer',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                        },
                                    }}
                                >
                                    {item.Icon}
                                    <Typography variant="body1" component="p" textAlign="center" sx={{ fontWeight: '600', fontSize: 14, marginRight: 3 }}>
                                        {item.CategoryName}
                                    </Typography>
                                    <IconButton>
                                        <ArrowForwardIosIcon />
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>


                        <Box sx={{ position: 'relative' }}>
                            {selectedCategory && (
                                <Box sx={{ marginTop: 2 }}

                                >
                                    {AddsSubCategory.find((subCat) => subCat.id === selectedCategory.id)?.subCategory.map((subItem, index) => (

                                        <Box
                                            key={index}
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="space-between"
                                            width={'93%'}
                                            border={0.5}
                                            borderColor="gray"
                                            borderRadius={2}
                                            marginTop={0.1}
                                            marginBottom={0.5}
                                            position={'relative'}
                                            // onMouseLeave={() => handleMouseLeave(item)}
                                            onClick={() => handleNavigate(subItem.subCategoryName, subItem.CategorName)}

                                            sx={{
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                                },
                                            }}
                                        >
                                            {subItem.Icon}
                                            <Typography variant="body1" component="p" textAlign="center" sx={{ fontWeight: '300', fontSize: 14, marginRight: 3 }}>
                                                {subItem.subCategoryName}
                                            </Typography>
                                            <IconButton>
                                                <ArrowForwardIosIcon />
                                            </IconButton>
                                        </Box>
                                    ))}
                                </Box>
                            )}
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Modal>
    );
};

export default PostAdsModal;

const AddsCategory = [
    {
        id: '1',
        CategoryName: 'DIRECT BY FARM',
        Icon: <DirectByFarmIcon />
    },
    {
        id: '2',
        CategoryName: 'RENTAL ITEMS',
        Icon: <RentalItemsIcon />
    },
    {
        id: '3',
        CategoryName: 'REAL ESTATE',
        Icon: <RealEstateIcon />
    },
    {
        id: '4',
        CategoryName: 'VEHICLE',
        Icon: <VehiclesIcon />
    },
    {
        id: '5',
        CategoryName: 'MOBILES',
        Icon: <MobilesIcon />

    },
    {
        id: '6',
        CategoryName: 'FURNITURE',
        Icon: <FurnitureIcon />
    },
    {
        id: '7',
        CategoryName: 'FASHION',
        Icon: <FashionIcon />
    },
    {
        id: '8',
        CategoryName: 'ELECTRONICS',
        Icon: <ElectronicsIcon />
    },
    {
        id: '9',
        CategoryName: 'TOUR & TRAVELS',
        Icon: <TourAndTravelsIcon />
    },






]

const AddsSubCategory = [
    {
        id: '1',
        subCategory: [
            {
                CategorName: 'DIRECT BY FARM',

                subCategoryName: 'ANAAJ / GRAIN',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'DIRECT BY FARM',

                subCategoryName: 'EGGS',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'DIRECT BY FARM',
                subCategoryName: 'FISH',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'DIRECT BY FARM',
                subCategoryName: 'FRUITS',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'DIRECT BY FARM',
                subCategoryName: 'MILK',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'DIRECT BY FARM',
                subCategoryName: 'VEGETABLES',
                Icon: <DirectByFarmIcon />
            }
        ]
    },
    {
        id: '2',
        subCategory: [
            {
                CategorName: 'RENTAL ITEMS',
                subCategoryName: 'AC',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'RENTAL ITEMS',

                subCategoryName: 'COMPUTER',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'RENTAL ITEMS',

                subCategoryName: 'LAPTOP',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'RENTAL ITEMS',

                subCategoryName: 'FRIDGE',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'RENTAL ITEMS',

                subCategoryName: 'FURNITURE',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'RENTAL ITEMS',

                subCategoryName: 'HOME APPLIENCE',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'RENTAL ITEMS',

                subCategoryName: 'INVERTOR',
                Icon: <DirectByFarmIcon />
            }
        ]
    },
    {
        id: '3',
        subCategory: [
            {
                CategorName: 'REAL ESTATE',

                subCategoryName: 'BUY',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'REAL ESTATE',

                subCategoryName: 'COMMERCIAL',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'REAL ESTATE',

                subCategoryName: 'RENT',
                Icon: <DirectByFarmIcon />
            },

        ]
    },
    {
        id: '4',
        subCategory: [
            {
                CategorName: 'VEHICLE',

                subCategoryName: 'BYCYCLE',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'VEHICLE',

                subCategoryName: 'BIKE',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'VEHICLE',

                subCategoryName: 'CAR',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'VEHICLE',

                subCategoryName: 'OTHER',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'VEHICLE',

                subCategoryName: 'SCOOTERS',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'VEHICLE',

                subCategoryName: 'SPARE PARTS',
                Icon: <DirectByFarmIcon />
            },

        ]
    },

    {
        id: '5',
        subCategory: [
            {
                CategorName: 'MOBILES',

                subCategoryName: 'ACESSORIES',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'MOBILES',

                subCategoryName: 'MOBILE PHONES',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'MOBILES',

                subCategoryName: 'TABLETS',
                Icon: <DirectByFarmIcon />
            },

        ]
    },

    {
        id: '6',
        subCategory: [
            {
                CategorName: 'FURNITURE',

                subCategoryName: 'BEDS',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'FURNITURE',

                subCategoryName: 'CHAIRS',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'FURNITURE',

                subCategoryName: 'DINING TABLES',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'FURNITURE',

                subCategoryName: 'KIDS FURNITURE',
                Icon: <DirectByFarmIcon />
            },

        ]
    },
    {
        id: '7',
        subCategory: [
            {
                CategorName: 'FASHION',

                subCategoryName: 'KIDS',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'FASHION',

                subCategoryName: 'MEN',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'FASHION',

                subCategoryName: 'WOMEN',
                Icon: <DirectByFarmIcon />
            },


        ]
    },
    {
        id: '8',
        subCategory: [
            {
                CategorName: 'ELECTRONICS',

                subCategoryName: 'AC',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'ELECTRONICS',

                subCategoryName: 'CAMERS & LENSES',
                Icon: <DirectByFarmIcon />
            },
            {
                subCategoryName: 'COMPUTES & LAPTOP',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'ELECTRONICS',

                subCategoryName: 'FRIDGE',
                Icon: <DirectByFarmIcon />
            },
            {
                CategorName: 'ELECTRONICS',

                subCategoryName: 'KITCHEN APPLIENCES',
                Icon: <DirectByFarmIcon />
            },
        ]
    },

]





