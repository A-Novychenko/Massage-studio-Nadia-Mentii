"use client";

import {GiHamburgerMenu} from "react-icons/gi";

import styles from "./BurgerMenu.module.scss";

export const BurgerMenu = () => {
  return (
    <>
      <button type="button" className={styles.burger_menu}>
        <GiHamburgerMenu size={30} color="#fff" />
      </button>

      <div className={styles.hidden}>
        <div className="mobile-menu js-menu-container" id="mobile-menu">
          <div className="container mobile-menu__container">
            <button
              type="button"
              className="mobile-menu__burger-close js-close-menu"
            >
              <svg className="mobile-menu__icon">
                <use href="./img/sprite.svg#icon-cross"></use>
              </svg>
            </button>
            <div className="mobile__nav">
              <ul id="menu" className="mobile-menu__nav list">
                <li className="mobile-menu__item">
                  <a
                    href="./index.html"
                    className="mobile-menu__link link mobile-menu__link_active"
                  >
                    Головна
                  </a>
                </li>
                <li className="mobile-menu__item">
                  <a href="#sessions" className="mobile-menu__link link">
                    Сеанси
                  </a>
                </li>
                <li className="mobile-menu__item">
                  <a href="#reviews" className="mobile-menu__link link">
                    Відгуки
                  </a>
                </li>
                <li className="mobile-menu__item">
                  <a href="#contacts" className="mobile-menu__link link">
                    Контакти
                  </a>
                </li>
                <li className="mobile-menu__item">
                  <a href="./news.html" className="mobile-menu__link link">
                    Новини
                  </a>
                </li>
                <li className="mobile-menu__item">
                  <a href="./q-and-a.html" className="mobile-menu__link link">
                    Питання - Відповідь
                  </a>
                </li>
                <li className="mobile-menu__item">
                  <a href="./about-me.html" className="mobile-menu__link link">
                    Про мене
                  </a>
                </li>
              </ul>
            </div>

            <div className="mobile-menu__wrapper">
              <div className="mobile-menu__contacts-item">
                <a href="tel:+380631772223" className="mobile-menu__phone link">
                  <svg
                    className="header-icon smartphone-icon"
                    width="25"
                    height="25"
                  >
                    <use href="./img/sprite.svg#icon-phone"></use>
                  </svg>
                  063-177-22-23
                </a>
              </div>
              <div className="mobile-menu__contacts-item">
                <a
                  href="https://www.instagram.com/nm_massagekiev/"
                  className="mobile-menu__social-link link"
                >
                  <svg
                    className="header-icon smartphone-icon"
                    width="30"
                    height="30"
                  >
                    <use href="./img/sprite.svg#icon-instagram"></use>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
