import { React, useState, useEffect } from 'react';
import ReactModal from "react-modal";
import {
  Button,
  ModalText
} from './styles'

const Call = ({ closeCall }) => {
  const [show, setShow] = useState(true);
  const [width, setWidth] = useState('M');

  const handleClose = () => {
    setShow(false);
    closeCall();
  };

  const updateWidth = () => {
    console.log(width);
    if (window.innerWidth <= 768) {
      setWidth('M');
    } else {
      setWidth('S');
    }
    
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  },[width]);


  return (
    <>
      {show ? (
        <ReactModal
          width={window.innerWidth > 768 ? "400px" : "200px"}
          modalHeader="Contact Us"
          disableOverlayClick
          height="auto"
          border="none"
          overlayBgColor="rgba(0,0,0,0.25)"
          handleClose={() => handleClose()}
          modalBody={
            <ModalText>
              Please contact us by calling out toll-free help hotline during our
              operating hours of Monday-Friday from 8:00am to 6:00pm PST.
            </ModalText>
          }
          modalFooter={
            <>
              <Button href="tel:+1-800-796-3872" onClick={handleClose}>
                CALL 1-800-796-3872{" "}
              </Button>
            </>
          }
        />
      ) : null}
    </>
  );
};
export default Call;
