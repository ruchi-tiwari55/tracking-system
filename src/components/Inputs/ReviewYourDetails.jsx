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
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
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
                sx={{ gap: 5, flexDirection: isMobile? 'column':'row' }}
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
