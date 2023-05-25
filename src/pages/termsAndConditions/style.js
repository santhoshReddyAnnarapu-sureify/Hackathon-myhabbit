import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Divider = styled.div`
  background: rgb(226, 226, 226);
  border-radius: 0px;
  height: 1px;
`;
export const Wrapper = styled.div`
  padding: 25px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 10px;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
export const LinksContainer = styled.div`
  font-size: 14px;
  flex: 7;
  padding: 20px 6px;
  color: rgb(69, 69, 69);
  @media only screen and (max-width: 922px) {
    padding: 15px 17px;
  }
`;

export const ContentContainer = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  flex: 22;
  display: flex;
  flex-direction: column;
  /* padding: 15px 10px; */
`;
export const Card = styled.div`
  display: flex;
  padding: 30px 20px 30px 20px;
`;

export const CardLeft = styled.div`
  flex: 23;
`;
export const CardRight = styled.div`
  padding: 0px;
  flex: 18;
`;

export const Heading = styled.p`
  width: 442px;
  height: 22px;
  color: rgb(69, 69, 69);
  font-size: 18px;
  font-family: ProximaNova-Semibold;
  font-weight: 600;
  letter-spacing: 0px;
`;

export const ShortVersionHeading = styled.p`
  color: rgb(118, 118, 118);
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
`;

export const ShortVersionDescription = styled.p`
  color: rgb(69, 69, 69);
  font-size: 24px;
  /* font-family: ProximaNova-Light; */
  /* font-weight: 300; */
  letter-spacing: 0px;
  /* line-height: 32px; */
`;
export const CategoryName = styled.p`
  color: rgb(69, 69, 69);
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 0px;
  margin-bottom: 0.5px;
  line-height: 32px;
`;

export const CategoryUpdatedTime = styled.p`
  color: rgb(69, 69, 69);
  font-size: 12px;
  font-weight: normal;
`;
export const Description = styled.ul`
  /* width: 460px; */
  /* height: 411px; */
  color: rgb(69, 69, 69);
  font-size: 16px;
  line-height: 22.5px;
  padding: 1% 10%;
`;
export const BackSection = styled.div`
  border-radius: 6px;
  background: rgb(255, 255, 255);
  display: flex;
  width: 100%;
`;
export const BackButton = styled(Link)`
  background: rgb(255, 255, 255);
  color: rgb(58, 114, 211);
  cursor: pointer;
  padding: 15px 20px;
  align-items: center;
  font-size: 18px;
  border: none;
  outline: none;
  font-weight: 600;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
