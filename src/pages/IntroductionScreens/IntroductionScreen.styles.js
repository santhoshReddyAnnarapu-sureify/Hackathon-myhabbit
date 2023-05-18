import styled from 'styled-components';


export const RequestHabitsWrapper = styled.div`
  font-family: 'Myriad Pro';
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(59, 83, 105, 0.14),
    0px 1px 3px rgba(59, 83, 105, 0.12);
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const RequestHeaderContent = styled.div`
  margin-bottom: 32px;
`;

export const MainHeading = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  display: block;
`;

export const SubHeading = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #767676;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  display: block;
`;

export const RequestBodyContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
