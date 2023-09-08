import {
  CartIconWrapper,
  CartNotification,
  LogoMenuWrapper,
  MenuIcon,
  Nav,
  NavItem,
  NavList,
  NavWrapper,
} from "../../styles/Shared/styles.NavBar";
import hamburger from "../../images/icon-hamburger.webp";
import logo from "../../images/logo.webp";
import cartIcon from "../../images/icon-cart.svg";
import { useCart } from "../../context/CartContext";

interface Props {
  onToggleMenu: () => void;
  onToggleCart: () => void;
}

export const NavBar = ({ onToggleMenu, onToggleCart }: Props) => {
  const { cart } = useCart();

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
        <CartIconWrapper>
          <img
            loading="lazy"
            src={cartIcon}
            onClick={() => onToggleCart()}
            alt="Shopping cart"
          />
          {cart.length > 0 && (
            <CartNotification>{cart.length}</CartNotification>
          )}
        </CartIconWrapper>
      </Nav>
    </NavWrapper>
  );
};
