import {AdminNewsForm} from "../../elements/Forms/NewsForm/NewsForm";
import {AdminNewsList} from "../../elements/Lists/NewsList/NewsList";
import styles from "./News.module.scss";

export const AdminNews = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Новини</h2>
        <AdminNewsList />
        <AdminNewsForm />
      </div>
    </section>
  );
};
