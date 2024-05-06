import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Height } from '@mui/icons-material';

const CommonInputField = ({ label, multiline, required }) => {
    return (
        <Box>
            <Typography variant="body1" color="black" sx={{ marginBottom: 1 }}>
                {label}
                {required && <span style={{ color: 'red' }}>*</span>}
            </Typography>
            <TextField
                multiline={multiline}
                fullWidth
                rows={multiline ? 2 : 1}
                variant="outlined"
                required={required}
                InputProps={{
                    sx: {
                        minHeight: 5,
                    },
                }}
            />
        </Box>
    );
};

export default CommonInputField;
