import React from 'react';
import AppRoutes from './router/AppRoutes';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// import store from './components/dataStore/configureRedux';
// import { Provider } from "react-redux";
// import store from "./redux/store"

function App() {
  return (
    <>
    {/* <Provider store={store}> */}
      <AppRoutes />
     {/* </Provider> */}
    </>
  );
}

export default App;
