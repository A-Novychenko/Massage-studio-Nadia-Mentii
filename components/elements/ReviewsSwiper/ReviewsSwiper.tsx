"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./ReviewsSwiper.module.scss";

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
          320: {
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
                  <p>{name}</p>
                  <p>{comment}</p>
                  <p>{grade}</p>
                  <p>{formatedDate}</p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};
