import { Outlet } from "react-router-dom";
import { GlobalStyles } from "../styles/styles.global";
import { NavBar } from "../components/Shared/NavBar";
import { Menu } from "../components/Shared/Menu";
import { useEffect, useState } from "react";
import { Footer } from "../components/Shared/Footer";
import { Cart } from "../components/Shared/Cart";
import { ScrollUp } from "../components/Shared/ScrollUp";

export const Layout = () => {
  const [isVisible, setVisibility] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("-modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isCartOpen]);

  const toggleMenu = () => {
    setVisibility(!isVisible);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleMenuClose = () => {
    setVisibility(false);
  };

  return (
    <>
      <GlobalStyles />
      <ScrollUp />
      <NavBar onToggleMenu={toggleMenu} onToggleCart={toggleCart} />
      <Menu isvisible={isVisible} onClose={handleMenuClose} />
      {isCartOpen && <Cart onCloseCart={() => setIsCartOpen(false)} />}
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
