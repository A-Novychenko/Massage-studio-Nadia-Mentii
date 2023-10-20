import styles from "./PriceList.module.scss";

export const AdminPriceList = async () => {
  // const res = await fetch("http://localhost:3000/api/prices/");
  // Novik
  const res = await fetch(`${process.env.BASE_HOST}/api/prices`);
  // const res = await fetch(`/api/prices`);

  const {data} = await res.json();

  return (
    <div className={styles.section}>
      <h2 className={styles.name_subsection}>Прайс послуг</h2>
      <table className={styles.list}>
        <tbody>
          {data &&
            data.map(({_id, service, price, duration}: Price) => {
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
