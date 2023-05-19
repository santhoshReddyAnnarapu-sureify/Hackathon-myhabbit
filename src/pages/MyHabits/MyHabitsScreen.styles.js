import { makeStyles } from '@material-ui/core';
import styled from "styled-components";
import MediaPresets from '../../constants/MediaPresets'

export const MyHabitScreenLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100vw;
  max-height: 100vh;
  overflow-y: auto;
  width: 780px;
  min-height: 580px;
  background-color: red;
  display: grid;
  justify-content: stretch;
  align-content: stretch;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: min-content min-content min-content min-content auto min-content;
  grid-template-areas:
    "promoSection promoSection imageSection imageSection"
    "headerSection headerSection imageSection imageSection"
    "bodySection bodySection imageSection imageSection"
    "lowerBodySection lowerBodySection imageSection imageSection"
    "lowerBodySection lowerBodySection imageSection imageSection"
    "progressSection progressSection imageSection imageSection";


  @media (max-width: ${MediaPresets.mobile}) {
    width: 100vw;
    max-width: 360px;
    height: auto;
    min-height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content min-content auto min-content min-content;
    justify-items: stretch;
    grid-template-areas:
      "headerSection"
      "bodySection"
      "imageSection"
      "lowerBodySection"
      "progressSection"
      "buttonsSection";
  }
`;