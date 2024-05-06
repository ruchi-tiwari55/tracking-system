import React, { useState } from 'react';
import Select from 'react-select';
import { Button } from '@mui/material';
import PhotoIcon from '@mui/icons-material/AddAPhotoOutlined';
import styles from './buy.module.css';

const HousesAppartments = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const [bedrooms, setBedrooms] = useState(null);
    const [bathrooms, setBathrooms] = useState(null);
    const [furnishing, setFurnishing] = useState(null);
    const [listedBy, setListedBy] = useState(null);
    const [carParking, setCarParking] = useState(null);
    const [constructionStatus, setConstructionStatus] = useState(null);
    const [selectedFacing, setSelectedFacing] = useState(null);

    const handleButtonClick = (value, setter) => {
        setter(value === setter ? null : value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>POST YOUR AD</h2>
            </div>
            <div className={styles.details}>
                <div className={styles.section}>
                    <h3>SELECTED CATEGORY</h3>
                    <div className={styles.category}>
                        <p>Real Estate / Buy</p>
                        <h4>Change</h4>
                    </div>
                </div>
                <div className={styles.section}>
                    <h3>INCLUDE SOME DETAILS</h3>
                    <div className={styles.detailsGrid}>
                        {/* Type */}
                        <div>
                            <p style={{ margin: 20 }}>Type *</p>
                            <div className={styles.option}>
                                {['Appartments', 'Builder Floors', 'Farm Houses', 'Houses & Villas'].map((type) => (
                                    <div
                                        key={type}
                                        onClick={() => handleButtonClick(type, setSelectedButton)}
                                        className={`${styles.option} ${selectedButton === type && styles.selected}`}
                                    >
                                        {type}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Bedrooms */}
                        <div>
                            <p style={{ margin: 20 }}>Bedrooms</p>
                            <div className={styles.option}>
                                {['1', '2', '3', '4', '4+'].map((num) => (
                                    <div
                                        key={num}
                                        onClick={() => handleButtonClick(num, setBedrooms)}
                                        className={`${styles.option} ${bedrooms === num && styles.selected}`}
                                    >
                                        {num}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p>Super Builtup area (ft²) *</p>
                        <input type="text" style={{ width: '70%', height: 35 }} />
                        <p>Carpet area (ft²) *</p>
                        <input type="text" style={{ width: '70%', height: 35 }} />
                        <p>Maintenance (Monthly)</p>
                        <input type="text" style={{ width: '70%', height: 35 }} />
                        <p>Total Floors</p>
                        <input type="text" style={{ width: '70%', height: 35 }} />
                        <p>Project Name</p>
                        <input type="text" style={{ width: '70%', height: 35 }} />
                        <p>Price *</p>
                        <input type="text" style={{ width: '70%', height: 35 }} />
                        <div className={styles.location1}>
                        <p>State *</p>
                        <select style={{width:'70%', height:35}}>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Ladakh">Ladakh</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    </div>
                        <p>city</p>
                        <input type="text" style={{ width: '70%', height: 35 }} />
                        {/* Description textarea */}
                        <p>Description *</p>

                        <textarea rows="4" style={{ width: '70%', }} />


                        {/* Bathrooms */}
                        <div>
                            <p style={{ margin: 20 }}>Bathrooms</p>
                            <div className={styles.option}>
                                {['1', '2', '3', '4', '4+'].map((num) => (
                                    <div
                                        key={num}
                                        onClick={() => handleButtonClick(num, setBathrooms)}
                                        className={`${styles.option} ${bathrooms === num && styles.selected}`}
                                    >
                                        {num}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Furnishing */}
                        <div>
                            <p style={{ margin: 20 }}>Furnishing</p>
                            <div className={styles.option}>
                                {['Unfurnished', 'Furnished', 'Semi-Furnished'].map((type) => (
                                    <div
                                        key={type}
                                        onClick={() => handleButtonClick(type, setFurnishing)}
                                        className={`${styles.option} ${furnishing === type && styles.selected}`}
                                    >
                                        {type}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Construction Status */}
                        <div>
                            <p style={{ margin: 20 }}>Construction Status</p>
                            <div className={styles.option}>
                                {['New Launch', 'Ready to move', 'Under Construction'].map((status) => (
                                    <div
                                        key={status}
                                        onClick={() => handleButtonClick(status, setConstructionStatus)}
                                        className={`${styles.option} ${constructionStatus === status && styles.selected}`}
                                    >
                                        {status}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Listed By */}
                        <div>
                            <p style={{ margin: 20 }}>Listed By</p>
                            <div className={styles.option}>
                                {['Builder', 'Dealer', 'Owner'].map((type) => (
                                    <div
                                        key={type}
                                        onClick={() => handleButtonClick(type, setListedBy)}
                                        className={`${styles.option} ${listedBy === type && styles.selected}`}
                                    >
                                        {type}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Car Parking */}
                        <div>
                            <p style={{ margin: 20 }}>Car Parking</p>
                            <div className={styles.option}>
                                {['1', '2', '3', '4', '4+'].map((num) => (
                                    <div
                                        key={num}
                                        onClick={() => handleButtonClick(num, setCarParking)}
                                        className={`${styles.option} ${carParking === num && styles.selected}`}
                                    >
                                        {num}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Facing */}
                        <div>
                            <p style={{ margin: 20 }}>Facing</p>
                            <Select
                                value={selectedFacing}
                                onChange={(option) => setSelectedFacing(option)}
                                options={[
                                    { value: 'East', label: 'East' },
                                    { value: 'North', label: 'North' },
                                    { value: 'North-East', label: 'North-East' },
                                    { value: 'North-West', label: 'North-West' },
                                    { value: 'South', label: 'South' },
                                    { value: 'South-East', label: 'South-East' },
                                    { value: 'South-West', label: 'South-West' },
                                    { value: 'West', label: 'West' },
                                ]}
                                className={styles.selectOpt}
                            />
                        </div>


                        <div style={{ display: 'flex', gap: 20, marginTop: 12 }}>
                            {[...Array(8)].map((_, index) => (
                                <div key={index} style={{ border: '1px dashed black', padding: 30 }}>
                                    <PhotoIcon color="action" style={{ cursor: 'pointer' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <Button variant="contained" style={{ width: '70%', background: '#040c4a' }}>
                    POST NOW
                </Button>
            </div>
        </div>
    );
};

export default HousesAppartments;
