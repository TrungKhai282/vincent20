import style from "./style.module.scss";
import clsx from "clsx";
import Link from "next/link";
import contentData from "@/data.json";

import dynamic from "next/dynamic";
const ButtonMenuMobile = dynamic(() => import("./ButtonMenuMobile"));

const Navbar = () => {
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
              <Link href={"/lien-he"}>Liên hệ</Link>
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

export default Navbar;
