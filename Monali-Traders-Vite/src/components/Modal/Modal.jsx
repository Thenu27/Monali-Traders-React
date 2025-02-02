import React, { useContext, useState } from 'react';
import './Modal.css';
import { ModalContext } from '../../context/Modal.context';
import ArielBundleImage from '../../assets/Ariel Bundle Photo-min.jpg';
import whatsappIcon from '../../assets/whatsapp-icon.png';
import closeIcon from '../../assets/Close-min.jpg';

const Modal = () => {
const {openModal,showModal,setShowModal,closeModal} = useContext(ModalContext);


  return (
    <div className='modal-section'>

      {/* Modal */}
      <div className={`modal-container ${showModal ? 'show' : ''}`}>
         <div className="modal-content-container">
          <div className='modal-content'>

 

              <div className='modal-product-image-container'>
                 <img src={ArielBundleImage} alt='modal' className='modal-product-image' />
              </div>
          
          <div className='modal-product-details-container'>

          <div className='modal-product-title-container'>
          <h1 className='modal-product-title'>Product Title is Shown here</h1>
          </div>
          <div className='modal-product-description-container'>
            <p className='modal-product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis porta erat.
               Integer mollis eleifend dolor. Mauris ornare nibh quis elit porta, vitae pharetra ex pharetra ultricies at nulla nec feugiat.
                Aenean vestibulum, justo eget egestas dapibus, risus massa aliquet mauris, ac gravida massa nibh eget ligula. Interdum et 
                malesuada fames ac ante ipsum primis in faucibus. Nullam sed malesuada lorem.. 
              </p>
          </div>

            <div className='modal-contact-container'>
              <div className='modal-contact-inner-container'>
                <button className='modal-contact'>Call for more details</button>
                <img className='modal-contact-icon' alt='whatsapp-icon' src={whatsappIcon}/>
              </div>

              <div className='modal-button-container'>
                <img src={closeIcon}  className="modal-button" onClick={closeModal}/>

              </div>
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;