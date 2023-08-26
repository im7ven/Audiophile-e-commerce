import { Outlet } from "react-router-dom";
import { GlobalStyles } from "../styles/styles.global";
import { NavBar } from "../components/NavBar";
import { Menu } from "../components/Menu";

export const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Menu />
      <div id="main">
        <Outlet />
      </div>
    </>
  );
};
