import React from 'react';

const Navbar = () => {
    return (
        <div className="d-flex justify-content-between border border-danger nav-header shadow-xs border-0">
            <div className="nav-top">
                <a href="/dashboard" className="">
                    <img src="https://lzycrazy.com/assets/logo.86bdc6c8.png" className="d-lg-block" alt="image" style={{ width: "100px" }} />
                </a>
                <button className="nav-menu me-0 ms-2"></button>
            </div>
            <div className="dc main-menu d-flex" style={{ gap: "25px" }}>
                <div className="header-menu">
                    <a href="/dashboard" className="p-2 text-center menu-icon center-menu-icon">
                        <i className="fas fa-home" style={{ color: "rgb(0, 0, 0)" }}></i>
                    </a>
                        <a href="/dashboard" className="main-menu primary-color">Home</a>
                </div>
                <div className="header-menu">
<<<<<<< HEAD
                    <a href="/market-Place/marketSidebar" className="p-2 text-center menu-icon center-menu-icon">
                        <i className="fas fa-store" style={{ color: "rgb(0, 0, 0)" }}></i>
                    </a>
                    <a href="/market-Place/marketSidebar" className="main-menu primary-color">Market Place</a>
=======
                    <a href="/market-Place" className="p-2 text-center menu-icon center-menu-icon">
                        <i className="fas fa-store" style={{ color: "rgb(0, 0, 0)" }}></i>
                    </a>
                    <a href="/market-Place" className="main-menu primary-color">Market Place</a>
>>>>>>> b56c7e646df87db36fb632894409de285ecec234
                </div>
                <div className="header-menu">
                    <a href="/my-ads" className="p-2 text-center menu-icon center-menu-icon">
                        <i className="fab fa-buysellads" style={{ color: "rgb(0, 0, 0)" }}></i>
                    </a>
                    <a href="/my-ads" className="main-menu primary-color">Post Ads</a>
                </div>
            </div>
            <div className="dc justify-content-md-between main-menu d-flex" style={{ gap: "15px" }}>
                <div className="header-menu">
                    <a href="/my-ads-response" className="router-link-active router-link-exact-active p-2 text-center menu-icon center-menu-icon">
                        <span className="dot-count bg-warning"></span>
                        <i className="bx bxs-message-dots"></i>
                    </a>
                    <a href="/my-ads-response" className="main-menu primary-color">Response</a>
                </div>
                <div className="header-menu dropdown-menu-icon">
                    <a aria-current="page" href="/home#" className="router-link-active router-link-exact-active router-link-active router-link-exact-active p-2 text-center menu-icon center-menu-icon">
                        <i className="bx bxs-cog header-icon"></i>
                    </a>
                    <a aria-current="page" href="/home#" className="router-link-active router-link-exact-active main-menu primary-color">Setting</a>
                    <div className="dropdown-menu-settings switchcolor-wrap">
                        <div>
                            <h4 className="fw-700 font-sm mb-1 px-3 shadow-messaage-box py-1">Arvind Bhandari</h4>
                            <div className="bg-transparent-card border-0 d-block mt-1 border-top pt-1 px-3">
                                <a href="#" className="d-flex align-items-center shadow-messaage-box p-1 px-2">
                                    <i className="text-white bx bx-log-out font-xs me-3 py-1"></i>
                                    <h4 className="fw-600 font-xsss mb-0 mt-0">
                                        <a href="/userpage" className="main-menu primary-color">Profile</a>
                                    </h4>
                                </a>
                            </div>
                            <div className="bg-transparent-card border-0 d-block mt-1 border-top pt-1 px-3">
                                <a href="#" className="d-flex align-items-center shadow-messaage-box p-1 px-2">
                                    <i className="text-white bx bx-log-out font-xs me-3 py-1"></i>
                                    <h4 className="fw-600 font-xsss mb-0 mt-0">Logout</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;








// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="d-flex justify-content-between border border-danger nav-header shadow-xs border-0">
//       <div className="nav-top">
//         <a href="/dashboard" className="">
//           <img
//             src="https://lzycrazy.com/assets/logo.86bdc6c8.png"
//             className="d-lg-block"
//             alt="image"
//             style={{ width: "100px" }}
//           />
//         </a>
//         <button className="nav-menu me-0 ms-2"></button>
//       </div>
//       <div className="dc main-menu d-flex" style={{ gap: "25px" }}>
//         <div className="header-menu">
//           <a
//             href="/dashboard"
//             className="p-2 text-center menu-icon center-menu-icon"
//           >
//             <i className="fas fa-home" style={{ color: "rgb(0, 0, 0)" }}></i>
//           </a>
//           <a href="/dashboard" className="main-menu primary-color">
//             Home
//           </a>
//         </div>
//         <div className="header-menu">
//           <a
//             href="/market-Place"
//             className="p-2 text-center menu-icon center-menu-icon"
//           >
//             <i className="fas fa-store" style={{ color: "rgb(0, 0, 0)" }}></i>
//           </a>
//           <a href="/market-Place" className="main-menu primary-color">
//             Market Place
//           </a>
//         </div>
//         <div className="header-menu">
//           <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" className="p-2 text-center menu-icon center-menu-icon">
//             <i
//               className="fab fa-buysellads"
//               style={{ color: "rgb(0, 0, 0)" }}
//             ></i>
//           </a>
//           <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" className="main-menu primary-color">
//             Post Ads
//           </a>
        

//           {/* <!-- ..............................................Modal Open...................................................... --> */}
//           <div
//             class="modal fade"
//             id="exampleModal"
//             tabindex="-1"
//             aria-labelledby="exampleModalLabel"
//             aria-hidden="true"
//           >
//             <div class="modal-dialog">
//               <div class="modal-content">
//                 <div class="modal-header">
//                   <h5 class="modal-title" id="exampleModalLabel">
//                     Modal title
//                   </h5>
//                   <button
//                     type="button"
//                     class="btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   ></button>
//                 </div>
//                 <div className="modal-body" style={{ color: 'black' }}>
//                     dhebkwjed
//                 </div>
//                 <div class="modal-footer">
//                   <button
//                     type="button"
//                     class="btn btn-secondary"
//                     data-bs-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                   <button type="button" class="btn btn-primary">
//                     Save changes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ..................................MODAL CLOSE............................. */}

          
//         </div>
//       </div>
//       <div
//         className="dc justify-content-md-between main-menu d-flex"
//         style={{ gap: "15px" }}
//       >
//         <div className="header-menu">
//           <a
//             href="/my-ads-response"
//             className="router-link-active router-link-exact-active p-2 text-center menu-icon center-menu-icon"
//           >
//             <span className="dot-count bg-warning"></span>
//             <i className="bx bxs-message-dots"></i>
//           </a>
//           <a href="/my-ads-response" className="main-menu primary-color">
//             Response
//           </a>
//         </div>
//         <div className="header-menu dropdown-menu-icon">
//           <a
//             aria-current="page"
//             href="/home#"
//             className="router-link-active router-link-exact-active router-link-active router-link-exact-active p-2 text-center menu-icon center-menu-icon"
//           >
//             <i className="bx bxs-cog header-icon"></i>
//           </a>
//           <a
//             aria-current="page"
//             href="/home#"
//             className="router-link-active router-link-exact-active main-menu primary-color"
//           >
//             Setting
//           </a>
//           <div className="dropdown-menu-settings switchcolor-wrap">
//             <div>
//               <h4 className="fw-700 font-sm mb-1 px-3 shadow-messaage-box py-1">
//                 Arvind Bhandari
//               </h4>
//               <div className="bg-transparent-card border-0 d-block mt-1 border-top pt-1 px-3">
//                 <a
//                   href="#"
//                   className="d-flex align-items-center shadow-messaage-box p-1 px-2"
//                 >
//                   <i className="text-white bx bx-log-out font-xs me-3 py-1"></i>
//                   <h4 className="fw-600 font-xsss mb-0 mt-0">
//                     <a href="/userpage" className="main-menu primary-color">
//                       Profile
//                     </a>
//                   </h4>
//                 </a>
//               </div>
//               <div className="bg-transparent-card border-0 d-block mt-1 border-top pt-1 px-3">
//                 <a
//                   href="#"
//                   className="d-flex align-items-center shadow-messaage-box p-1 px-2"
//                 >
//                   <i className="text-white bx bx-log-out font-xs me-3 py-1"></i>
//                   <h4 className="fw-600 font-xsss mb-0 mt-0">Logout</h4>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
