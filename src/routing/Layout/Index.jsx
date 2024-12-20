import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../../components/layouts/TopBar";
import NavBarSite from "../../components/layouts/Navbar";

const Layout = () => {
  return (
    <>
      <TopBar></TopBar>
      <NavBarSite></NavBarSite>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
