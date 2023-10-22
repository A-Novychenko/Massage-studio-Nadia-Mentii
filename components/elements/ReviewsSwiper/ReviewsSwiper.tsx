"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";
import {FaUserAlt, FaRegStar} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./ReviewsSwiper.module.scss";

const ratingIcons = (grade: string) => {
  const qty = Number(grade);

  let stars = [];
  for (let index = 0; index < qty; index += 1) {
    stars.push(<FaRegStar key={index} color={"#f6fa0f"} />);
  }

  return stars;
};

export const ReviewsSwiper = ({data}: {data: ReviewsData[]}) => {
  return (
    <div className={styles.swiper_wrap}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        pagination={{clickable: true}}
        // scrollbar={{draggable: true}}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },

          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {data &&
          data.map(({_id, name, comment, grade, date}: ReviewsData) => {
            const formatedDate = new Date(Number(date)).toLocaleString();

            return (
              <SwiperSlide className={styles.item} key={_id}>
                <div className={styles.comment_box}>
                  <div className={styles.header}>
                    <div className={styles.header_left}>
                      <div className={styles.name_box}>
                        <FaUserAlt />
                        <p className={styles.name}> {name}</p>
                      </div>
                      <p>{formatedDate}</p>
                    </div>

                    <div className={styles.header_right}>
                      {ratingIcons(grade).map((e) => e)}
                      <p className={styles.grade}>{grade}</p>
                    </div>
                  </div>

                  <p className={styles.comment}>{comment}</p>
                  {/* <p className={styles.comment}>
                    Я хочу поділитися своїм враженням про оздоровчий масаж, який
                    я отримав у вашому салоні. Це був неймовірний досвід, який
                    відразу поліпшив моє самопочуття та фізичний стан. Масажист
                    виявився дуже професійним і уважним до моїх потреб. Він
                    знає, як правильно впливати на мої м'язи та сприяти їх
                    розслабленню. Після процедури я відчуваю велику полегшеність
                    у спині та плечах, а також покращення кровообігу. Масаж
                    також допоміг зняти напругу та стрес, що дозволило мені
                    почуватися більш зосередженим і енергійним. Я багато разів
                    відвідував різні салони масажу, але ваш був найкращим з
                    усіх. Рекомендую всім спробувати оздоровчий масаж у вашому
                    салоні - це справжня насолода для тіла і душі спробувати
                    оздоровчий масаж у вашому салоні - це справжня насолода для
                    тіла і душі ваш був найкращим з усіх. Рекомендую всім
                    спробувати оздоровчий масаж у вашому салоні - це справжня
                    насолода для тіла і душі спробувати оздоровч ий масаж у
                    вашому салоні - це справжня насолода для тіла і душіий масаж
                    у вашому салон
                  </p> */}
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};
