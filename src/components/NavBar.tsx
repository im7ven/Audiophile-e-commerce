import {
  LogoMenuWrapper,
  MenuIcon,
  Nav,
  NavItem,
  NavList,
  NavWrapper,
} from "../styles/styles.NavBar";
import hamburger from "../images/icon-hamburger.webp";
import logo from "../images/logo.webp";
import cart from "../images/icon-cart.svg";

interface Props {
  onToggle: () => void;
}

export const NavBar = ({ onToggle }: Props) => {
  return (
    <NavWrapper>
      <Nav>
        <LogoMenuWrapper>
          <MenuIcon
            onClick={() => onToggle()}
            src={hamburger}
            alt="Menu icon"
          />
          <img src={logo} />
        </LogoMenuWrapper>
        <NavList>
          <NavItem to="/">Home</NavItem>
          <NavItem to="headphones">Headphones</NavItem>
          <NavItem to="speakers">Speakers</NavItem>
          <NavItem to="earphones">Earphones</NavItem>
        </NavList>
        <img src={cart} alt="Shopping cart" />
      </Nav>
    </NavWrapper>
  );
};
