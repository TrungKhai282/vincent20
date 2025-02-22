"use client";

import style from "./style.module.scss";
import Navbar from "../Navbar";
import Footer from "../Footer";
import clsx from "clsx";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={style.layout}>
      <Navbar />
      <div className={clsx(style.main, "animate__animated animate__fadeIn")}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
