import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../../../components/home/Navbar';
import { useLocation } from 'react-router-dom';
import CommonForm from './commonForm/commonForm';
import { useModal } from './ModalContext';

const FormsLayout = ({ open, handleClose }) => {
  const location = useLocation();
  const { toggleModal, isModalOpen } = useModal();

  const { categoryName, subCategoryName } = location.state;
  const shouldRenderCommonForm = [
    'ELECTRONICS',
    'FASHION',
    'FURNITURE',
    'RENTAL ITEMS',
    'MOBILES',
    'DIRECT BY FARM',
    'VEHICLE',
    'REAL ESTATE'
  ].includes(categoryName);

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          position: 'absolute',
          top: '55%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%', // Adjusted width for mobile
          maxWidth: '400px', // Maximum width for mobile
          height: '78%',
          bgcolor: 'white',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          overflow: 'auto',
          paddingLeft: 3,
          paddingRight: 3,
          '@media (min-width: 600px)': {
            width: '80%', // Keep original width for desktop
            paddingLeft: 5,
            paddingRight: 5,
            maxWidth:'700px'
          }
        }}
      >
        <Box sx={{ position: 'sticky', top: 0, zIndex: 1, bgcolor: 'background.paper', p: 2 }}>
          <Typography variant="h6" sx={{ textAlign: 'center', color: 'black', fontWeight: '600' }}>
            Post Your Ad
          </Typography>
        </Box>

        <Box sx={{ position: 'sticky', top: 0, zIndex: 1, bgcolor: 'background.paper', p: 2, display: 'flex', gap: 2 }}>
          <Typography variant="h6" sx={{ color: 'black', fontWeight: '500', fontSize: 14 }}>
            {categoryName} / {subCategoryName}
          </Typography>
          <div onClick={toggleModal}>
            <Typography variant="h6" sx={{ color: 'blue', fontWeight: '600', fontSize: 14, cursor: 'pointer' }}>
              CHANGE
            </Typography>
          </div>
        </Box>

        {shouldRenderCommonForm && (
          <CommonForm categoryName={categoryName} subCategoryName={subCategoryName} />
        )}
      </Box>
    </div>
  );
};

export default FormsLayout;
