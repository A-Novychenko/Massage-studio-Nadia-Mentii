import Image from "next/image";

import { mongoApi } from "@/services/mongoApi";

import styles from "./OurSpecialists.module.scss";

export const AdminOurSpecialistsList = async () => {
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
    collection: "specialists",
  };

  const res = await mongoApi(mongoApiParams);

  const data = res?.documents ? res?.documents : initialData;

  return (
    <div className={styles.section}>
      <h2 className={styles.name_subsection}>Персонал</h2>
      <ul className={styles.wrap}>
        {data &&
          data.map(
            ({
              _id,
              name,
              summary,
              info,
              photoLink,
              сertificateLink,
            }: SpecialistsData) => {
              return (
                <li key={_id} className={styles.card}>
                  <h3 className={styles.subtitle}>{name}</h3>
                  <div className={styles.content_box}>
                    <div className={styles.img_wrap}>
                      <Image
                        src={photoLink}
                        alt={name}
                        width={1296}
                        height={600}
                        className={styles.img}
                      />
                    </div>
                    <p className={styles.descr}>{summary}</p>

                    <div className={styles.img_wrap}>
                      <Image
                        src={сertificateLink}
                        alt={`${name} certificate`}
                        width={1296}
                        height={600}
                        className={styles.img}
                      />
                    </div>
                    <p className={styles.descr}>{info}</p>
                  </div>
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};
