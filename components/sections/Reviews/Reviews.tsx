import {AddComment} from "@/components/elements/AddComment/AddComment";
import styles from "./Reviews.module.scss";

export const ReviewsSection = async () => {
  const res = await fetch("http://127.0.0.1:1337/api/reviews/");

  const {data} = await res.json();

  // console.log("data", data);

  return (
    <section className={styles.section} id="reviews">
      <div className="container">
        <h2 className={styles.title}>відгуки</h2>
        <ul className={styles.list}>
          {data &&
            data.map(
              ({
                attributes,
                id,
              }: {
                attributes: CommentAttributes;
                id: number;
              }) => {
                const {name, comment, grade, createdAt} = attributes;

                return (
                  <li key={id} className={styles.item}>
                    <div className={styles.comment_box}>
                      <p>{name}</p>
                      <p>{comment}</p>
                      <p>{grade}</p>
                      <time>{createdAt}</time>
                    </div>
                  </li>
                );
              }
            )}
          <li className={styles.item}>
            <div className={styles.comment_box}>
              <AddComment />
            </div>
          </li>
        </ul>
        <a
          href="https://www.instagram.com/stories/highlights/17955379342752520/"
          className={styles.link}
          target="_blank"
        >
          більше відгуків в <b className="instagram-logo">Instagram</b>
        </a>
      </div>
    </section>
  );
};
