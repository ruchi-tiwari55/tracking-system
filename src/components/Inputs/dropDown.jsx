import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CustomDropdown = ({ label, options, value, onChange }) => {
    const handleDropdownChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <FormControl fullWidth >
            <p style={{fontSize:14, marginBottom:0}}>{label}</p>
            <Select value={value} onChange={handleDropdownChange} >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}

                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomDropdown;
