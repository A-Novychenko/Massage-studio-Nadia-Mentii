import {mongoApi} from "@/services/mongoApi";

import styles from "./PriceList.module.scss";

export const AdminPriceList = async () => {
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
    <div className={styles.section}>
      <h2 className={styles.name_subsection}>Прайс послуг</h2>
      <table className={styles.list}>
        <tbody>
          {data &&
            data.map(({_id, service, price, duration}: PriceData) => {
              return (
                <tr className={styles.item} key={_id}>
                  <td className={styles.service}>{service}</td>
                  <td className={styles.duration}>{duration}</td>
                  <td className={styles.price}>{price}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
