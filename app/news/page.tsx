import Image from "next/image";
import Link from "next/link";

import {mongoApi} from "@/services/mongoApi";

import styles from "./NewsPage.module.scss";

export default async function NewsPage() {
  const initialData = [
    {
      _id: "1",
      title: "",
      shortDescription: "",
      longDescription: "",
      imgLink:
        "https://res.cloudinary.com/dsgx4xoew/image/upload/v1697839490/empty_gzi49n.png",
      imgLargeLink:
        "https://res.cloudinary.com/dsgx4xoew/image/upload/v1697839490/empty_gzi49n.png",
      date: "",
    },
  ];
  const mongoApiParams = {
    action: "find",
    data: null,
    collection: "news-posts",
  };

  const res = await mongoApi(mongoApiParams);

  const data = res?.documents ? res?.documents : initialData;

  return (
    <section className={styles.section}>
      <h1 className="visually-hidden">Новини</h1>
      <div className="container">
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
              }: NewsData) => {
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

                      <time className={styles.time} dateTime="2018-07-14">
                        {new Date(Number(date)).toDateString()}
                      </time>
                    </div>

                    <div className={styles.text_box}>
                      <h2 className={styles.title}>{title}</h2>
                      <p className={styles.descr}>{shortDescription}</p>
                      <Link className={styles.link_more} href={`/news/${_id}`}>
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
