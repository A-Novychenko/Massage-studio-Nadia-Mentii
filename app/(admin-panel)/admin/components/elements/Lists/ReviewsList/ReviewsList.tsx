import styles from "./ReviewsList.module.scss";

type Colors = {
  [key: string]: string;
};

export const AdminReviewsList = async () => {
  // const res = await fetch("http://localhost:3000/api/reviews/");
  // Novik
  const res = await fetch("/api/reviews");
  const {data} = await res.json();

  const colors: Colors = {
    "1": "#f00",
    "2": "#ff7b00",
    "3": "#fffb00",
    "4": "#7dc000",
    "5": "#23af00",
  };

  return (
    <div className={styles.section}>
      <h2 className={styles.name_subsection}>Список відгуків</h2>
      <ul className={styles.list}>
        {data &&
          data.map(({_id, name, comment, grade, date}: Reviews) => {
            const formatedDate = new Date(Number(date)).toLocaleString();
            return (
              <li
                key={_id}
                className={styles.item}
                style={{borderColor: colors[grade]}}
              >
                <div className={styles.comment_box}>
                  <div className={styles.title_item_box}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.grade} style={{color: colors[grade]}}>
                      {grade}
                    </p>
                  </div>
                  <p className={styles.comment}>{comment}</p>
                  <p className={styles.date}>{formatedDate}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
