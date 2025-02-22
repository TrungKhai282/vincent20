"use client";

import { memo, useState } from "react";
import style from "./style.module.scss";
import IconMenu from "@/assets/icons/menu.svg";
import IconClose from "@/assets/icons/close.svg";
import Link from "next/link";
import clsx from "clsx";
import contentData from "@/data.json";

type ButtonMenuMobileProps = {};

const ButtonMenuMobile = ({}: ButtonMenuMobileProps) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const toggleMenu = () => {
    setIsActiveMenu((prev) => !prev);
  };

  return (
    <>
      <button className={style.menuBtn} onClick={toggleMenu}>
        <IconMenu />
      </button>
      <div className={clsx(style.fixedMenu, { [style.active]: isActiveMenu })}>
        <div className={style.content}>
          <button className={style.btnClose} onClick={toggleMenu}>
            <IconClose />
          </button>
          <div className={style.navLinks}>
            <Link href={"/"}>Trang chủ</Link>
            <Link href={"/"}>Về chúng tôi</Link>
            <Link href={"/"}>Liên hệ</Link>
            <Link
              href={contentData.contact.book_link}
              className={style.btnBook}
            >
              Đặt lịch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ButtonMenuMobile);
