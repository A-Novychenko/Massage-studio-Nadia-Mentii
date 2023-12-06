import Image from "next/image";

import {mongoApi} from "@/services/mongoApi";

import styles from "./Specialists.module.scss";
import {Certifacate} from "@/components/elements/Certifacate/Certifacate";

export const OurSpecialistsList = async () => {
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
    <section className={styles.section}>
      <div className="container">
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
                    <h2 className={styles.name}>{name}</h2>
                    <div className={styles.content_box}>
                      <div className={styles.photo_wrap}>
                        <Image
                          className={styles.photo}
                          src={photoLink}
                          alt={name}
                          width={500}
                          height={500}
                        />
                      </div>
                      <p className={styles.summary}>{summary}</p>
                    </div>
                    <Certifacate сertificateLink={сertificateLink} />

                    {/* <div className={styles.additional_info_box}>
                      <p className={styles.additional_info_text}>{info}</p>
                      <div className={styles.certificate_wrap}>
                        <Image
                          className={styles.certificate}
                          src={сertificateLink}
                          alt={`${name} certificate`}
                          width={300}
                          height={250}
                        />
                      </div>
                    </div> */}
                  </li>
                );
              }
            )}
        </ul>
      </div>
    </section>
  );
};
