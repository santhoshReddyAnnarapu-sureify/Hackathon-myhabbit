import { React, useState, useEffect } from 'react';
import ReactModal from "react-modal";
import { Button, TextField } from '@mui/material';
import { IconContext } from 'react-icons/lib';
// import { AiFillRightCircle } from 'react-icons/ai';
import {
  RadioWrapper,
  Radio,
  RadioChecked,
  RadioUnchecked,
  IconWrapper,
  IssueType,
  Icon,
  ModalText,
// ButtonWrapper
} from './styles';

const Message = ({ close }) => {
  const Issues = [
    {
      id: 1,
      type: 'Technical Issue',
      label: 'Technical Issue',
    },
    {
      id: 2,
      type: 'Policy Question',
      label: 'Policy Question',
    },
    {
      id: 3,
      type: 'General Feedback',
      label: 'General Feedback',
    },
  ];

  const [radioselected, setRadio] = useState('');

  const [text, setText] = useState('');

  const [showModal, setShowModal] = useState(true);

  const [showMessage, setShowMessage] = useState(false);

  const [disable, setDisable] = useState(true);

  const [width, setWidth] = useState('M');

  const [disableText, setDisableText] = useState(true);

  const updateWidth = () => {
    if (window.innerWidth <= 768) {
      setWidth('XL');
    } else {
      setWidth('M');
    }
    //  console.log(width)
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  },[width]);

  const handleClick = () => {
    const test = text.trim();
    if(test.length > 0 && test.length <=150 &&  test !== ' ' &&  radioselected!==''){
       setShowModal(false);
      setShowMessage(true);
    }
   
  };

  const handleCloseModal = () => {
    console.log(text);
    close();
    setShowModal(false);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
    close();
  };

  

  return (
    <>
      {showModal ? (
        <ReactModal
          width={window.innerWidth > 768 ? 'M' : 'L'}
          disableOverlayClick
          height='auto'
          margin='3% auto'
          border="1px solid rgb(255, 255, 255) "
          overlayBgColor="rgba(0,0,0,0.25)"
          modalHeader="How can we help you?"
          handleClose={() => handleCloseModal()}
          modalBody={
            <>
              <RadioWrapper>
                {Issues.map((issue) => (
                  <Radio>
                   
                    <IconWrapper
                      onClick={() => {
                        setRadio(issue);
                        setDisableText(false);
                        const test=text.trim();
                       if (
                          text.length > 0 &&
                          text.length <= 150 &&
                          width && test.length !==0
                        ) {
                          setDisable(false);
                        } else setDisable(true);
                      }}
                    >
                  
                       <input type='radio' name='contactUs' style={{ WebkitAppearance: 'none',position: 'absolute'}} />
                      <Icon>
                        <IconContext.Provider
                          value={{ color: '#999999', size: '22px' }}
                        >
                          <RadioUnchecked
                            radioselected={radioselected}
                            id={issue.id}
                          />
                        </IconContext.Provider>
                        <IconContext.Provider
                          value={{ color: '#2965CC', size: '22px' }}
                        >
                          <RadioChecked
                            radioselected={radioselected}
                            id={issue.id}
                          />
                        </IconContext.Provider>
                      </Icon>
                      <IssueType> {issue.label} </IssueType>
                    </IconWrapper>
                  </Radio>
                ))}
              </RadioWrapper>
              <TextField
                type="text_area"
                width="100%"
                
                maxLength={{
                  error_message: 'Please enter 150 or less characters.',
                  value: '150',
                }}
                id="text"
                disabled={disableText}
                onChange={(e) => {
                  //  console.log(e, G);
                  setText(e);
                  console.log(radioselected.id);
                  const test = e.trim();
                  if (e.length > 0 && e.length <= 150 && test.length !== 0 ) {
                    if (
                      radioselected.id === 1 ||
                      radioselected.id === 2 ||
                      radioselected.id === 3
                    )
                      setDisable(false);
                    else setDisable(true);
                  } else setDisable(true);
                  //  console.log(text);
                }}
                placeholder="holder"
                labelText="Please explain your issue or question..."
                themeConfiguration={{
                  border: '1px solid rgb(199, 199, 199)',
                  borderRadius: '4px',
                  resize: 'none',
                }}
              />
            </>
          }
          modalFooter={
            // <ButtonWrapper  onClick={handleClick}>
              <Button
                shape="rectangle"
                label="SUBMIT"
                type="filled"
                handleButtonClick={handleClick}
                width="100%"
                disabled={disable}
                color="blue"
                alignment="center"
                isLoading={false}
                themeConfiguration={{
                  selectedBgColor: '#2965cc',
                  bgColor: '#ffffff',
                  borderRadius: '6px',
                  border: '1px white',
                }}
              />
            // </ButtonWrapper>
          }
        />
      ) : null}
      {showMessage ? (
        <ReactModal
          disableOverlayClick
          width={window.innerWidth >= 768 ? '420px' :'L'}
          alignContent="center"
          height="auto"
          border="1px solid rgb(255, 255, 255) "
          overlayBgColor="rgba(0,0,0,0.25)"
          modalHeader="Message Sent"
          handleClose={() => handleCloseMessage()}
          modalBody={
            <ModalText>
              <p>
                We&apos;ll contact you as soon as possible to help solve your
                issue.
              </p>
            </ModalText>
          }
        />
      ) : null}
    </>
  );
};
export default Message;
