import {mongoApi} from "@/services/mongoApi";
import {AddComment} from "@/components/elements/AddComment/AddComment";
import {ReviewsSwiper} from "@/components/elements/ReviewsSwiper/ReviewsSwiper";

import styles from "./Reviews.module.scss";

export const ReviewsSection = async () => {
  const initialData = [
    {
      _id: "1",
      name: "",
      comment: "",
      grade: "",
      date: "",
    },
  ];
  const mongoApiParams = {
    action: "find",
    data: null,
    collection: "reviews",
  };

  const res = await mongoApi(mongoApiParams);

  const data = res?.documents ? res?.documents : initialData;

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
