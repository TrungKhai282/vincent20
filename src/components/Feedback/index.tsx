"use client";

import { Suspense, useState } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import FeedbackItemDetail from "./FeedbackItemDetail";
import clsx from "clsx";

type FeedbackProps = {
  data: any;
};

const Feedback = ({ data }: FeedbackProps) => {
  const [person, setPerson] = useState(data[0].name);
  return (
    <Suspense>
      <div className={style.feedback}>
        <div className={style.scrollX}>
          <div className={style.personList}>
            {data.map((item: any) => (
              <div
                key={item.name}
                className={clsx(style.person, {
                  [style.active]: person === item.name,
                })}
                onClick={() => setPerson(item.name)}
              >
                <div className={style.avatar}>
                  <Image
                    layout="responsive"
                    width={0}
                    height={0}
                    alt="heart"
                    src={item.avatar}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <FeedbackItemDetail
          detail={data?.find((item: any) => item.name === person)}
        />
      </div>
    </Suspense>
  );
};

export default Feedback;
