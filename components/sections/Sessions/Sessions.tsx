import Image from "next/image";
import Link from "next/link";

import {mongoApi} from "@/services/mongoApi";

import styles from "./Sessions.module.scss";

export const SessionsSection = async () => {
  const initialData = [
    {
      _id: "1",
      title: "",
      imgLink:
        "https://res.cloudinary.com/dsgx4xoew/image/upload/v1697839490/empty_gzi49n.png",
      description: "",
    },
  ];
  const mongoApiParams = {
    action: "find",
    data: null,
    collection: "sessions",
  };

  const res = await mongoApi(mongoApiParams);

  const data = res?.documents ? res?.documents : initialData;

  return (
    <section className={styles.section} id="sessions">
      <div className="container">
        <h2 className={styles.title}>сеанси</h2>
        <ul className={styles.list}>
          {data &&
            data.map(({_id, title, imgLink, description}: SessionsData) => {
              return (
                <li key={_id} className={styles.item}>
                  <Link href="" className={styles.link}>
                    <Image
                      src={imgLink}
                      alt={title}
                      width={380}
                      height={280}
                      className={styles.img}
                    />
                    <h3 className={styles.subtitle}>{title}</h3>
                    <div className={styles.overlay}>
                      <p className={styles.descr}>{description}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};
