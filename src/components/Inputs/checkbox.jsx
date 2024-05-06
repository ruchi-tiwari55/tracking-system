import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const RoundedCheckbox = ({ label, checked, onChange }) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={onChange}
                    sx={{
                        '& .MuiSvgIcon-root': {
                            borderRadius: '50%',
                            // backgroundColor: checked ? '#1976d2' : 'rgba(0, 0, 0, 0.54)',
                            width: 24,
                            height: 24,
                        },
                        '& .Mui-checked': {
                            '& .MuiSvgIcon-root': {
                                backgroundColor: '#1976d2', // Checked color
                            },
                        },
                    }}
                />
            }
            label={label}
        />
    );
};

export default RoundedCheckbox;
