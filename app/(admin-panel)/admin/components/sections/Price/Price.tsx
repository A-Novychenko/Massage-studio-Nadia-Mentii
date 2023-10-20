import {AdminPriceForm} from "../../elements/Forms/PriceForm/PriceForm";
import {AdminPriceList} from "../../elements/Lists/PriceList/PriceList";
import styles from "./Price.module.scss";

export const AdminPrice = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Ціни</h2>
        <AdminPriceList />
        <AdminPriceForm />
      </div>
    </section>
  );
};
