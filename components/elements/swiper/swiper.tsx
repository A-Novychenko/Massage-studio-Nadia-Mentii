"use client";

import {useState} from "react";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";

import {BannerModal} from "../Modals/BannerModal/BannerModal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./swiper.module.scss";

export const BannerSwiper = ({slides}: {slides: BannerData}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.swiper_wrap}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        // scrollbar={{draggable: true}}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slides &&
          slides.map(({_id, title, imgLink}) => {
            return (
              <SwiperSlide key={_id}>
                <div className={styles.slide_wrap}>
                  <Image
                    src={imgLink}
                    alt={title}
                    width={1296}
                    height={600}
                    className={styles.slide_img}
                  />
                  <div className={styles.title_wrap}>
                    <p className={styles.title}>{title}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>

      <button className={styles.link} type="button" onClick={openModal}>
        Записатись на сеанс
      </button>
      <BannerModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};
