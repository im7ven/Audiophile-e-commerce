import { Outlet } from "react-router-dom";
import { GlobalStyles } from "../styles/styles.global";
import { NavBar } from "../components/Shared/NavBar";
import { Menu } from "../components/Shared/Menu";
import { useState } from "react";
import { Footer } from "../components/Shared/Footer";

export const Layout = () => {
  const [isVisible, setVisibility] = useState(false);

  const toggleMenu = () => {
    setVisibility(!isVisible);
  };

  return (
    <>
      <GlobalStyles />
      <NavBar onToggle={toggleMenu} />
      <Menu isvisible={isVisible} />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
