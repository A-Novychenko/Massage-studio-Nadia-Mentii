import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      {/* <!-- ============  hero ================= --> */}
      <section className="hero-page">
        <h1 className="hero-title">Оздоровчі та лікувальні масажі</h1>
        <a
          className="btn primary btn-hero link"
          href="https://t.me/Mentiy_Nadiya"
          target="_blank"
          rel="noopener"
        >
          Записатись на сеанс
        </a>
        <a
          className="btn primary btn-hero link consalt"
          href="https://t.me/Mentiy_Nadiya"
          target="_blank"
          rel="noopener"
        >
          Отримати консультацію
        </a>
      </section>
      {/* <!-- ============  /hero ================= --> */}

      {/* <!-- ============  sessions ================= --> */}
      <section className="sessions-page section" id="sessions">
        <div className="container">
          <h2 className="sessions-title title">сеанси</h2>
          <ul className="sessions-list list">
            <li className="sessions-item">
              {/* <Image
                src="./img/massage-spyny.jpg"
                alt=""
                className="sessions-img"
                width={280}
                height={280}
              /> */}
              <h3 className="sessions-title-item">Лікувальний масаж спини</h3>
            </li>
            <li className="sessions-item">
              {/* <Image
                src="./img/likuvalnyi-massage.jpg"
                alt=""
                className="sessions-img"
                width={280}
                height={280}
              /> */}
              <h3 className="sessions-title-item">Оздоровчий масаж</h3>
            </li>
            <li className="sessions-item">
              {/* <Image
                src="./img/likuvalnyi-massage-obluchcha.jpg"
                alt=""
                className="sessions-img"
                width={280}
                height={280}
              /> */}
              <h3 className="sessions-title-item">Масаж обличчя</h3>
            </li>
            <li className="sessions-item">
              {/* <Image
                src="./img/massage-stop.jpg"
                alt=""
                className="sessions-img"
                width={280}
                height={280}
              /> */}
              <h3 className="sessions-title-item">Масаж стоп</h3>
            </li>
            <li className="sessions-item">
              {/* <Image
                src="./img/massage-ruk.jpg"
                alt=""
                className="sessions-img"
                width={280}
                height={280}
              /> */}
              <h3 className="sessions-title-item">Масаж рук</h3>
            </li>
            <li className="sessions-item">
              {/* <Image
                src="./img/massage-g55aa961e4.jpg"
                alt=""
                className="sessions-img"
                width={280}
                height={280}
              /> */}
              <h3 className="sessions-title-item">Антицелюлітний масаж</h3>
            </li>
          </ul>
        </div>
      </section>
      {/* <!-- ============  /sessions ================= --> */}

      {/* <!-- ============  reviews ================= --> */}
      <section className="reviews-page section" id="reviews">
        <div className="container">
          <h2 className="reviews-title title">відгуки</h2>
          <ul className="reviews-list list">
            {/* <!-- <li className="reviews-item">
                        <p className="reviews-name">Name Name</p>
                        <p className="reviews-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                            culpa modi illo nesciunt corporis ab praesentium aspernatur nisi! Deleniti nemo voluptatum
                            quaerat nisi id atque hic quasi doloremque, quas vel veritatis commodi laboriosam beatae
                            animi labore impedit. Cupiditate quam, nihil atque eos a dolore, corporis error commodi,
                            fugiat optio eum!</p>
                    </li>
                    <li className="reviews-item">
                        <p className="reviews-name">Name Name</p>
                        <p className="reviews-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                            culpa modi illo nesciunt corporis ab praesentium aspernatur nisi! Deleniti nemo voluptatum
                            quaerat nisi id atque hic quasi doloremque, quas vel veritatis commodi laboriosam beatae
                            animi labore impedit. Cupiditate quam, nihil atque eos a dolore, corporis error commodi,
                            fugiat optio eum!</p>
                    </li>
                    <li className="reviews-item">
                        <p className="reviews-name">Name Name</p>
                        <p className="reviews-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                            culpa modi illo nesciunt corporis ab praesentium aspernatur nisi! Deleniti nemo voluptatum
                            quaerat nisi id atque hic quasi doloremque, quas vel veritatis commodi laboriosam beatae
                            animi labore impedit. Cupiditate quam, nihil atque eos a dolore, corporis error commodi,
                            fugiat optio eum!</p>
                    </li> --> */}
            <li className="sessions-item">
              {/* <Image
                src="./img/vidguk1.jpg"
                alt="review"
                className="sessions-img"
                width={280}
                height={280}
              /> */}
            </li>
            <li className="sessions-item">
              {/* <Image
                src="./img/vidguk2.jpg"
                alt="review"
                className="sessions-img"
                width={280}
                height={280}
              /> */}
            </li>
            <li className="sessions-item">
              {/* <Image
                src="./img/vidguk3.jpg"
                alt="review"
                className="sessions-img"
                width={280}
                height={280}
              /> */}
            </li>
          </ul>
          <a
            href="https://www.instagram.com/stories/highlights/17955379342752520/"
            className="reviews-link link"
            target="_blank"
          >
            більше відгуків в <b className="instagram-logo">Instagram</b>
          </a>
        </div>
      </section>
      {/* <!-- ============  /reviews ================= --> */}

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
