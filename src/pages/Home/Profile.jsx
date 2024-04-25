

const Profile = () => {
    return (
        <div className="main-content right-chat-active border">
            <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left">
                    <div className="card w-100 border-0 p-0 bg-white shadow-xss rounded-sm ">
                        <div className="card-body p-0 rounded overflow-hidden m-1">
                            <img
                                src="https://lzycrazy.com/assets/about-bg.d32aac61.jpg"
                                alt="Profile Background"
                                className="w-100"
                            />
                            {/* <div className="text-center position-absolute profile-image">
                                <img
                                    src="https://lzycrazyserver.lzycrazy.com/public/ProfileImage/1693471659_defaultimage.jpg-5"
                                    alt="Profile"
                                    className="card-img rounded-circle" />
                                <div
                                    className="text-center cursor-pointer"
                                    data-bs-toggle="modal"
                                    data-bs-target="#imagemodal">
                                    <i className="font-md text-warning bx bx-camera me-2"></i>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="card-body p-0 position-relative">
                                        <figure className="avatar card-position user-pic position-absolute z-index-1 bg-white shadow rounded-3">
                                            <div className="d-flex py-1 py-2 align-item-center justify-content-center">
                                                <div className="ps-1">
                                                    <div className="px-4 d-flex justify-content-center align-item-center">
                                                        <p className="fw-500 text-black font-sm pt-2">
                                                            Khushbu Verma
                                                            <span className="fw-500 font-xssss d-block -pt-4">
                                                                vermakhushbu723@gmail.com
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </figure>
                                    </div> */}
                    </div>
                </div>
            </div>
            <div className="col-md-12 dc referal-box middle-sidebar-left mb-4 border border-dotted">
                <i className="bx bx-copy cursor-pointer" style={{ fontSize: "32px" }}></i>
                <h5 style={{ fontSize: "20px" }}>
                    REFERAL Link :{" "}
                    <span className="cursor-pointer text-success">
                        https://lzycrazy.com/register/1904
                    </span>
                </h5>
            </div>
            <div className="col-md-12 dc referal-box middle-sidebar-left mb-4 d-flex justify-content-between">
                <div className="col-md-6">
                    <h5 className="text-success">Referal Count : 7</h5>
                </div>
                <div className="col-md-6">
                    <h5 className="text-warning">Pending Referal : 76</h5>
                </div>
            </div>
        </div>
    );
};

export default Profile;
