import Image from "next/image";

import styles from "./AboutMassage.module.scss";

export const AboutMassageSection = async () => {
  const res = await fetch("http://127.0.0.1:1337/api/about-massages");
  const {data} = await res.json();

  //   console.log("data", data);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>про масаж</h2>
        <ul className={styles.list}>
          {data &&
            data.map(
              ({
                attributes,
                id,
              }: {
                attributes: AboutMassageAttributes;
                id: string;
              }) => {
                const {subtitle, text, img} = attributes;
                return (
                  <li className={styles.item} key={id}>
                    {img && (
                      <div className={styles.img_wrap}>
                        <Image
                          className={styles.img}
                          src={img}
                          alt={subtitle}
                          width={1200}
                          height={600}
                          //   width={648}
                          //   height={300}
                        />
                      </div>
                    )}
                    <div className={styles.text}>
                      <h3 className={styles.subtitle}>{subtitle}</h3>
                      <p className={styles.descr}>{text}</p>
                    </div>
                  </li>
                );
              }
            )}
        </ul>
      </div>
    </section>
  );
};
