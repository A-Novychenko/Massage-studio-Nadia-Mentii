import Image from "next/image";

import {mongoApi} from "@/services/mongoApi";

import styles from "./SessionList.module.scss";

export const AdminSessionList = async () => {
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
    <div className={styles.section}>
      <h2 className={styles.name_subsection}>Список сеансів</h2>
      <ul className={styles.wrap}>
        {data &&
          data.map(({_id, imgLink, title, description}: SessionsData) => {
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
