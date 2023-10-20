import Image from "next/image";
import Link from "next/link";

import styles from "./NewsList.module.scss";

export const AdminNewsList = async () => {
  // const res = await fetch("http://localhost:3000/api/news-posts/");
  // Novik
  const res = await fetch(`${process.env.BASE_HOST}/api/news-posts`);
  // const res = await fetch(`/api/news-posts`);

  const {data} = await res.json();

  return (
    <div className={styles.section}>
      <h2 className={styles.name_subsection}>Список новин</h2>
      <ul>
        {data &&
          data.map(
            ({
              _id,
              title,
              shortDescription,
              longDescription,
              imgLink,
              imgLargeLink,
              date,
            }: News) => {
              return (
                <li className={styles.item} key={_id}>
                  <div className={styles.wrap}>
                    <div className={styles.img_wrap}>
                      <Image
                        className={styles.img}
                        src={imgLink}
                        alt={title}
                        width={700}
                        height={500}
                      />
                    </div>
                    <div className={styles.img_wrap}>
                      <Image
                        className={styles.img}
                        src={imgLargeLink}
                        alt={title}
                        width={700}
                        height={500}
                      />
                    </div>

                    <time className={styles.time} dateTime="2018-07-14">
                      {new Date(Number(date)).toDateString()}
                    </time>
                  </div>

                  <div className={styles.text_box}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.descr}>{shortDescription}</p>
                    <p className={styles.descr}>{longDescription}</p>
                  </div>
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};
