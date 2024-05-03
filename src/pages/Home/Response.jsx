import React from 'react';

function Response() {
  return (
    <div className="middle-sidebar-bottom" style={{ width: '100%', maxWidth: '75vw', margin: '0 auto', marginTop:10}}>
      <div className="middle-sidebar-left pe-0 pt-lg-4" style={{ height: '100%', width: '100%' }}> 
        <div className="row" style={{ height: '100%', width: '100%' }}>
          <div className="col-lg-12 mb-3">
            <div className="table-content table-responsive bg-white p-2 rounded-3" style={{ height: '100%', width: '100%' }}> 
              <table className="table text-center">
                <thead className="bg-greyblue rounded-3">
                  <tr>
                    <th className="border-0 p-4">All Response <h3 className="fw-700">0</h3></th>
                    <th className="border-0 p-4"></th>
                    <th className="border-0 p-4"></th>
                    {/* <th className="border-0 p-4">
                      <button href="#" disabled="" className="update-cart bg-dark float-right text-white fw-600 text-uppercase font-xssss border-dark border rounded-3 border-size-md d-inline-block w175 p-3 text-center ls-3">All Download</button>
                    </th>
                    <th className="border-0 p-4">
                      <button href="#" disabled="" className="update-cart bg-dark float-right text-white fw-600 text-uppercase font-xssss border-dark border rounded-3 border-size-md d-inline-block w175 p-3 text-center ls-3">Total Listing</button>
                    </th> */}
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Response;
