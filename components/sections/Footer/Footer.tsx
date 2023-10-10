import Link from "next/link";
import {MdLocationOn} from "react-icons/md";
import {FaSubway} from "react-icons/fa";

import styles from "./Footer.module.scss";

export const FooterSection = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.wrap}>
          <iframe
            className={styles.goole_map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.997177285008!2d30.439688315915724!3d50.49701029188963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd9cffc5da71%3A0x7a34be694d419e2a!2z0YPQuy4g0KHQtdGA0LNl0Y8g0JTQsNC90YfQtdC90LrQviwgMzIsINCa0LjQtdCyLCAwNDA4NA!5e0!3m2!1sru!2sua!4v1661710925534!5m2!1sru!2sua"
            style={{
              border: 0,
            }}
            //   allowfullscreen: "",
            //   loading: "lazy",
            //   referrerpolicy: "no-referrer-when-downgrade",
          ></iframe>

          <div className={styles.item} id="contacts">
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

                <p>ст.м. Оболонь</p>
              </div>
              <div className={styles.subway}>
                <FaSubway
                  size={30}
                  color="#00aeff"
                  className={styles.subway_icon}
                />

                <p>ст.м. Мінська</p>
              </div>
              <div className={styles.subway}>
                <FaSubway
                  size={30}
                  color="#e90202"
                  className={styles.subway_icon}
                />

                <p>ст.м. Нивки</p>
              </div>
            </address>
            <Link href="tel:+380631772223" className={styles.contacts_link}>
              063-177-22-23
            </Link>
            <Link
              className={styles.btn}
              href="https://t.me/Mentiy_Nadiya"
              target="_blank"
              rel="noopener"
            >
              Записатись на сеанс
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
