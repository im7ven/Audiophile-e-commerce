import styled from "styled-components";
import { bodyText } from "../styles.typography";
import {
  block,
  caramelBg,
  icon,
  navList,
  nightBlackBg,
} from "../styles.utilities";

export const FooterWrapper = styled.div`
  ${nightBlackBg}
`;

export const FooterContainer = styled.footer`
  ${nightBlackBg}
  ${block}
  padding: 5.2rem 2.4rem 3.8rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 40%;

    width: 10.4rem;
    height: 0.4rem;
    ${caramelBg}
  }

  @media screen and (min-width: 768px) {
    padding: 6rem 3.9rem 4.6rem;
    text-align: left;

    &::before {
      left: initial;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 7.5rem 16.5rem 4.8rem;
  }
`;

export const LogoNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  @media screen and (min-width: 768px) {
    gap: 3.2rem;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  align-self: center;

  @media screen and (min-width: 768px) {
    align-self: start;
  }

  @media screen and (min-width: 1024px) {
    align-self: center;
  }
`;

export const FooterNav = styled.ul`
  ${navList}
`;

export const FooterDescription = styled.p`
  ${bodyText}
  color: #979797;
  margin-top: 3.2rem;

  @media screen and (min-width: 1024px) {
    max-width: 54rem;
    margin-bottom: 0;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const Copyright = styled.p`
  ${bodyText}
  margin: 4.8rem 0;

  @media screen and (min-width: 768px) {
    margin: 8rem 0 0 0;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 5rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;

  @media screen and (min-width: 1024px) {
    transform: translateY(-8.1rem);
  }
`;

export const SocialIcon = styled.img`
  ${icon}
  width: 2.4rem;
`;
