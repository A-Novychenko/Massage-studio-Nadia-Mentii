import Image from "next/image";
import Link from "next/link";

import styles from "./AboutMassageList.module.scss";

export const AdminAboutMassageList = async () => {
  // const res = await fetch("http://localhost:3000/api/about-massages/");
  // Novik
  const res = await fetch(`${process.env.BASE_HOST}/api/about-massages`);
  // const res = await fetch(`/api/about-massages`);
  const {data} = await res.json();

  return (
    <div className={styles.section}>
      <h2 className={styles.name_subsection}>Список сеансів</h2>
      <ul className={styles.wrap}>
        {data &&
          data.map(({_id, imgLink, title, description}: AboutMassage) => {
            return (
              <li key={_id} className={styles.card}>
                <h3 className={styles.subtitle}>{title}</h3>
                <div className={styles.content_box}>
                  <div className={styles.img_wrap}>
                    <Image
                      src={imgLink}
                      alt={title}
                      width={1296}
                      height={600}
                      className={styles.img}
                    />
                  </div>

                  <p className={styles.descr}>{description}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
