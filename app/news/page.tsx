import Image from "next/image";

import styles from "./NewsPage.module.scss";
import Link from "next/link";

export default async function NewsPage() {
  const res = await fetch("http://127.0.0.1:1337/api/news-posts/");

  const {data} = await res.json();

  return (
    <section className={styles.section}>
      <h1 className="visually-hidden">Новини</h1>
      <div className="container">
        <ul>
          {data &&
            data.map(
              ({attributes, id}: {attributes: NewsAttributes; id: string}) => {
                const {
                  title,
                  long_descr,
                  short_descr,
                  img_small,
                  img_big,
                  createdAt,
                } = attributes;
                return (
                  <li className={styles.item} key={id}>
                    <div className={styles.wrap}>
                      <div className={styles.img_wrap}>
                        <Image
                          className={styles.img}
                          src={img_small}
                          alt={title}
                          width={700}
                          height={500}
                        />
                      </div>

                      <time className={styles.time} dateTime="2018-07-14">
                        {/* {createdAt} */}
                        {new Date(createdAt).toDateString()}
                        {/* {locDate(createdAt)} */}
                      </time>
                    </div>

                    <div className={styles.text_box}>
                      <h2 className={styles.title}>{title}</h2>
                      <p className={styles.descr}>{short_descr}</p>
                      <Link className={styles.link_more} href={`/news/${id}`}>
                        детальніше
                      </Link>
                    </div>
                  </li>
                );
              }
            )}
        </ul>
      </div>
    </section>
  );
}
