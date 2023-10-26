"use client";

import {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaInstagram} from "react-icons/fa";
import {SlScreenSmartphone} from "react-icons/sl";

import styles from "./BurgerMenu.module.scss";
import {link} from "fs";
import Link from "next/link";

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

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className={styles.burger_menu_btn}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <GiHamburgerMenu size={30} color="#fff" />
      </button>

      {isOpen && (
        <div className={styles.mobile_menu}>
          <div className={styles.mobile_menu_container}>
            <button
              type="button"
              className={styles.close_btn}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <AiOutlineClose size={30} />
            </button>
            <div>
              <ul className={styles.mobile_menu_nav}>
                {links &&
                  links.map(({title, href}, i) => (
                    <li key={i}>
                      <Link
                        href={href}
                        className={styles.mobile_menu_link}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <div className={styles.mobile_menu_contacts_item}>
                <Link
                  href="tel:+380631772223"
                  className={styles.mobile_menu_phone}
                >
                  <SlScreenSmartphone size={25} />
                  063-177-22-23
                </Link>
              </div>
              <div className={styles.mobile_menu_contacts_item}>
                <Link
                  href="https://www.instagram.com/nm_massagekiev/"
                  className={styles.mobile_menu_social_link}
                >
                  <FaInstagram size={30} />
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
