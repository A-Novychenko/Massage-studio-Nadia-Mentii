import {mongoApi} from "@/services/mongoApi";
import {BuyBtn} from "@/components/elements/BuyBtn/BuyBtn";
import {PriceModal} from "@/components/elements/Modals/PriceModal/PriceModal";

import styles from "./Price.module.scss";

export const PriceSection = async () => {
  const initialData = [
    {
      _id: "1",
      service: "",
      price: "",
      duration: "",
    },
  ];

  const mongoApiParams = {
    action: "find",
    data: null,
    collection: "prices",
  };

  const res = await mongoApi(mongoApiParams);

  const data = res?.documents ? res?.documents : initialData;

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Вартість сеансів</h2>
        <table className={styles.list}>
          <tbody>
            {data &&
              data.map(({_id, service, price, duration}: PriceData) => {
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
