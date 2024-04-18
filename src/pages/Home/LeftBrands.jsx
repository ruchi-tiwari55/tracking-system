import React from 'react';

const LeftBrands = () => {
    return (
        <>
            <div>
                <nav className={`navigation scroll-bar hov-none ${openleftnav ? 'nav-active' : ''}`}>
                    <div className="container ps-0 pe-0">
                        <div className="nav-content">
                            <div className="nav-wrap bg-transparent-card pb-1 mb-2 pt-3">
                                <div className="nav-caption fw-600 font-xssss text-grey-500 ps-2 font-xsss align-items-center ml-10 d-flex justify-content-md-between">
                                    <div>
                                        <img src={geticonimage(this.selectedcategory)} width="50" height="50" alt="" className="img-size" />
                                        <span className="pe-2 ml-10 left-nav-text left-nav-text">
                                            <router-link to="#">{this.selectedcategory?.name}</router-link>
                                        </span>
                                    </div>
                                    <i className='bx bx-arrow-back cursor-pointer' style={{ fontSize: '25px' }} onClick={() => $router.go(-2)}></i>
                                </div>
                                <div className="mb-4">
                                    <div className="search-form-2 ms-auto">
                                        <i className='bx bx-search-alt-2'></i>
                                        <input
                                            type="text"
                                            value={search}
                                            className="form-control text-grey--500 mb-0 bg-greylight theme-dark-bg border-0"
                                            placeholder="Search"
                                            onChange={refresh}
                                        />
                                    </div>
                                </div>
                                {subcat.map(item => (
                                    <ul className="mb-1 top-content label-custom" key={item.id}>
                                        <li onClick={() => redirectProducts(item)} onChange={() => redirectProducts(item)}>
                                            <a href="#" className="nav-content-bttn open-font">
                                                <img src="" className="me-4" />
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default LeftBrands;
