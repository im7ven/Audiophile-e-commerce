import { Outlet } from "react-router-dom";
import { GlobalStyles } from "../styles/styles.global";
import { NavBar } from "../components/Shared/NavBar";
import { Menu } from "../components/Shared/Menu";
import { useEffect, useState } from "react";
import { Footer } from "../components/Shared/Footer";
import { Cart } from "../components/Shared/Cart";

export const Layout = () => {
  const [isVisible, setVisibility] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add("cart-modal-open");
    } else {
      document.body.classList.remove("cart-modal-open");
    }

    return () => {
      document.body.classList.remove("cart-modal-open");
    };
  }, [isCartOpen]);

  const toggleMenu = () => {
    setVisibility(!isVisible);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <GlobalStyles />
      <NavBar onToggleMenu={toggleMenu} onToggleCart={toggleCart} />
      <Menu isvisible={isVisible} />
      {isCartOpen && <Cart onCloseCart={() => setIsCartOpen(false)} />}
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
