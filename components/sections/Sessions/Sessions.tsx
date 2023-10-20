import Image from "next/image";
import styles from "./Sessions.module.scss";
import Link from "next/link";

export const SessionsSection = async () => {
  // const res = await fetch("http://localhost:3000/api/sessions/");
  // Novik
  const res = await fetch("/api/sessions");
  const {data} = await res.json();

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
