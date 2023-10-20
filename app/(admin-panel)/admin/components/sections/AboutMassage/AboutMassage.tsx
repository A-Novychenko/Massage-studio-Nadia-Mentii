import {AdminAboutMassageList} from "../../elements/Lists/AboutMassageList/AboutMassageList";
import {AdminAboutMassageForm} from "../../elements/Forms/AboutMassageForm/AboutMassageForm";
import styles from "./AboutMassage.module.scss";

export const AdminAboutMassage = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Секція про масаж</h2>
        <AdminAboutMassageList />
        <AdminAboutMassageForm />
      </div>
    </section>
  );
};
