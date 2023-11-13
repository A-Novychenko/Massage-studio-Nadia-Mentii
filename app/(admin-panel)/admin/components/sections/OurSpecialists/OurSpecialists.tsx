import { AdminNewsForm } from "../../elements/Forms/NewsForm/NewsForm";
import { AdminOurSpecialistsForm } from "../../elements/Forms/OurSpecialistsForm/OurSpecialistsForm";
import { AdminNewsList } from "../../elements/Lists/NewsList/NewsList";
import { AdminOurSpecialistsList } from "../../elements/Lists/OurSpecialists/OurSpecialists";
import styles from "./OurSpecialists.module.scss";

export const AdminOurSpecialists = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Наші спеціалісти</h2>
        <AdminOurSpecialistsList />
        <AdminOurSpecialistsForm />
      </div>
    </section>
  );
};
