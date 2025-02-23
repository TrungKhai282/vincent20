"use client";

import { useState } from "react";
import style from "./style.module.scss";
import IconMenu from "@/assets/icons/menu.svg";
import IconClose from "@/assets/icons/close.svg";
import Link, { LinkProps } from "next/link";
import clsx from "clsx";
import contentData from "@/data.json";
import dynamic from "next/dynamic";

// const IconMenu = dynamic(() => import("@/assets/icons/menu.svg"));
// const IconClose = dynamic(() => import("@/assets/icons/close.svg"));

const ButtonMenuMobile = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const toggleMenu = () => {
    setIsActiveMenu((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "contents",
      }}
    >
      <button className={style.menuBtn} onClick={toggleMenu}>
        <IconMenu />
      </button>
      <div className={clsx(style.fixedMenu, { [style.active]: isActiveMenu })}>
        <div className={style.content}>
          <button className={style.btnClose} onClick={toggleMenu}>
            <IconClose />
          </button>
          <div className={style.navLinks}>
            <Link href={"/"} onClick={toggleMenu}>
              Trang chủ
            </Link>
            <Link href={"/lien-he"} onClick={toggleMenu}>
              Liên hệ
            </Link>
            <Link
              href={contentData.contact.book_link}
              className={style.btnBook}
            >
              Đặt lịch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonMenuMobile;
