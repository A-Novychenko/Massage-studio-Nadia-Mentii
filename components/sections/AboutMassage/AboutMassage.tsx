import Image from "next/image";
import Link from "next/link";
import {BsArrowUpRight} from "react-icons/bs";

import {mongoApi} from "@/services/mongoApi";

import styles from "./AboutMassage.module.scss";

export const AboutMassageSection = async () => {
  const initialData = [
    {
      _id: "1",
      title: "",
      description: "",
      imgLink: "",
    },
  ];

  const mongoApiParams = {
    action: "find",
    data: null,
    collection: "about-massages",
  };

  const res = await mongoApi(mongoApiParams);

  const data = res?.documents ? res?.documents : initialData;

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
            data.map(({_id, title, description, imgLink}: AboutMassageData) => {
              return (
                <li className={styles.item} key={_id}>
                  {imgLink && (
                    <div className={styles.img_wrap}>
                      <Image
                        className={styles.img}
                        src={imgLink}
                        alt={title}
                        width={1200}
                        height={600}
                      />
                    </div>
                  )}
                  <div className={imgLink ? styles.text : styles.text_not_img}>
                    <h3 className={styles.subtitle}>{title}</h3>
                    <p className={styles.descr}>{hendleText(description)}</p>

                    <Link className={styles.link_more} href="">
                      <span className={styles.link_more_text}>
                        прочитати більше
                      </span>
                      <BsArrowUpRight size={16} color="#2196F3" />
                    </Link>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};
