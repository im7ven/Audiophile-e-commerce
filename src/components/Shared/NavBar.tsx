import {
  LogoMenuWrapper,
  MenuIcon,
  Nav,
  NavItem,
  NavList,
  NavWrapper,
} from "../../styles/Shared/styles.NavBar";
import hamburger from "../../images/icon-hamburger.webp";
import logo from "../../images/logo.webp";
import cart from "../../images/icon-cart.svg";

interface Props {
  onToggleMenu: () => void;
  onToggleCart: () => void;
}

export const NavBar = ({ onToggleMenu, onToggleCart }: Props) => {
  return (
    <NavWrapper>
      <Nav>
        <LogoMenuWrapper>
          <MenuIcon
            loading="lazy"
            onClick={() => onToggleMenu()}
            src={hamburger}
            alt="Menu icon"
          />
          <img loading="lazy" src={logo} />
        </LogoMenuWrapper>
        <NavList>
          <NavItem to="/">Home</NavItem>
          <NavItem to="headphones">Headphones</NavItem>
          <NavItem to="speakers">Speakers</NavItem>
          <NavItem to="earphones">Earphones</NavItem>
        </NavList>
        <img
          loading="lazy"
          src={cart}
          onClick={() => onToggleCart()}
          alt="Shopping cart"
        />
      </Nav>
    </NavWrapper>
  );
};
