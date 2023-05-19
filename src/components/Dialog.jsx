import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element to manage accessibility

const Dialog = ({ isOpen, onClose, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Dialog">
      <div>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </Modal>
  );
};

export default Dialog;
