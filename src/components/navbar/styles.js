import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackgroundColor= 'rgb(255, 255, 255)'
const FontColor='rgb(0, 0, 0)'

const DropDownLink = styled.a`
  padding: 1rem 1rem;
  color: ${FontColor};
  width: 100px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${FontColor};
  // background-color: rgb(59, 83, 106);
  transition: all 0.1s ease-in;
  font-size: 1.1rem;
  &:hover {
    color: ${FontColor};
    flex-direction: column;
    background-color:${BackgroundColor};
  }
`;

const MenuLink = styled(Link)`
  /* margin: 0rem 1rem; */
  padding: 0rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${FontColor};
  width: 100%;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${FontColor};
  font-size: 18px;
  &:hover {
    background: ${BackgroundColor};
    color: rgb(59, 83, 105);
    /* font-family: ProximaNova-Bold; */
    font-weight: bold;
  }
  ${({ active, name }) =>
    active === name && "border-bottom: 2px solid #000000; font-weight: bold;"}
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1240px;
  margin: auto;
  align-items: center;
  height: 100%;
  padding: 0px 25px;
  position: relative;
`;

const NavContainer = styled.div`
  height: 8vh;
  min-height: 80px;
  color: ${FontColor};
  background:  ${BackgroundColor};
`;

const LogoContainer = styled(Link)`
  width: 195px;
  color:${FontColor};
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  margin-left:85px;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    display: flex;
    margin-left:10px;
  }
`;

const Menu = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:${FontColor};
  text-align: center;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
`;

const MobileNavigation = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  background: rgb(59, 83, 105);
  border-radius: 0px;
  top: 82px;
`;

const MobileLink = styled(Link)`
  text-decoration: none;
`;

const MobileListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  height: 60px;
  padding: 0px 25px;
  text-decoration: none;
`;

const MobileLinkLabel = styled.h3`
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: ${({ active }) => (active ? '600;' : 'normal;')};
  height: 24px;
  letter-spacing: 0px;
  line-height: 24px;
  padding-left: 16px;
  margin: auto 0px;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${BackgroundColor};
  text-align: center;
  width: 240px;
  border-radius: 6px;
  border: 1px solid rgb(199, 199, 199);
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 25px;
  top: 65px;
  font-family: ProximaNova-Semibold;
`;

const DropDown = styled.div`
  position: relative;
  text-align: center;
  padding: 10px;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: row;
  &:hover ${DropDownContent} {
    text-align: center;
    display: block;
  }
`;

const Anchor = styled(Link)`
  color: rgb(41, 101, 204);
  padding: 18px 18px;
  font-size: 16px;
  text-align: left;
  text-decoration: none;
  display: block;
  &:hover {
    text-align: left;
    background-color: #ddd;
  }
`;

const MenuImage = styled.div`
height: auto;
weight: auto;
alignItems:center;
margin:auto 20px auto ;
`;

export {
  Hamburger,
  Menu,
  LogoContainer,
  NavContainer,
  Nav,
  MenuLink,
  MobileListItem,
  MobileNavigation,
  MobileLink,
  MobileLinkLabel,
  DropDown,
  DropDownContent,
  Anchor,
  DropDownLink,
  MenuImage
};
