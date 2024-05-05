import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../../../components/home/Navbar';
import { useLocation } from 'react-router-dom';
import CommonInputField from '../../../components/Inputs/InputFeild';
import CustomNumberInput from '../../../components/Inputs/NumberInput';
import PhotoUpload from '../../../components/Inputs/UploadPhoto';
import ReviewDetailsForm from '../../../components/Inputs/ReviewYourDetails';
import CommonForm from './formsWithTitle/commonForm';
import { useEffect } from 'react';
import { useModal } from './ModalContext';

const FormsLayout = ({ open, handleClose }) => {
    const location = useLocation();
    const { toggleModal, isModalOpen } = useModal();

    const { categoryName, subCategoryName } = location.state;
    const shouldRenderCommonForm = ['ELECTRONICS', 'FASHION', 'FURNITURE', 'RENTAL ITEMS', 'MOBILES',
    'DIRECT BY FARM', 'VEHICLE'].includes(categoryName);
    useEffect(() => {

        console.log(shouldRenderCommonForm);
    })


    return (
        <div>
            <Navbar />
            <Box
                sx={{
                    position: 'absolute',
                    top: '55%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '55%',
                    height: '80%',
                    bgcolor: 'white',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    overflow: 'auto', // Enable scrolling for the content
                    paddingLeft: 5,
                    paddingRight: 5,
                }}
            >
                <Box sx={{ position: 'sticky', top: 0, zIndex: 1, bgcolor: 'background.paper', p: 2 }}>
                    <Typography variant="h6" id="modal-title" sx={{ textAlign: 'center', color: 'black', fontWeight: '600' }}>
                        Post Your Ad
                    </Typography>
                </Box>

                <Box sx={{ position: 'sticky', top: 0, zIndex: 1, bgcolor: 'background.paper', p: 2, display: 'flex', gap: 2 }}>
                    <Typography variant="h6" id="modal-title" sx={{ color: 'black', fontWeight: '500', fontSize: 14 }}>
                        {categoryName} / {subCategoryName}
                    </Typography>
                    <div onClick={toggleModal}>
                        <Typography variant="h6" id="modal-title" sx={{ color: 'blue', fontWeight: '600', fontSize: 14, cursor: 'pointer' }}
                        >
                            CHANGE
                        </Typography>
                    </div>

                </Box>

                {shouldRenderCommonForm && <CommonForm categoryName={categoryName}
                    subCategoryName={subCategoryName}
                />}
            </Box>
        </div>
    );
};

export default FormsLayout;
