import { facebook, instagram, logo, twitter } from "../images";
import {
  Copyright,
  FooterContainer,
  FooterDescription,
  FooterInfo,
  FooterNav,
  FooterWrapper,
  IconWrapper,
  Logo,
  LogoNavWrapper,
  SocialIcon,
} from "../styles/styles.Footer";
import { NavItem } from "../styles/styles.NavBar";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <LogoNavWrapper>
          <Logo loading="lazy" src={logo} alt="" />
          <FooterNav>
            <NavItem to="/">Home</NavItem>
            <NavItem to="headphones">Headphones</NavItem>
            <NavItem to="speakers">Speakers</NavItem>
            <NavItem to="earphones">Earphones</NavItem>
          </FooterNav>
        </LogoNavWrapper>
        <FooterDescription>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialist who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo-facility-we're open 7 days a week.
        </FooterDescription>
        <FooterInfo>
          <Copyright>Copyright 2021. All Rights Reserved.</Copyright>
          <IconWrapper>
            <SocialIcon src={facebook} />
            <SocialIcon src={twitter} />
            <SocialIcon src={instagram} />
          </IconWrapper>
        </FooterInfo>
      </FooterContainer>
    </FooterWrapper>
  );
};
