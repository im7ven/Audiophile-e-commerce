import { Outlet } from "react-router-dom";
import { GlobalStyles } from "../styles/styles.global";
import { NavBar } from "../components/NavBar";
import { Menu } from "../components/Menu";
import { useState } from "react";

export const Layout = () => {
  const [isVisible, setVisibility] = useState(false);

  const toggleMenu = () => {
    setVisibility(!isVisible);
  };

  return (
    <>
      <GlobalStyles />
      <NavBar onToggle={toggleMenu} />
      <Menu isVisible={isVisible} />
      <div id="main">
        <Outlet />
      </div>
    </>
  );
};
