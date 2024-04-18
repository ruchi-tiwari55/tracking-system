import React from 'react';
import { Link } from 'react-router-dom';

const HeaderSection = () => {
  return (
    <div>
      <div className="nav-header bg-white shadow-xs border-0" style={{ justifyContent: 'space-between' }}>
        <div className="nav-top">
          <Link to="/dashboard">
            <img src="../../../assets/images/mainhome/logo.png" className="d-lg-block" alt="image" style={{ width: '100px !important' }} />
          </Link>

          <div className="mob-menu ms-auto me-2 mob-menu-center header-menu">
            <Link to="/myads" className="text-center mx-3">
              <i className="fa fa-dropbox" style={{ fontSize: '24px' }}></i>
            </Link>
            <span>
              <Link to="/myads" className="main-menu primary-color">My Ads</Link>
            </span>
          </div>
          <div className="mob-menu me-2 mob-menu-center header-menu">
            <Link to="/myads" className="text-center mx-3 tooltip" data-bs-toggle="modal" data-bs-target="#sellmodal">
              <i className="fa fa-buysellads" style={{ fontSize: '24px' }}></i>
            </Link>
            <span>
              <Link to="" data-bs-toggle="modal" data-bs-target="#sellmodal" className="main-menu primary-color">Post Ads</Link>
            </span>
          </div>

          <button className="nav-menu me-0 ms-2"></button>
        </div>
        <div className="dc main-menu" style={{ gap: '25px' }}>
          <div className="header-menu">
            <Link to="/dashboard" className="p-2 text-center menu-icon center-menu-icon">
              <i className="fas fa-home" style={{ color: '#000' }}></i>
            </Link>
            <Link to="/dashboard" className="main-menu primary-color">Home</Link>
          </div>
          <div className="header-menu">
            <Link to="/market" className="p-2 text-center mx-3 menu-icon center-menu-icon tooltip">
              <i className="fas fa-store-alt" style={{ color: '#000' }}></i>
            </Link>
            <Link to="/market" className="main-menu primary-color">Market Place</Link>
          </div>
          <div className="header-menu">
            <a href="" className="p-2 text-center mx-3 menu-icon center-menu-icon tooltip" data-bs-toggle="modal" data-bs-target="#sellmodal">
              <i className="fa fa-buysellads" style={{ color: '#000' }}></i>
            </a>
            <Link to="" data-bs-toggle="modal" data-bs-target="#sellmodal" className="main-menu primary-color">Post Ads</Link>
          </div>
        </div>
        <div className="dc justify-content-md-between main-menu" style={{ gap: '15px' }}>
          <div className="header-menu">
            <Link to="/myadsresponse" className="router-link-active router-link-exact-active p-2 text-center menu-icon center-menu-icon">
              <span className="dot-count bg-warning"></span>
              <i className="bx bxs-message-dots"></i>
            </Link>
            <Link to="/myadsresponse" className="main-menu primary-color">Response</Link>
          </div>
          <div className="header-menu dropdown-menu-icon">
            <Link to="#" className="router-link-active router-link-exact-active p-2 text-center menu-icon center-menu-icon">
              <i className="bx bxs-cog bx-spin header-icon"></i>
            </Link>
            <Link to="#" className="main-menu primary-color">Setting</Link>
            <div className="dropdown-menu-settings switchcolor-wrap">
              <div>
                <h4 className="fw-700 font-sm mb-1 px-3 shadow-messaage-box py-1">John Doe</h4>
                <div className="bg-transparent-card border-0 d-block mt-1 border-top pt-1 px-3">
                  <Link to="/userpage" className="d-flex align-items-center shadow-messaage-box p-1 px-2">
                    <i className="text-white bx bx-log-out font-xs me-3 py-1"></i>
                    <h4 className="fw-600 font-xsss mb-0 mt-0">Profile</h4>
                  </Link>
                </div>
                <div className="bg-transparent-card border-0 d-block mt-1 border-top pt-1 px-3" onClick={() => logout()}>
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
      <div className="modal fade" id="sellmodal" tabIndex="-1" role="dialog" aria-labelledby="sellmodal" aria-hidden="true" style={{ background: 'rgb(217 217 217 / 72%)', paddingRight: '17px', overflow: 'scroll' }}>
        <div className="modal-dialog modal-lg modal-dialog-centered custom-width modal-dialog-scrollable" role="document">
          <div className="modal-content rounded-xxl">
            <div className="modal-header text-center d-block p-0 border-bottom-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ position: 'absolute', top: '8px', right: '10px', fontSize: '10px', zIndex: '99' }}></button>
            </div>
            <div className="modal-header">
              <h5 className="modal-title font-xs fw-600 text-center d-block mx-auto">POST YOUR ADD</h5>
            </div>
            <div className="modal-body">
              <div className="model-list">
                <div className="col-xs-12 d-flex">
                  <div className="tabbable tabs-left">
                    <h2 className="post-ad-head fw-600 ms-5">CHOOSE A CATEGORY</h2>
                    <ul className="nav nav-tabs cat-icon">
                      {/* Category items */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-footer border-0 shadow-lg bg-primary-gradiant">
        {/* Footer content */}
      </div>
    </div>
  );
};

export default HeaderSection;
