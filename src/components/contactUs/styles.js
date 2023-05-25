import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdRadioButtonChecked } from 'react-icons/md';
import { GiCircle } from 'react-icons/gi';

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-bottom: 20px;
  @media screen and (max-width: 761px) {
    padding-bottom: 4.5px;
  }
`;
const Radio = styled.div`
  @media screen and (max-width: 761px) {
    padding-top: 9px;
    padding-bottom: 9px;
    display: flex;
    align-items: flex-start;
  }
  @media screen and (min-width: 761px) {
    display: flex;
    padding: 10px;
  }
`;
const IconWrapper = styled(Link)`
  text-decoration:none;
  display: flex;
  :hover {
    cursor: pointer;
  }
`;

const ButtonWrapper = styled(Link)`
  text-decoration:none;
  
`;

const Icon = styled.div`
  display: flex;
  padding-right: 12px;
`;

const IssueType = styled.div`
  color: rgb(69, 69, 69);
  font-size: 14px;
  font-weight: normal;
  padding-top: 5px;
  @media screen and (max-width: 768px) {
    padding-top: 4px;
  }
  @media screen and (max-width: 200px) {
    font-size: 0.44rem;
  }
`;

const RadioChecked = styled(MdRadioButtonChecked)`
  display: ${({ radioselected, id }) =>
    radioselected !== null && radioselected.id === id ? 'flex' : 'none'};
  @media screen and (max-width: 761px) {
    height: 22px;
    width: 22px;
  }
`;
const RadioUnchecked = styled(GiCircle)`
  ${({ radioselected, id }) =>
    radioselected !== null && radioselected.id === id && 'display:none;'};
  @media screen and (max-width: 761px) {
    height: 22px;
    width: 22px;
  }
`;

const ModalText = styled.div`

color: rgb(45, 45, 45);
font-size: 16px;
font-weight: normal;

`;
// const Submit = styled(Link)`
//   ${({active}) => active ? ' background: rgb(41, 101, 204);' : 'border : 1px solid #c7c7c7' } ;
//   display: block;
//   text-decoration: none;
//   padding : 16px;
//   width : 90%;
//   height : 20px;
//   text-align: center;
//   border-radius: 6px;
//   ${({active}) => active ? ' color: white' : 'color : black' } ;
// `;
export {
  Radio,
  RadioWrapper,
  RadioChecked,
  RadioUnchecked,
  IconWrapper,
  Icon,
  IssueType,
  ModalText,
  ButtonWrapper,
};
