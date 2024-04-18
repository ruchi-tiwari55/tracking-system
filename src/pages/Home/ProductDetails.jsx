import React from 'react';
import LeftBrands from './LeftBrands';

const ProductDetails = () => {

    const product = [

        
    ]
    return (
        <>
            <div>
                <LeftBrands />
                <div className="main-content right-chat-active pt-0">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left">
                            <div className="col-md-12">
                                <i
                                    className="bx bx-arrow-back cursor-pointer"
                                    style={{ fontSize: '30px' }}
                                    // onClick={back}
                                ></i>
                            </div>
                            <div className="row">
                                <div className="col-xl-12 mt-3">
                                    <div className="row">
                                        <div className="col-lg-7 mx-auto mb-4 product-details">
                                            <div className="q-pa-md dc" style={{ justifyContent: 'center' }}>
                                                <a href="selectimage">
                                                    <p></p>
                                                    <img
                                                        // src={selectimage}
                                                        v-if="product?.images?.length > 0"
                                                        alt="select_images"
                                                        className="product-detail-image"
                                                    />

                                                    <img
                                                        src="../../../assets/images/not-found.jpg"
                                                        v-else
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                            <div className="d-flex" style={{ gap: '10px', marginTop: '20px', marginLeft: '50px' }}>
                                                {/* {product?.images.map(item => (
                                                    <img
                                                        key={item}
                                                        src={getbannerimage(item)}
                                                        className="cursor-pointer"
                                                        width="50"
                                                        height="50"
                                                        alt="thumblain"
                                                        onClick={() => selectedimage(item)}
                                                    />
                                                ))} */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-7 mx-auto mb-4">
                                            <div>
                                                <ul className="user-dash d-flex">
                                                    <li className="na-verifiy dc" v-if="product.isactive == 1">
                                                        Not Verified
                                                    </li>
                                                    <li className="verifiy dc" style={{ color: 'green' }} v-if="product.isactive == 0">
                                                        Verified by owner
                                                    </li>
                                                    <li className="user-name text-center dc">
                                                        <img
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#imagemodalbox"
                                                            alt="profileimage"
                                                            onClick={() => setimageboximage(product?.enteredby?.profileimage)}
                                                            // src={getUserprofileimage(product?.enteredby)}
                                                            width="50"
                                                            className="circle-img"
                                                            height="50"
                                                        />
                                                        <i className="bi bi-person-circle"></i>
                                                        {product?.enteredby?.firstname} {product?.enteredby?.lastname}
                                                        <br />
                                                    </li>
                                                    <li className="user-mobile dc">
                                                        <a href={'tel:' + product?.enteredby?.mobileno}>
                                                            <img
                                                                src="../../../assets/images/mainhome/icon/phone-call.png"
                                                                className="cursor-pointer"
                                                                width="40"
                                                                height="40"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <a onClick={getresponse} href={'https://wa.me/' + product?.enteredby?.mobileno}>
                                                            <img
                                                                src="../../../assets/images/mainhome/icon/whatsapp.png"
                                                                className="cursor-pointer"
                                                                style={{ marginLeft: '30px' }}
                                                                width="40"
                                                                height="40"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-7 mx-auto mb-4">
                                            <div className="ms-auto col-md-12 pad-top-lg-200 pad-bottom-lg-100 pad-top-100 pad-bottom-75 ps-md--5">
                                                <h3 className="fw-500 text-grey-900 lh-3 porduct-title font-xl">
                                                    ₹ {shortprice(product?.sp)}
                                                </h3>
                                                <h4 className="discr-h title-p">{product.name}</h4>
                                                <div v-if="product?.category?.formtype == 2 || product?.category?.formtype == 3">
                                                    <div className="d-block border-0">
                                                        <div className="product-attribute col-md-12 col-sm-12 col-lg-12 col-12">
                                                            <div className="col-md-4 col-sm-4 col-4">
                                                                <label htmlFor="" className="attribute-item">Bathroom :</label>
                                                                <span className="attribute-value">{product?.attribute?.bathrooms}</span>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4 col-4 text-center">
                                                                <label htmlFor="" className="attribute-item">Super Sq. </label><span className="attribute-value">{product?.attribute?.superbuiltuparea}</span>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4 col-4 text-end">
                                                                <label htmlFor="" className="attribute-item"><span className="attribute-value">₹ {shortprice(product?.sp)}/month</span></label>
                                                            </div>
                                                        </div>
                                                        <div className="product-attribute col-md-12 col-sm-12 col-lg-12 col-12">
                                                            <div className="col-md-4 col-sm-4 col-4">
                                                                <label htmlFor="" className="attribute-item"></label>
                                                                <span className="attribute-value">{getMasterLabelByType(product?.attribute?.furnishing, MASTER_FURNISHING)}</span>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4 col-4 text-center">
                                                                <label htmlFor="" className="attribute-item">Carpet Area.</label><span className="attribute-value">{product?.attribute?.carpetarea}</span>
                                                            </div>
                                                        </div>
                                                        <div className="product-attribute col-md-12 col-sm-12 col-lg-12 col-12">
                                                            <div className="col-md-4 col-sm-4 col-4">
                                                                <label htmlFor="" className="attribute-item">Facing :</label>
                                                                <span className="attribute-value">{getMasterLabelByType(product?.attribute?.facingdirection, MASTER_FACING)}</span>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4 col-4 text-center">
                                                                <label htmlFor="" className="attribute-item">Car Parking :</label>
                                                                <span className="attribute-value">{product?.attribute?.noofcarparking}</span>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4 col-4 text-end">
                                                                <label htmlFor="">Posted on</label><br />
                                                                <span className="attribute-value">{moment(product?.created_at).format("DD-MM-YYYY")}</span>
                                                            </div>
                                                        </div>
                                                        <div className="product-attribute col-md-12 col-sm-12 col-lg-12 col-12">
                                                            <div className="col-md-4 col-sm-4 col-4">
                                                                <label htmlFor="" className="attribute-item">Floor No: </label><span className="attribute-value">{product?.attribute?.floorno}</span>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4 col-4 text-center">
                                                                <label htmlFor="" className="attribute-item">Total Floors: </label><span className="attribute-value">{product?.attribute?.totalfloors}</span>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4 col-4 text-end">
                                                                <label htmlFor="">Security Amt.</label><br />
                                                                <span className="attribute-value">Rs. {product?.attribute?.securityamount}</span>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                                <div v-if="product?.category?.formtype == 4">
                                                    <div className="d-block border-0">
                                                        <div className="product-attribute col-md-12 col-sm-12 col-lg-12 col-12">
                                                            <div className="col-md-4 col-sm-4 col-4">
                                                                <label htmlFor="" className="attribute-item">Vehicle Year :</label><span className="attribute-value">{product?.attribute?.vehicleyear}</span>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4 col-4 text-center">
                                                                <label htmlFor="" className="attribute-item">Fuel Type : </label><span className="attribute-value">{getMasterLabelByType(product?.attribute?.fuel, MASTER_FUEL)}</span>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4 col-4 text-end">
                                                                <label htmlFor="" className="attribute-item">Transmission :</label><span className="attribute-value">{product?.attribute?.transmission == 1 ? "Mannual" : "Automatic"}</span>
                                                            </div>
                                                        </div>
                                                        <div className="product-attribute col-md-12 col-sm-12 col-lg-12 col-12" style={{ marginTop: '20px' }}>
                                                            <div className="col-md-4 col-sm-4 col-4">
                                                                <label htmlFor="" className="attribute-item">km driven :</label><span className="attribute-value">{product?.attribute?.kmdriven}</span>
                                                            </div>
                                                            <div className="col-md-4 col-sm-4 col-4 text-center">
                                                                <label htmlFor="" className="attribute-item">No .of Owners :</label><span className="attribute-value">{getMasterLabelByType(product?.attribute?.noofowners, MASTER_NO_OF_OWNERS)}</span>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                                <h4 className="discr-h">Discriptions -</h4>
                                                <p>{product.description}</p>
                                                <h5 className="discr-h">Adress :-</h5>
                                                <p>{product?.address?.area}, {product?.address?.city?.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
