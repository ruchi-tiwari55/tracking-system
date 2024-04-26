import styles from './bicycleform.module.css'
import PhotoIcon from '@mui/icons-material/AddAPhotoOutlined';
import { useState } from 'react';
import Select from 'react-select'


const options = [
    { value: 'Vespa', label: 'Vespa' },
    { value: 'Ampere', label: 'Ampere' },
    { value: 'Ather', label: 'Ather' },
    { value: 'OLA', label: 'OLA' },
    { value: 'Husqvarna', label: 'Husqvarna' },
    { value: 'Revolt', label: 'Revolt' },
    { value: 'Ducati', label: 'Ducati' },
    { value: 'Jawa', label: 'Jawa' },
    { value: 'Benelli', label: 'Benelli' },
    { value: 'Aprilia', label: 'Aprilia' },
    { value: 'Chetak', label: 'Chetak' },
    { value: 'BMW', label: 'BMW' },
    { value: 'CFMoto', label: 'CFMoto' },
    { value: 'Eider', label: 'Eider' },
    { value: 'Emflux Motors', label: 'Emflux Motors' },
    { value: 'Escorts', label: 'Escorts' },
    { value: 'Evolet', label: 'Evolet' },
    { value: 'FB Mondial', label: 'FB Mondial' },
    { value: 'Hero Electric', label: 'Hero Electric' },
    { value: 'Hop Electric', label: 'Hop Electric' },
    { value: 'Hyosung', label: 'Hyosung' },
    { value: 'Indian', label: 'Indian' },
    { value: 'Keeway', label: 'Keeway' },
    { value: 'LML', label: 'LML' },
    { value: 'Mahindra', label: 'Mahindra' },
    { value: 'Matter', label: 'Matter' },
    { value: 'Motto Guzzi', label: 'Motto Guzzi' },
    { value: 'Moto Morini', label: 'Moto Morini' },
    { value: 'MV Agusta', label: 'MV Agusta' },
    { value: 'Norton', label: 'Norton' },
    { value: 'Odysse', label: 'Odysse' },
    { value: 'Okinawa', label: 'Okinawa' },
    { value: 'OLA', label: 'OLA' },
    { value: 'PURE EV', label: 'PURE EV' },
    { value: 'QJ Motor', label: 'QJ Motor' },
    { value: 'SWM', label: 'SWM' },
    { value: 'Tork', label: 'Tork' },
    { value: 'Triumph', label: 'Triumph' },
    { value: 'UM', label: 'UM' },
    { value: 'Vespa', label: 'Vespa' },
    { value: 'Victory', label: 'Victory' },
    { value: 'Vida', label: 'Vida' },
    { value: 'Zontes', label: 'Zontes' },
    { value: 'Bajaj', label: 'Bajaj' },
    { value: 'Hero', label: 'Hero' },
    { value: 'Hero Honda', label: 'Hero Honda' },
    { value: 'Honda', label: 'Honda' },
    { value: 'KTM', label: 'KTM' },
    { value: 'Royal Enfield', label: 'Royal Enfield' },
    { value: 'Suzuki', label: 'Suzuki' },
    { value: 'TVS', label: 'TVS' },
    { value: 'Yamaha', label: 'Yamaha' },
    { value: 'Other Brands', label: 'Other Brands' },
];

const bicycleForm = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <>
            <div className={styles.navbar}></div>
            <h1 className={styles.head1}>POST YOUR AD</h1>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <h3>SELECTED CATEGORY</h3>
                    <div className={styles.top1}>
                        <p>Vehicles / Scooters</p>
                        <h4>Change</h4>
                    </div>
                </div>
                <div className={styles.details}>
                    <h3>INCLUDE SOME DETAILS</h3>

                    <div className={styles.details1}>
                        <p>Brand/Type *</p>
                        <div>
                            <Select
                                value={selectedOption}
                                onChange={handleChange}
                                options={options}
                                className={styles.selectOpt}
                            />
                        </div>
                    </div>
                    <div className={styles.details2}>
                        <label>Year *</label>
                        <input></input>
                    </div>
                    <div className={styles.details2}>
                        <label>KM Driven *</label>
                        <input></input>
                    </div>

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
                        <textarea></textarea>
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
                                {[...Array(12)].map((_, index) => (
                                    <div key={index}><PhotoIcon /></div>
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
export default bicycleForm;