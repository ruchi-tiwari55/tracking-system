import React from 'react';
import AppRoutes from './router/AppRoutes';
import { ModalProvider } from './pages/Home/postAddForms/ModalContext';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// import store from './components/dataStore/configureRedux';
// import { Provider } from "react-redux";
// import store from "./redux/store"

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <ModalProvider>
        <AppRoutes />
      </ModalProvider>
      {/* </Provider> */}
    </>
  );
}

export default App;
