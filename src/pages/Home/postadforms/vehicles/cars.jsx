import styles from './bicycleform.module.css'
import PhotoIcon from '@mui/icons-material/AddAPhotoOutlined';
import { useState } from 'react';
import Select from 'react-select'


const brands = [
    "Maruti Suzuki", "Hyundai", "Tata", "Mahindra", "Toyota", "Honda", "BYD", "Audi", "Ambassador",
    "Ashok", "Ashok Leyland", "Aston", "Aston Martin", "Bajaj", "Bentley", "Citroen", "McLaren",
    "Fisker", "Tesla", "BMW", "Bugatti", "Cadillac", "Caterham", "Chevrolet", "Chrysler", "Conquest",
    "Daewoo", "Datsun", "Dc", "Dodge", "Eicher Polaris", "Ferrari", "Fiat", "Force Motors", "Ford",
    "Hummer", "ICML", "Infiniti", "Isuzu", "Jaguar", "Jeep", "Kia", "Lamborghini", "Land Rover",
    "Lexus", "Mahindra Renault", "Maserati", "Maybach", "Mazda", "Mercedes-Benz", "MG", "Mini",
    "Mitsubishi", "Nissan", "Opel", "Peugeot", "Porsche", "Premier", "Renault", "Rolls-Royce", "San",
    "Sipani", "Skoda", "Smart", "Ssangyong", "Subaru", "Volkswagen", "Volvo"
  ];
const HousesAppartments = () => {

    const options = brands.map(brand => ({ value: brand, label: brand }));
    return (
        <>
            <div className={styles.navbar}></div>
            <h1 className={styles.head1}>POST YOUR AD</h1>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <h3>SELECTED CATEGORY</h3>
                    <div className={styles.top1}>
                        <p>Vehicles / Cars</p>
                        <h4>Change</h4>
                    </div>
                </div>
                <div className={styles.details}>
                    <h3>INCLUDE SOME DETAILS</h3>
                    <div className={styles.details1} style={{ gap: "2.5rem" }}>
                        <div>
                            <p>Brand *</p>
                            <div>
                                <Select
                                    options={options}
                                    className={styles.selectOpt}
                                />
                            </div>
                        </div>
                        <div>
                            <p>Year *</p>
                            <div>
                                <input></input>
                            </div>
                        </div>
                        <div>
                            <p>Fuel *</p>
                            <div className={styles.details1_1}>
                                <div>CNG & Hybrids</div>
                                <div>Diesel</div>
                                <div>Electric</div>
                                <div>LPG</div>
                                <div>Petrol</div>
                            </div>
                        </div>
                        <div>
                            <p>Transmission *</p>
                            <div className={styles.details1_1}>
                                <div>Automatic</div>
                                <div>Manual</div>
                            </div>
                        </div>
                        <div>
                            <p>KM Driven *</p>
                            <div>
                                <input></input>
                            </div>
                        </div>
                        <div>
                            <p>No. of Owners *</p>
                            <div className={styles.details1_1}>
                                <div>1st</div>
                                <div>2nd</div>
                                <div>3rd</div>
                                <div>4th</div>
                                <div>4+</div>
                            </div>
                        </div>
                        <div className={styles.details1} style={{ gap: "2.5rem" }}>
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
                        <h3>UPLOAD UPTO 20 PHOTOS</h3>
                        <div>
                            <p>Add Photo</p>
                            <div className={styles.photos1}>
                                {[...Array(20)].map((_, index) => (
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
export default HousesAppartments;