import {AdminSessionForm} from "../../elements/Forms/SessionForm/SessionForm";
import {AdminSessionList} from "../../elements/Lists/SessionList/SessionList";
import styles from "./Session.module.scss";

export const AdminSession = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Картки секції сеанси</h2>
        <AdminSessionList />
        <AdminSessionForm />
      </div>
    </section>
  );
};
