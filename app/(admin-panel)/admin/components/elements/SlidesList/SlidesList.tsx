import Image from "next/image";

import styles from "./SlidesList.module.scss";

export const AdminSlidesList = async () => {
  const res = await fetch("http://127.0.0.1:3000/api/slides", {
    cache: "no-store",
  });
  const data = await res.json();

  const slides = data?.data;
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
