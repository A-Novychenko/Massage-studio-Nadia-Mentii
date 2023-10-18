import {AdminSlidesForm} from "../../elements/Forms/SlidesForm/SlidesForm";
import {AdminSlidesList} from "../../elements/SlidesList/SlidesList";

import styles from "./Slides.module.scss";

export const AdminSlidesSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Слайди головного банера</h2>
        <AdminSlidesList />
        <AdminSlidesForm />
      </div>
    </section>
  );
};
