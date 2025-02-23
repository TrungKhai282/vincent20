import contentData from "@/data.json";
import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const ContactPage = () => {
  return (
    <div className={style.contactPage}>
      <h1
        className={clsx(style.pageTitle, "animate__animated animate__fadeInUp")}
      >
        Liên hệ với chúng tôi
      </h1>
      <div
        className={clsx(
          style.container,
          "animate__animated animate__fadeIn delay100"
        )}
      >
        <div
          className={clsx(
            style.content,
            "animate__animated animate__zoomIn delay200"
          )}
        >
          <div className={style.block}>
            <div className={style.label}>Mạng xã hội</div>
            <div className={style.listSocial}>
              {contentData.social.map((item) => (
                <Link
                  key={item.icon}
                  href={item.url}
                  target="_blank"
                  className={style.social}
                >
                  <Image
                    layout="responsive"
                    width={0}
                    height={0}
                    alt="heart"
                    src={item.icon}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className={style.block}>
            <div className={style.label}>Số điện thoại</div>
            <ul>
              <li>Thái: 0987654321</li>
              <li>Phong: 0987654321</li>
            </ul>
          </div>
          <div className={style.block}>
            <div className={style.label}>Địa chỉ</div>
            <div>143 Phạm Huy Thông, Gò Vấp, TP. Hồ Chí Minh</div>
          </div>
          <div className={style.block}>
            <div className={style.label}>Chat ngay</div>
            <div className={style.listChat}>
              {contentData.contact.chats.map((item) => (
                <Link
                  key={item.icon}
                  href={item.url}
                  target="_blank"
                  className={style.chat}
                >
                  <Image
                    layout="responsive"
                    width={0}
                    height={0}
                    alt="heart"
                    src={item.icon}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
