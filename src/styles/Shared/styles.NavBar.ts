import { styled } from "styled-components";
import { block, caramel, navList } from "../styles.utilities";
import { subTitle } from "../styles.typography";
import { Link } from "react-router-dom";

export const NavWrapper = styled.div`
  background: #181818;
  padding: 0 2.4rem;

  @media screen and (min-width: 768px) {
    padding: 0 3.9rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  padding: 3.2rem 0;
  align-items: center;
  justify-content: space-between;
  ${block}
  border-bottom: 1px solid #fff2;

  @media screen and (min-width: 768px) {
    padding: 3.5rem 0;
  }
`;

export const MenuIcon = styled.img`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const LogoMenuWrapper = styled.div`
  display: flex;
  gap: 4.2rem;
  justify-content: center;
  align-items: center;
`;

export const NavList = styled.ul`
  ${navList}
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const NavItem = styled(Link)`
  ${subTitle}
  letter-spacing: 0.2rem;
  text-decoration: none;
  color: white;

  &:hover {
    ${caramel}
  }
`;
