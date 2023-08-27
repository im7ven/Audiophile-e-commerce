import { styled } from "styled-components";
import { block, caramel, navList } from "./styles.utilities";
import { subTitle } from "./styles.typography";

export const NavWrapper = styled.div`
  background: #191919;
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
  @media screen and (min-width: 1100px) {
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

  @media screen and (min-width: 1100px) {
    display: flex;
  }
`;

export const NavItem = styled.li`
  ${subTitle}
  letter-spacing: 0.2rem;
  color: white;

  &:hover {
    ${caramel}
  }
`;
