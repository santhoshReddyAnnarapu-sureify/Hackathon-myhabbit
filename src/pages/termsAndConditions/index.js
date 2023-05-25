import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
  CategoryName,
  CategoryUpdatedTime,
  MainContainer,
  LinksContainer,
  ContentContainer,
  Card,
  CardLeft,
  CardRight,
  Heading,
  ShortVersionDescription,
  ShortVersionHeading,
  Divider,
  Wrapper,
  BackSection,
  BackButton,
  Description
} from './style';
import { termsandconditions } from './content';
import LeftArrow from '../../assets/Images/leftArrow';

export default function TermsAndConditions() {
  return (
    <Wrapper>
      <BackSection>
        <BackButton to="/habits">
          <LeftArrow />
          Back
        </BackButton>
      </BackSection>
      <CategoryName>LifeCo Terms and Conditions</CategoryName>
      <CategoryUpdatedTime>UPDATED mm/dd/yyyy</CategoryUpdatedTime>
      <Divider />
      <MainContainer>
        <LinksContainer>
          <ol style={{ fontFamily: "ProximaNova-Semibold", padding: "0px" }}>
            {termsandconditions.cards.map((card, index) => (
              <li
                key={"linksli".concat(index)}
                style={{ padding: "5px 0px", color: "rgb(41, 101, 204)" }}
              >
                <AnchorLink
                  href={"#card".concat(index)}
                  style={{ textDecoration: "none", color: "rgb(41, 101, 204)" }}
                >
                  {card.Heading}
                </AnchorLink>
              </li>
            ))}
          </ol>
        </LinksContainer>
        <ContentContainer>
          {termsandconditions.cards.map((card, index) => (
            <Card id={"card".concat(index)} key={"cardkey".concat(index)}>
              <CardLeft>
                <Heading>
                  {index + 1}. {card.Heading}
                </Heading>
                <Description>
                  {card.Description.map((description, innerindex) => (
                    <li
                      key={"descr".concat(index).concat(innerindex)}
                      style={{ margin: "5%" }}
                    >
                      {description}

                      <br />
                    </li>
                  ))}
                </Description>
              </CardLeft>
              <CardRight>
                <ShortVersionHeading>SHORT VERSION</ShortVersionHeading>
                <ShortVersionDescription>
                  {card.ShortVersion}
                </ShortVersionDescription>
              </CardRight>
            </Card>
          ))}
        </ContentContainer>
      </MainContainer>
    </Wrapper>
  );
}
