import Image from "next/image";
import Link from "next/link";
import {BsArrowUpRight} from "react-icons/bs";

import styles from "./AboutMassage.module.scss";

export const AboutMassageSection = async () => {
  const res = await fetch("http://127.0.0.1:1337/api/about-massages");
  const {data} = await res.json();

  const hendleText = (text: string) => {
    if (text.length > 420) {
      return text.slice(0, 400) + " ...";
    }
    return text;
  };

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
                        />
                      </div>
                    )}
                    <div className={img ? styles.text : styles.text_not_img}>
                      <h3 className={styles.subtitle}>{subtitle}</h3>
                      <p className={styles.descr}>{hendleText(text)}</p>

                      <Link className={styles.link_more} href="">
                        <span className={styles.link_more_text}>
                          прочитати більше
                        </span>
                        <BsArrowUpRight size={16} color="#2196F3" />
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
};
