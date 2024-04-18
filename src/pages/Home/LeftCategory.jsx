import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const logout = () => {
    localStorage.removeItem('token');
    // Assuming you are using React Router for navigation
    // Replace 'register' with the appropriate route name
    // and adjust the navigation logic accordingly if needed
    // For example: history.push('/register');
  };

  return (
    <div>
      <nav className="navigation scroll-bar hov-none nav-active">
        <div className="container ps-0 pe-0">
          <div className="nav-content">
            <div className="nav-wrap bg-transparent-card pb-1 mb-2 mt-2">
              <ul className="mb-1 top-content">
                <li>
                  <Link to="/userpage" className="nav-content-bttn open-font">
                    <img
                      // src={getprofileimage()}
                      alt="user"
                      className="w35 me-3 circle-img"
                    />
                    <span>Name</span>
                  </Link>
                </li>
                <li>
                  <Link to="/market" className="nav-content-bttn open-font">
                    <img
                      src="../../../assets/images/marketplace.png"
                      width="50"
                      height="50"
                      className="me-2"
                    />
                    <span>Market</span>
                  </Link>
                </li>
                <li>
                  <Link to="/myads" className="nav-content-bttn open-font">
                    <img
                      src="../../../assets/images/myads.png"
                      className="me-2"
                      width="50"
                      height="50"
                    />
                    <span>My Ads</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myadsresponse"
                    className="nav-content-bttn open-font"
                  >
                    <img
                      src="../../../assets/images/adsresponse.png"
                      width="50"
                      height="50"
                      className="me-2"
                    />
                    <span>Response</span>
                  </Link>
                </li>
                <li>
                  <a href="#" className="nav-content-bttn open-font" onClick={logout}>
                    <img
                      src="../../../assets/images/logout.png"
                      width="30"
                      height="30"
                      className="me-4"
                    />
                    <span>Log out</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
