import styles from './electronics.module.css';
import '../../../../styles/globals.css';
import PhotoIcon from '@mui/icons-material/AddAPhotoOutlined';
import React, { useState } from 'react';

const ArtificialJewellery = () => {
    const [photos, setPhotos] = useState(Array(12).fill(null));

    const handlePhotoUpload = (index, event) => {
        const file = event.target.files[0];
        const newPhotos = [...photos];
        newPhotos[index] = URL.createObjectURL(file);
        setPhotos(newPhotos);
    };
    return (
        <>
            <div className={styles.navbar}></div>
            <h1 className={styles.head1}>POST YOUR AD</h1>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <h3>SELECTED CATEGORY</h3>
                    <div className={styles.top1}>
                        <p>Electronics / Fridge</p>
                        <h4>Change</h4>
                    </div>
                </div>
                <div className={styles.details}>
                    <h3>INCLUDE SOME DETAILS</h3>
                    {/* <div className={styles.details1}>
                        <p>Brand/Type *</p>
                        <div>
                            <Select
                                value={selectedOption}
                                onChange={handleChange}
                                options={options}
                                placeholder="Select a category"
                                className={styles.options}
                            />
                        </div>
                    </div> */}
                    <div className={styles.details2}>
                        <label>Ad title *</label>
                        <input></input>
                        <div className={styles.details2_2}>
                            <p>Mention the key features of you item (e.g. brand, model, age, type)</p>
                            <p>0/70</p>
                        </div>
                    </div>
                    <div className={styles.details3}>
                        <label>Description*</label>
                        <input></input>
                        <div className={styles.details2_2}>
                            <p>Include condition, features and reason for selling</p>
                            <p>0/4096</p>
                        </div>
                    </div>
                </div>
                <div className={styles.price}>
                    <div>
                        <h3>SET A PRICE</h3>
                        <div className={styles.price1}>
                            <label>Price *</label>
                            <input></input>
                        </div>
                    </div>
                </div>
                <div className={styles.photos}>
                    <div>
                        <h3>UPLOAD UPTO 12 PHOTOS</h3>
                        <div>
                        <p>Add Photo</p>
                            <div className={styles.photos1}>
                                {photos.map((photo, index) => (
                                    <label key={index}>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(event) => handlePhotoUpload(index, event)}
                                            style={{ display: 'none' }}
                                        />
                                        <div
                                            className={`${styles.photoIcon} ${index === 0 ? styles.firstPhotoIcon : ''}`}
                                            onClick={() => document.getElementById(`file-upload-${index}`).click()}
                                        >
                                            {photo ? <img src={photo} alt={`Uploaded Photo ${index + 1}`} /> : <PhotoIcon />}
                                        </div>
                                    </label>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className={styles.location}>
                    <h3>CONFIRM YOUR LOCATION</h3>
                    <div className={styles.location1}>
                        <label>State *</label>
                        <select>
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
                    <div className={styles.location2}>
                        <label>City *</label>
                        <input></input>
                    </div>

                </div>
                <div className={styles.bottom}>
                    <button>POST NOW</button>
                </div>

            </div>
            <div className={styles.footer}></div>
        </>
    )
}
export default ArtificialJewellery;