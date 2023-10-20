import {BuyBtn} from "@/components/elements/BuyBtn/BuyBtn";
import styles from "./Price.module.scss";
import {PriceModal} from "@/components/elements/Modals/PriceModal/PriceModal";

export const PriceSection = async () => {
  // const res = await fetch("http://localhost:3000/api/prices/");
  // Novik
  const res = await fetch("/api/prices");

  const {data} = await res.json();

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Вартість сеансів</h2>
        <table className={styles.list}>
          <tbody>
            {data &&
              data.map(({_id, service, price, duration}: Price) => {
                const attributes = {_id, service, price, duration};
                return (
                  <tr className={styles.item} key={_id}>
                    <td className={styles.service}>{service}</td>
                    <td className={styles.duration}>{duration}</td>
                    <td className={styles.price}>{price}</td>
                    <td>
                      <BuyBtn attributes={attributes} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <PriceModal />
    </section>
  );
};
