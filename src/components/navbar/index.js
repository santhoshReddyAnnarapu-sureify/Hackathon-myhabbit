import React, { useState } from "react";
import Avatar from "react-avatar";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import useDeviceDetect from "../../utils/deviceDetector";
import Logo from "../../assets/Images/Logo.png";
import AvatarLogo from "../../assets/Images/topnav/avatar.svg";
import Dashboard from "../../assets/Images/topnav/dashboard.svg";
import Learning from "../../assets/Images/topnav/learning.svg";
import Fitness from "../../assets/Images/topnav/fitness.svg";
import Settings from "../../assets/Images/topnav/help.svg";

import {
  Menu,
  LogoContainer,
  NavContainer,
  Nav,
  MenuLink,
  MobileNavigation,
  MobileLink,
  MobileListItem,
  MobileLinkLabel,
  DropDown,
  DropDownContent,
  Anchor,
  // DropDownLink,
  Hamburger,
  MenuImage,
} from "./styles";

const Navbar = () => {
  const { isMobile } = useDeviceDetect();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Policies");

  return (
    <NavContainer>
      <Nav>
        <LogoContainer to="/">
          <img src={Logo} alt="Life Co." width="110px" height="auto" />
        </LogoContainer>

        <>
          {isMobile && (
            <Hamburger>
              <IconContext.Provider
                value={{
                  size: "30px",
                }}
              >
                {isOpen ? (
                  <FaTimes onClick={() => setIsOpen(!isOpen)} />
                ) : (
                  <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} />
                )}
              </IconContext.Provider>
            </Hamburger>
          )}

          <Menu isOpen={isOpen}>
            <MenuLink
              active={active}
              name="MyHabits"
              onClick={() => {
                setActive("Habits");
              }}
              to="/habits"
            >
              My Habits
            </MenuLink>
            <DropDown>
              <Avatar
                name="Santhosh Reddy"
                size={45}
                round="40px"
                color="#2864cc"
                fgColor="#ffffff"
                textSizeRatio={-2}
              />
              <i
                className="fa fa-caret-down"
                style={{ marginLeft: "5px", color: "#2864cc" }}
              />
              <DropDownContent>
                <Anchor to="/">My Account</Anchor>
                <Anchor to="/">Dashboard</Anchor>
                <Anchor to="/habits">My Habits</Anchor>
                <Anchor to="/termsandconditions">Terms &amp; Conditions</Anchor>
                <Anchor to="/">Log out</Anchor>
              </DropDownContent>
            </DropDown>
          </Menu>
        </>
      </Nav>
      {isMobile && isOpen ? (
        <MobileNavigation>
          <MobileLink to="/">
            <MobileListItem>
              <MenuImage>
                <img src={AvatarLogo} alt="Dashboard" />
              </MenuImage>
              <MobileLinkLabel>My Account</MobileLinkLabel>
            </MobileListItem>
          </MobileLink>
          <MobileLink to="/">
            <MobileListItem>
              <MenuImage>
                <img src={Dashboard} alt="Dashboard" />
              </MenuImage>
              <MobileLinkLabel>Dashboard</MobileLinkLabel>
            </MobileListItem>
          </MobileLink>
          <MobileLink to="/habits">
            <MobileListItem>
              <MenuImage>
                <img src={Fitness} alt="My Habits" />
              </MenuImage>
              <MobileLinkLabel active>My Habits</MobileLinkLabel>
            </MobileListItem>
          </MobileLink>

          <MobileLink to="/termsandconditions">
            <MobileListItem>
              <MenuImage>
                <img src={Learning} alt="TermsAndConditions" />
              </MenuImage>
              <MobileLinkLabel>Terms &amp; Conditions</MobileLinkLabel>
            </MobileListItem>
          </MobileLink>
          <MobileLink to="/">
            <MobileListItem>
              <MenuImage>
                <img src={Settings} alt="Logout" />
              </MenuImage>
              <MobileLinkLabel>Log out</MobileLinkLabel>
            </MobileListItem>
          </MobileLink>
        </MobileNavigation>
      ) : null}
    </NavContainer>
  );
};
export default Navbar;
