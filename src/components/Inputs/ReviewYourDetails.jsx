import React, { useState } from 'react';
import { Box, Typography, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import CustomDropdown from './dropDown';
import useMediaQuery from '@mui/material/useMediaQuery';
import CommonInputField from './InputFeild';

const ReviewDetailsForm = () => {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const isMobile = useMediaQuery('(max-width:600px)');

    const options = [
        { label: 'Andaman and Nicobar Islands', value: 'Andaman and Nicobar Islands' },
        { label: "Andhra Pradesh", value: "Andhra Pradesh" },
        { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
        { label: 'Assam', value: 'Assam' },
        { label: 'Bihar', value: 'Bihar' },
        { label: 'Chandigarh', value: 'Chandigarh' },
        { label: 'Chhattisgarh', value: 'Chhattisgarh' },
        { label: 'Dadra and Nagar', value: 'Dadra and Nagar' },
        { label: 'Daman and Diu', value: 'Daman and Diu' },
        { label: 'Delhi', value: 'Delhi' },
        { label: 'Daman and Diu', value: 'Daman and Diu' },
        { label: 'Delhi', value: 'Delhi' },

        { label: 'Goa', value: 'Goa' },
        { label: 'Gujarat', value: 'Gujarat' },
        { label: 'Haryana', value: 'Haryana' },
        { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
        { label: 'Jammu and Kashmir', value: 'Jammu and Kashmir' },
        { label: 'Jharkhand', value: 'Jharkhand' },
        { label: 'Karnataka', value: 'Karnataka' },
        { label: 'Kerala', value: 'Kerala' },
        { label: 'Lakshadweep', value: 'Lakshadweep' },
        { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
        { label: 'Maharashtra', value: 'Maharashtra' },
        { label: 'Manipur', value: 'Manipur' },
        { label: 'Meghalaya', value: 'Meghalaya' },
        { label: 'Mizoram', value: 'Mizoram' },
        { label: 'Nagaland', value: 'Nagaland' },
        { label: 'Odisha', value: 'Odisha' },
        { label: 'Puducherry', value: 'Puducherry' },
        { label: 'Punjab', value: 'Punjab' },
        { label: 'Rajasthan', value: 'Rajasthan' },
        { label: 'Sikkim', value: 'Sikkim' },
        { label: 'Tamil Nadu', value: 'Tamil Nadu' },
        { label: 'Telangana', value: 'Telangana' },
        { label: 'Tripura', value: 'Tripura' },
        { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
        { label: 'Uttarakhand', value: 'Uttarakhand' },
        { label: 'West Bengal', value: 'West Bengal' }

    ];




   

    const handleOption1Change = (event) => {
        setSelectedOption1(event.target.value);
    };

    const handleOption2Change = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleReviewButtonClick = () => {
        // Add logic for handling review button click (e.g., validation or navigation)
        console.log('Review button clicked');
    };

    return (
        <Box p={2} zIndex={1000}>
            <Typography variant="h6" align="center" gutterBottom
                sx={{
                    fontWeight: '600',
                    fontSize: 16,

                }}
                color={'primary'}
            >
                Review your details:
            </Typography>

            <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}
                sx={{ gap: 5, flexDirection: isMobile ? 'column' : 'row' }}
            >
                <CustomDropdown
                    label="state"
                    options={options}
                // value={selectedOption}
                // onChange={handleDropdownChange}
                />
                <CustomDropdown
                    label="city"
                    options={options}
                // value={selectedOption}
                // onChange={handleDropdownChange}
                />
            </Box>

            <CommonInputField label="Your Area*" multiline={true} required />


            <Box mt={2} mb={2} display="flex" justifyContent="center">
                <Button variant="contained" color="primary"
                    sx={{ background: '#040c4a' }}
                    onClick={handleReviewButtonClick}>
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default ReviewDetailsForm;
