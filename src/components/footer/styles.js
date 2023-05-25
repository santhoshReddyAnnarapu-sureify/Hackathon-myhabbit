import styled from 'styled-components';
import { Link } from 'react-router-dom';
import layoutSizes from './layouts';

const FooterMain = styled.div`
  background-color: #2864CC;
  color: #FFFFFF;
  width: 100%;
  height: auto;
  padding: 25px 0px;
  @media (max-width: ${layoutSizes.laptopM}) {
    height: auto;
  }
`;

const FooterMobileContainer = styled.div`
  height: auto;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 580px) {
    display: none;
  }
`;

const DisclaimerText = styled.div`
  
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0px;
  line-height: 20px;
  text-align: right;

  @media (max-width: 767px) {
    padding: 20px;
    text-align: center;
  }
`;

const FooterContainer = styled.div`
  height: auto;
  max-width: 1240px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  
  padding: 0px 30px;
  flex-direction: row;
  padding: 25px;

  @media (min-width: 580px) and (max-width: 1280px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 580px) {
    display: none;
  }
`;

const ImgIcon = styled.img`
  margin-right: 10px;
  
`;

const FooterLeft = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;

  @media (min-width: 580px) and (max-width: 980px) {
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: 980px) and (max-width: 1280px) {
    flex-direction: row;
    width: 100%;
  }
`;

const FooterContact = styled.div`
  width: 20%;
  margin-right: 20px;

  @media (min-width: 580px) and (max-width: 1024px) {
    margin-bottom: 25px;
    width: 40%;
  }

  // @media (max-width: ${layoutSizes.mobile}) {
  //   width: 100%;
  //   margin: 30px 0;
  // }
`;

const FooterContactLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterContactLink = styled.a`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  text-decoration: none;
 
  font-size: 16px;
  font-weight: normal;
  height: 20px;
  letter-spacing: 0px;
  line-height: 20px;
  padding: 8px 0px;

  & > svg {
    margin-right: 10px;
  }
  &:hover {
    text-decoration: underline;
   
  }
  @media (max-width: 579px) {
    border-bottom: 2px solid rgb(36, 55, 74);
    padding: 16px 0;
  }
`;

const FooterNavigation = styled.div`
  width: 75%;
  @media (min-width: 580px) and (max-width: 1280px) {
    width: 100%;
  }
`;

const FooterLeftHeader = styled.div`
  padding-bottom: 5px;
  border-bottom: 1px solid white;
  margin-bottom: 5px;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap; */
  // @media (min-width: 768) and (max-width: ${layoutSizes.laptop}) {
  //   width: 80%;
  // }
`;

const FooterLinks = styled(Link)`
  color:white;
  text-decoration: none;
  flex: 0 0 33%;
  margin: 5px 0;
  

  &:hover {
    text-decoration: underline;
    
  }
`;

const FooterSearch = styled.input`
  background: transparent;
  border-radius: 25px;
  border: 1px solid white;
  margin-bottom: 15px;
  width: 85%;
  background: transparent;
  border-radius: 25px;
  padding: 15px 20px;
  color: white;
  outline: none;
  margin-bottom: 15px;
  &::placeholder {
    color: white;
  }
  // @media (max-width: 760px) {
  //   width: 280px;
  // }
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;

  @media (min-width: 580px) and (max-width: 1280px) {
    align-items: flex-start;
    text-align: left;
    padding: 25px 0;
  }

  // @media (max-width: 1280px) {
  //   padding: 25px 0;
  //   align-items: flex-start;
  //   text-align: center;
  // }

  // @media (max-width: 579px) {
  //   text-align: center;
  //   color: rgb(255, 255, 255);
  //   font-size: 16px;
  //   font-weight: normal;
  //   height: 40px;
  //   letter-spacing: 0px;
  //   line-height: 20px;
  // }
`;

export {
  FooterContainer,
  FooterMobileContainer,
  FooterLeft,
  FooterLeftHeader,
  FooterContact,
  FooterContactLink,
  FooterLinks,
  FooterLinksContainer,
  FooterSearch,
  FooterRight,
  FooterNavigation,
  ImgIcon,
  FooterContactLinksContainer,
  FooterMain,
  DisclaimerText,
};