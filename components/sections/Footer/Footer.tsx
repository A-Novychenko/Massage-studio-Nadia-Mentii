import Link from "next/link";
import {MdLocationOn} from "react-icons/md";
import {FaSubway} from "react-icons/fa";

import styles from "./Footer.module.scss";

export const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrap} id="contacts">
          <Link href="./index.html" className={styles.logo}>
            Cтудія масажу
            <br />
            Надії Ментій
          </Link>
          <address className={styles.address}>
            <div className={styles.location}>
              <MdLocationOn
                size={30}
                color="#fff"
                className={styles.location_icon}
              />

              <p>
                м. Київ, <br /> вул. Сергія Данченко, 32
              </p>
            </div>
            <div className={styles.subway}>
              <FaSubway
                size={30}
                color="#00aeff"
                className={styles.subway_icon}
              />

              <p>м. Оболонь</p>
            </div>
            <div className={styles.subway}>
              <FaSubway
                size={30}
                color="#00aeff"
                className={styles.subway_icon}
              />

              <p>м. Мінська</p>
            </div>
            <div className={styles.subway}>
              <FaSubway
                size={30}
                color="#e90202"
                className={styles.subway_icon}
              />

              <p>м. Нивки</p>
            </div>
          </address>
          <Link href="tel:+380631772223" className={styles.contacts_link}>
            063-177-22-23
          </Link>
        </div>
      </div>
    </footer>
  );
};
