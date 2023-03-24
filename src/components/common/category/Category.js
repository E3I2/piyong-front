import styles from "./Category.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function Category({ category, text }) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.backgroundTextBox}>
          <FontAwesomeIcon
            icon={faBookmark}
            size="3x"
            className={styles.bookmark}
          />
          <FontAwesomeIcon
            icon={faBookmark}
            size="3x"
            className={styles.backBookmark}
          />
          <div className={styles.backgroundText}>
            <p className={styles.mainText}>{category}</p>
            <p className={styles.subText}>메인화면 > {text}</p>
          </div>
        </div>
        <div className={styles.backgroundImg}></div>
      </div>
    </div>
  );
}

export default Category;
