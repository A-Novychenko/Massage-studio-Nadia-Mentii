import Link from "next/link";
import {SlScreenSmartphone} from "react-icons/sl";
import {FaTelegram, FaInstagram, FaViber} from "react-icons/fa";

import styles from "./Header.module.scss";
import {BurgerMenu} from "./BurgerMenu/BurgerMenu";

export const HeaderSection = () => {
  const links = [
    {
      title: "Головна",
      href: "/",
    },
    {
      title: "Сеанси",
      href: "#sessions",
    },
    {
      title: "Відгуки",
      href: "#reviews",
    },
    {
      title: "Контакти",
      href: "#contacts",
    },
    {
      title: "Новини",
      href: "/news",
    },
    {
      title: "Питання - Відповідь",
      href: "/questions",
    },
    {
      title: "Про мене",
      href: "/about",
    },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.header_wrap}>
            <Link href="/" className={styles.logo_link}>
              Cтудія <span className={styles.header__space_hidden}>масажу</span>
              <br />
              Надії <span className={styles.header__space_hidden}>Ментій</span>
            </Link>

            <nav className={styles.nav}>
              <ul className={styles.nav_list}>
                {links &&
                  links.map(({title, href}, i) => (
                    <li className={styles.tab_hidden} key={i}>
                      <Link href={href} className={styles.nav_link}>
                        {title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>

            <div className={styles.contacts_box}>
              <div>
                <Link
                  href="tel:+380631772223"
                  className={styles.contacts_phone}
                >
                  <span className={styles.phone_icon_wrap}>
                    <SlScreenSmartphone size={30} />
                  </span>
                  063-177-22-23
                </Link>
              </div>
              <ul className={styles.contacts}>
                <li>
                  <Link
                    href="https://www.instagram.com/nm_massagekiev/"
                    target="_blank"
                    rel="noopener"
                    className={styles.contacts_link}
                  >
                    <FaInstagram size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://t.me/Mentiy_Nadiya"
                    target="_blank"
                    rel="noopener"
                    className={styles.contacts_link}
                  >
                    <FaTelegram size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    className={styles.contacts_link}
                    href="viber://chat?number=%2B38631772223"
                    target="_blank"
                  >
                    <FaViber size={30} />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <BurgerMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
