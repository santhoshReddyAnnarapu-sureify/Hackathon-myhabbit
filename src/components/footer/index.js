import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import config from '../../config/index';
import Message from '../contactUs';
import Call from '../call';
import phone from '../../assets/Images/phone.svg';
import email from '../../assets/Images/email.svg';
import help from '../../assets/Images/help.svg';


import {
  DisclaimerText,
  FooterContainer,
  FooterMobileContainer,
  FooterLeft,
  FooterLeftHeader,
  FooterContact,
  FooterContactLink,
  FooterLinks,
  FooterLinksContainer,
  FooterSearch,
  FooterNavigation,
  ImgIcon,
  FooterMain,
  FooterContactLinksContainer,
  FooterRight,
} from './styles';

function Footer() {
  // const [activeLink, setActiveLink] = useState(' ');
  const [show, setShow] = useState(false);
  const [showCall, setShowCall] = useState(false);
  const currentRoute = useLocation().pathname;
  

  const close = () => {
    setShow(false);
  };

  const closeCall = () => {
    setShowCall(false);
  };



  const HideValues = ['Policies', 'Make a Payment', 'Search', 'Document Download Center', 'Annual Statement', 'Dashboard']

  return (
    <FooterMain>
      {/* Works only when screen width less than 580px */}
      <FooterMobileContainer>
        <FooterSearch type="text" placeholder="Search" />
        <div style={{ width: '100%' }}>
          <FooterContactLink href={`tel:${config.footer.phoneNumber}`}>
            <ImgIcon src={phone} alt="phone" /> {config.footer.phoneNumber}
          </FooterContactLink>
          <FooterContactLink>
            <ImgIcon src={help} alt="help" />{' '}
            <Link
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
              to="/help-topics"
            >
              Help Topics
            </Link>
          </FooterContactLink>
          <FooterContactLink
            onClick={() => {
              setShow(true);
            }}
          >
            <ImgIcon src={email} alt="email" />
            Contact Us
          </FooterContactLink>
        </div>
        <DisclaimerText>
          <p>{config.footer.disclaimerDesc}</p>
          <p>{config.footer.disclaimerSubText}</p>
        </DisclaimerText>
      </FooterMobileContainer>
      {/* Displaying this container when screen width more than 580px */}
      <FooterContainer>
        <FooterLeft>
          <FooterContact>
            <FooterLeftHeader>Contact Us</FooterLeftHeader>
            <FooterContactLinksContainer>
              <FooterContactLink
                onClick={() => {
                  setShowCall(true);
                }}
              >
                <ImgIcon src={phone} alt="phone" /> {config.footer.phoneNumber}
              </FooterContactLink>
              
              <FooterContactLink
                onClick={() => {
                  
                }}
              >
                <ImgIcon src={help} alt="help" /> Help Topics
              </FooterContactLink>
              <FooterContactLink
                onClick={() => {
                  setShow(true);
                }}
              >
                <ImgIcon src={email} alt="email" />
                Contact Us
              </FooterContactLink>
            </FooterContactLinksContainer>
          </FooterContact>
          <FooterNavigation>
            <FooterLeftHeader>Navigation</FooterLeftHeader>
            <FooterLinksContainer>
            {
              currentRoute.includes('e-delivery') ?
              // eslint-disable-next-line react/no-array-index-key
              <FooterLinks to='/dashboard'>
                  Dashboard
              </FooterLinks>
              :
              <FooterLinks to='/e-delivery'>
                  Dashboard
              </FooterLinks>
            }
              {config.footer.footerLinks.map((link, index) => (
                HideValues.includes(link.linkText)?'':
                // eslint-disable-next-line react/no-array-index-key
                <FooterLinks key={index} to={link.linkUrl}>
                  {link.linkText}
                </FooterLinks>
              ))}
            </FooterLinksContainer>
          </FooterNavigation>
        </FooterLeft>
        
          <FooterRight>
          
            <div>
              <p>{config.footer.disclaimerDesc}</p>
              <p>{config.footer.disclaimerSubText}</p>
            </div>
          </FooterRight>
          
        
      </FooterContainer>
      {show ? <Message close={close} /> : null}
      {showCall ? <Call closeCall={closeCall} /> : null}
      
    </FooterMain>
  );
}

export default Footer;