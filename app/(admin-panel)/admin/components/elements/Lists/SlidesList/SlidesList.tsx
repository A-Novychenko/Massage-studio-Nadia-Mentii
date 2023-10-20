import Image from "next/image";

import {mongoApi} from "@/services/mongoApi";

import styles from "./SlidesList.module.scss";

export const AdminSlidesList = async () => {
  const initialSlides = [
    {
      _id: "1",
      title: "",
      imgLink:
        "https://res.cloudinary.com/dsgx4xoew/image/upload/v1697839490/empty_gzi49n.png",
    },
  ];
  const mongoApiParams = {
    action: "find",
    data: null,
    collection: "slides",
  };

  const res = await mongoApi(mongoApiParams);

  const slides = res?.documents ? res?.documents : initialSlides;

  return (
    <div className={styles.section}>
      <p className={styles.name_subsection}>Збережені слайди: </p>
      <ul className={styles.wrap}>
        {slides &&
          slides.map(({_id, title, imgLink}: AdminBannerData) => {
            return (
              <li className={styles.card} key={_id}>
                <div className={styles.img_wrap}>
                  <Image
                    src={imgLink}
                    alt={title}
                    width={1296}
                    height={600}
                    className={styles.img}
                  />
                </div>
                <div className={styles.title_wrap}>
                  <p className={styles.title}>{title}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
