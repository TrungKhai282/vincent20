import { memo } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import AutoplayVideo from "@/components/AutoplayVideo";
import Feedback from "@/components/Feedback";
import clsx from "clsx";
import contentData from "@/data.json";

type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  return (
    <>
      <section className={style.banner}>
        <div className={style.container}>
          <div
            className={clsx(
              style.logo,
              "animate__animated animate__jackInTheBox"
            )}
          >
            <Image
              layout="responsive"
              width={0}
              height={0}
              alt="Logo image banner"
              src={"/images/logohomepagebanner.png"}
            />
          </div>
          <div
            className={clsx(
              style.slogan,
              "animate__animated animate__fadeInUp delay100"
            )}
          >
            {contentData.home.banner.slogan}
          </div>
          <div
            className={clsx(
              style.description,
              "animate__animated animate__fadeInUp delay200"
            )}
          >
            {contentData.home.banner.description}
          </div>
          <div className={style.action}>
            <Link
              href={contentData.contact.book_link}
              className={clsx(
                style.btnBook,
                "animate__animated animate__bounceIn delay300"
              )}
            >
              Đặt lịch
            </Link>
            <Link
              href={"/"}
              className={clsx(
                style.btnAbout,
                "animate__animated animate__bounceIn delay400"
              )}
            >
              Về chúng tôi
            </Link>
          </div>
        </div>
      </section>
      <section className={style.why}>
        <div className={style.container}>
          <div className={style.text}>
            <div className={style.title}>{contentData.home.why.title}</div>
            <p className={style.description}>
              {contentData.home.why.description}
            </p>
            <div className={style.listReason}>
              {contentData.home.why.reasons.map((item) => (
                <div className={style.reason} key={item.label}>
                  <div className={style.reasonIcon}>
                    <Image
                      layout="responsive"
                      width={0}
                      height={0}
                      alt="tattoo"
                      src={item.icon}
                    />
                  </div>
                  <div className={style.reasonContent}>
                    <span>{item.label}</span>
                    <span>{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link href={"/"} className={style.btnAbout}>
              Tìm hiểu thêm về chúng tôi
            </Link>
          </div>
          <div className={style.listImage}>
            {contentData.home.why.images.map((item) => (
              <div className={style.image} key={item}>
                <Image
                  layout="responsive"
                  width={0}
                  height={0}
                  alt="heart"
                  src={item}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={style.service}>
        <div className={style.container}>
          <div className={style.headSection}>
            <div className={style.icon}>
              <Image
                layout="responsive"
                width={0}
                height={0}
                alt="heart"
                src={"/icons/diamond.svg"}
              />
            </div>
          </div>
          <div className={style.title}>{contentData.home.service.title}</div>
          <div className={style.description}>
            {contentData.home.service.description}
          </div>
          <div className={style.listService}>
            {contentData.home.service.services.map((item) => (
              <div key={item.label} className={style.serviceItem}>
                <div className={style.icon}>
                  <Image
                    layout="responsive"
                    width={0}
                    height={0}
                    alt="heart"
                    src={item.icon}
                  />
                </div>
                <div className={style.name}>{item.label}</div>
                <p className={style.desc}>{item.description}</p>
                <p className={style.price}>
                  <span>Chỉ từ</span>
                  <span>{item.price}</span>
                </p>
              </div>
            ))}
          </div>
          <Link href={contentData.contact.book_link} className={style.btnBook}>
            Đặt lịch ngay
          </Link>
        </div>
      </section>
      <section className={style.video}>
        <AutoplayVideo
          src={contentData.home.video}
          className={style.autoVideo}
        />
      </section>
      <section className={style.portfolio}>
        <div className={style.container}>
          <div className={style.image}>
            <Image
              layout="responsive"
              width={0}
              height={0}
              alt="heart"
              src={"/images/portfolio.png"}
            />
          </div>
          <div className={style.text}>
            <div className={style.title}>
              {contentData.home.portfolio.title}
            </div>
            <div className={style.description}>
              {contentData.home.portfolio.description}
            </div>
            <Link href={"/"} className={style.btnView}>
              Xem ngay
            </Link>
          </div>
        </div>
      </section>
      <section className={style.clientSay}>
        <div className={style.container}>
          <div className={style.title}>{contentData.home.feedback.title}</div>
          <div className={style.description}>
            {contentData.home.feedback.description}
          </div>
          <Feedback data={contentData.home.feedback.comments} />
        </div>
      </section>
      <section className={style.follow}>
        <div className={style.background}></div>
        <div className={style.container}>
          <div className={style.text}>
            <div className={style.title}>{contentData.home.follow.title}</div>
            <div className={style.description}>
              {contentData.home.follow.description}
            </div>
            <div className={style.listSocial}>
              {contentData.social.map((item) => (
                <Link href={item.url} target="_blank" className={style.social}>
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
      </section>
    </>
  );
};

export default memo(HomePage);
