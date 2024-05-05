import React, { createContext, useState, useContext } from 'react';

// Create a new context
const ModalContext = createContext();

// Create a provider component to wrap your components with
export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open or close the modal
    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
            {children}
        </ModalContext.Provider>
    );
};

// Custom hook to consume the ModalContext
export const useModal = () => useContext(ModalContext);
