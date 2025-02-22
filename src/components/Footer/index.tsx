import { memo } from "react";
import style from "./style.module.scss";
import contentData from "@/data.json";
type FooterProps = {};

const Footer = ({}: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer className={style.footer}>
      <div className={style.logo}>VINCENT 20</div>
      <div className={style.phone}>
        Liên hệ tư vấn: {contentData.contact.phone}
      </div>
      <div className={style.copyright}>
        Copyright © {year} by TrungKhai - Khainguyentrantrung@gmail.com
      </div>
    </footer>
  );
};

export default memo(Footer);
