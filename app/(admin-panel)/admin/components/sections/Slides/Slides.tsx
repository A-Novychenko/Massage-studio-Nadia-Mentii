import {AdminSlidesForm} from "../../elements/Forms/SlidesForm/SlidesForm";
import {AdminUploadImg} from "../../elements/UploadImg/UploadImg";

import styles from "./Slides.module.scss";

export const AdminSlidesSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>slides</h2>

        <AdminSlidesForm />
      </div>
    </section>
  );
};
