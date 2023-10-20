import {AddComment} from "@/components/elements/AddComment/AddComment";
import {ReviewsSwiper} from "@/components/elements/ReviewsSwiper/ReviewsSwiper";

import styles from "./Reviews.module.scss";

export const ReviewsSection = async () => {
  // const res = await fetch("http://localhost:3000/api/reviews/");
  // Novik
  const res = await fetch(`${process.env.BASE_HOST}/api/reviews`);

  const {data} = await res.json();

  return (
    <section className={styles.section} id="reviews">
      <div className="container">
        <h2 className={styles.title}>відгуки</h2>
        <ReviewsSwiper data={data?.reverse()} />

        <AddComment />
      </div>
    </section>
  );
};
