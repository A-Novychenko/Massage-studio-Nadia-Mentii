import Image from "next/image";

import styles from "./SlidesList.module.scss";

export const AdminSlidesList = async () => {
  // const res = await fetch("http://localhost:3000/api/slides");
  // Novik
  const res = await fetch(`${process.env.BASE_HOST}/api/slides`);
  // const res = await fetch(`/api/slides`);
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
