import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import CommonInputField from '../../../../components/Inputs/InputFeild';
import CustomNumberInput from '../../../../components/Inputs/NumberInput';
import PhotoUpload from '../../../../components/Inputs/UploadPhoto';
import ReviewDetailsForm from '../../../../components/Inputs/ReviewYourDetails';
import CustomDropdown from '../../../../components/Inputs/dropDown';
import Buy_Rent from '../realStateForms/Buy/buy-rent';


const CommonForm = ({ categoryName, subCategoryName }) => {


    return (
        <div>
            {(subCategoryName === 'TABLETS' || subCategoryName === 'MOBILE PHONES' ||
                subCategoryName === 'VEGETABLES' || subCategoryName === 'MILK' ||
                subCategoryName === 'ANAAJ / GRAIN' || subCategoryName === 'FRUITS' ||
                subCategoryName === 'FISH'
            ) && (
                    <CustomDropdown
                        label="Brand/Type"
                        options={[1, 2, 3, 4, 5]}
                    />
                )}
            {(subCategoryName === 'BYCYCLE' || subCategoryName === 'BIKE' ||
                subCategoryName === 'CAR' || subCategoryName === 'SCOOTERS'

            ) && (
                    <VehicleForms />

                )}

            {(subCategoryName === 'BUY' || subCategoryName === 'COMMERCIAL' ||
                subCategoryName === 'RENT'

            ) && (
                    <Buy_Rent subCategoryName={subCategoryName}/>
                )}

            <CommonInputField label="Title" multiline={false} required />
            <CommonInputField label="Description" multiline={true} required />
            <CustomNumberInput aria-label="Demo number input" placeholder="Type a number…" label="Set Price" />
            <PhotoUpload />

            <Box zIndex={1000}>
                <ReviewDetailsForm />
            </Box>

        </div>
    );
};

export default CommonForm;



const VehicleForms = () => {
    return (
      <>
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{
            '@media (max-width: 600px)': {
              marginTop: 10,
            },
          }}
        >
          <CustomDropdown label="Brand" options={[1, 2, 3, 4]} />
          <CustomNumberInput
            aria-label="Demo number input"
            placeholder="Year"
            label="Year"
          />
          <CustomDropdown
            label="Select an Option"
            options={[1, 2, 3, 4]}
          />
          <CustomDropdown label="Transmission" options={['Manual', 'Automatic']} />
          <CustomNumberInput
            aria-label="Demo number input"
            placeholder="KM Driven"
            label="KM Driven"
          />
          <CustomDropdown label="No. of Owners" options={[1, 2, 3, 4]} />
        </Box>
      </>
    );
  };