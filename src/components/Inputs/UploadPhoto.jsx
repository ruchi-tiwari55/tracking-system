import React, { useState } from 'react';
import { Box, Typography, IconButton, Grid, Paper } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CloseIcon from '@mui/icons-material/Close';

const PhotoUpload = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelect = (event) => {
        const files = event.target.files;
        if (files.length + selectedFiles.length > 8) {
            alert('You can select a maximum of 8 photos.');
            return;
        }

        const newFiles = Array.from(files).slice(0, 8 - selectedFiles.length);
        setSelectedFiles([...selectedFiles, ...newFiles]);
    };

    const handleRemoveImage = (index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);
    };

    return (
        <Box mt={2} p={2} bgcolor="white" borderRadius={2} border="1px dashed #aaa" width="100%">
            <Box mt={2}>
                <Grid container spacing={1}>
                    {selectedFiles.map((file, index) => (
                        <Grid key={index} item xs={3}>
                            <Paper elevation={0}>
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={`Selected ${index + 1}`}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <IconButton
                                    onClick={() => handleRemoveImage(index)}
                                    style={{ position: 'absolute', top: 5, right: 5, color: 'red' }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box mt={2} p={2} bgcolor="rgba(0, 0, 0, 0.1)" borderRadius={4} border="1px dashed #aaa" width="30%">
                <Typography variant="subtitle1" mb={1}>
                    Upload Photos:
                </Typography>
                <input
                    type="file"
                    accept="image/*"
                    id="photo-upload-input"
                    multiple
                    style={{ display: 'none' }}
                    onChange={handleFileSelect}
                />
                <label htmlFor="photo-upload-input">
                    <IconButton component="span">
                        <PhotoCameraIcon />
                    </IconButton>
                </label>
            </Box>
        </Box>
    );
};

export default PhotoUpload;
