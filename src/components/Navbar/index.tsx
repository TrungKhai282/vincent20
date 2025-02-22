import { memo } from "react";
import style from "./style.module.scss";
import clsx from "clsx";
import Link from "next/link";
import IconMenu from "@/assets/menu.svg";
import ButtonMenuMobile from "./ButtonMenuMobile";
import contentData from "@/data.json";

type NavbarProps = {};

const Navbar = ({}: NavbarProps) => {
  return (
    <header
      className={clsx(style.navbar, "animate__animated animate__fadeInDown")}
    >
      <div className={style.container}>
        <div className={style.desktop}>
          <div className={style.left}>
            <div className={style.logo}>VINCENT 20</div>
          </div>
          <div className={style.right}>
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
        <div className={style.mobile}>
          <div className={style.logo}>VINCENT 20</div>
          <ButtonMenuMobile />
        </div>
      </div>
    </header>
  );
};

export default memo(Navbar);
