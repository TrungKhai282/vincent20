import { memo } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import clsx from "clsx";

type FeedbackItemDetailProps = { detail: any };

const FeedbackItemDetail = ({ detail }: FeedbackItemDetailProps) => {
  return (
    <div
      className={clsx(
        style.feedbackItemDetail,
        "animate__animated animate__fadeIn"
      )}
    >
      <div className={style.text}>
        <div className={style.message}>“{detail.short}”</div>
        <div className={style.description}>{detail.full}</div>
        <div className={style.name}>{detail.name}</div>
        <div className={style.place}>{detail.place}</div>
      </div>
      <div className={style.image}>
        <Image
          layout="responsive"
          width={0}
          height={0}
          alt="heart"
          src={detail.image}
        />
      </div>
    </div>
  );
};

export default memo(FeedbackItemDetail);
