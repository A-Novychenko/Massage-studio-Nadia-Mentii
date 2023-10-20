import {AdminReviewsForm} from "../../elements/Forms/ReviewsForm/ReviewsForm";
import {AdminReviewsList} from "../../elements/Lists/ReviewsList/ReviewsList";

import styles from "./Reviews.module.scss";

export const AdminReviews = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Відгуки</h2>
        <AdminReviewsList />
        <AdminReviewsForm />
      </div>
    </section>
  );
};
