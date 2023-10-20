import Image from "next/image";

import {mongoApi} from "@/services/mongoApi";

import styles from "./AboutMassageList.module.scss";

export const AdminAboutMassageList = async () => {
  const initialData = [
    {
      _id: "1",
      title: "",
      description: "",
      imgLink:
        "https://res.cloudinary.com/dsgx4xoew/image/upload/v1697839490/empty_gzi49n.png",
    },
  ];

  const mongoApiParams = {
    action: "find",
    data: null,
    collection: "about-massages",
  };

  const res = await mongoApi(mongoApiParams);

  const data = res?.documents ? res?.documents : initialData;

  return (
    <div className={styles.section}>
      <h2 className={styles.name_subsection}>Список сеансів</h2>
      <ul className={styles.wrap}>
        {data &&
          data.map(({_id, imgLink, title, description}: AboutMassageData) => {
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
