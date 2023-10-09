import Image from "next/image";
import styles from "./page.module.css";

import {BannerSection} from "@/components/sections/Banner/BannerSection";
import {SessionsSection} from "@/components/sections/Sessions/Sessions";
import {ReviewsSection} from "@/components/sections/Reviews/Reviews";

export default function Home() {
  return (
    <main>
      <BannerSection />

      <SessionsSection />
      <ReviewsSection />
      {/* <!-- ============  about ================= --> */}
      <section className="about-page section">
        <div className="container">
          <h2 className="about-title title">про масаж</h2>
          <ul className="about-list list">
            <li className="about-item">
              {/* <Image
                className="about__img"
                src="./img/therapeutic-massage.jpg"
                alt=""
                width={648}
                height={300}
              /> */}
              <div className="about-text">
                <h3 className="about-name">Лікувальний масаж</h3>
                <p className="about-description">{`Лікувальний масаж – це найкращий засіб для гарного настрою, позитивного світовідчуття та самопочуття. Поліпшіть тонус м'язів, розженіть лімфу або молочну кислоту, вправте суглоб, зніміть спазми, виведіть солі, токсини, шлаки та зайву рідину, позбавтеся спазмів, набряків, спайок, рубців та ущільнень, покращіть гнучкість зв'язок, відновитеся після травм. Наш лікувальний масаж відмінно допомагає при захворюваннях опорно-рухового апарату: стеохондрозі, артриті, радикуліті, паралічі кінцівок та відновленні після травм. А також при захворюваннях кишечника, дихальних шляхів, нервової системи та проблемах із кровообігом.`}</p>
              </div>
            </li>
            <li className="about-item">
              {/* <Image
                className="about__img"
                src="./img/wellness-massage.jpg"
                alt=""
                width={648}
                height={300}
              /> */}
              <div className="about-text">
                <h3 className="about-name">Оздоровчий масаж</h3>
                <p className="about-description">
                  {`Оздоровчий масаж тіла або загальний масаж - механічна
                  процедура, яка використовується як супутня терапія при різних
                  проблемах зі здоров'ям. Даний масаж допомагає позбутися болю в
                  м'язах, перевтоми, проблем зі шкірою і кровоносною системою, а
                  також виводить з організму токсини.`}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* <!-- ============  /about ================= --> */}
      {/* <!-- ============  cost ================= --> */}
      <section className="about-page section">
        <div className="container">
          <h2 className="about-title title">Вартість сеансів</h2>
          <table className="cost-list">
            <tbody>
              <tr className="cost-item">
                <td className="cost-descr">Лікувальний масаж спини</td>
                <td className="cost-time">25 хв</td>
                <td className="cost-money">400 грн</td>
              </tr>
              <tr className="cost-item">
                <td className="cost-descr">Масаж спини</td>
                <td className="cost-time">45 хв</td>
                <td className="cost-money">700грн</td>
              </tr>
              <tr className="cost-item">
                <td className="cost-descr">Масаж рук</td>
                <td className="cost-time">20 хв</td>
                <td className="cost-money">300 грн</td>
              </tr>
              <tr className="cost-item">
                <td className="cost-descr">Масаж ніг</td>
                <td className="cost-time">30 хв</td>
                <td className="cost-money">400 грн</td>
              </tr>
              <tr className="cost-item">
                <td className="cost-descr">Масаж стоп</td>
                <td className="cost-time">30 хв</td>
                <td className="cost-money">400 грн</td>
              </tr>
              <tr className="cost-item">
                <td className="cost-descr">Масаж шийно-комірцевий</td>
                <td className="cost-time">20 хв</td>
                <td className="cost-money">350 грн</td>
              </tr>
              <tr className="cost-item">
                <td className="cost-descr">
                  Класичний загальнооздоровчий масаж
                </td>
                <td className="cost-time">60 хв</td>
                <td className="cost-money">1000 грн</td>
              </tr>
              <tr className="cost-item">
                <td className="cost-descr">Спортивний масаж</td>
                <td className="cost-time">45 хв</td>
                <td className="cost-money">850 грн</td>
              </tr>
              <tr className="cost-item">
                <td className="cost-descr">Лімфодренажний масаж</td>
                <td className="cost-time">45 хв</td>
                <td className="cost-money">550 грн</td>
              </tr>
              <tr className="cost-item">
                <td className="cost-descr">Антицелюлітний масаж</td>
                <td className="cost-time">40 хв</td>
                <td className="cost-money">750грн</td>
              </tr>
              <tr className="cost-item">
                <td className="cost-descr">Обгортування STYX Cello gel</td>
                <td className="cost-time">30 хв</td>
                <td className="cost-money">600 грн</td>
              </tr>
              <tr className="cost-item">
                <td className="cost-descr">
                  Антицелюлітний масаж з обгортуванням STYX Cello gel
                </td>
                <td className="cost-time">90 хв</td>
                <td className="cost-money">1200 грн</td>
              </tr>
              <tr className="cost-item">
                <td className="cost-descr">Глибокотканний масаж обличчя</td>
                <td className="cost-time">30 хв</td>
                <td className="cost-money">500 грн</td>
              </tr>
              <tr className="cost-item">
                <td className="cost-descr">- з букальними техніками</td>
                <td className="cost-time">40 хв</td>
                <td className="cost-money">+100грн</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* <!-- ============  /cost ================= --> */}
    </main>
  );
}
