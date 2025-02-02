import { useState} from "react";
import { createContext } from "react";

export const ModalContext = createContext({
    showModal: null,
    setShowModal:()=>{}, // State to manage modal visibility
    openModal: () => {}, // Function to open the modal
    closeModal: () => {}, // Function to close the modal
}); // Create a context object

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility

      // Open modal handler
  const openModal = () => {
    setShowModal(true);
  };

  // Close modal handler
  const closeModal = () => {
    setShowModal(false);
  };
    return (
        <ModalContext.Provider value={{
            showModal,
            openModal,
            closeModal,
            setShowModal
        }}>
            {children}
        </ModalContext.Provider>
    );
}