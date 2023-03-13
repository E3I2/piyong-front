import styles from "./Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCheck } from "@fortawesome/free-solid-svg-icons";

function Button({ text, selectBtn }) {
  return (
    <>
      {/* 1. 글쓰기 */}
      {selectBtn == 1 && (
        <button className={styles.btn1}>
          <FontAwesomeIcon icon={faPen} className={styles.icon} />
          <span className={styles.btnText}>{text}</span>
        </button>
      )}

      {/* 2. 등록하기 */}
      {selectBtn == 2 && (
        <button className={styles.btn2}>
          <FontAwesomeIcon icon={faCheck} className={styles.icon} />
          <span className={styles.btnText}>{text}</span>
        </button>
      )}

      {/* 3. 답변 준비중 */}
      {selectBtn == 3 && <button className={styles.btn3}>{text}</button>}

      {/* 4. 답변 완료 */}
      {selectBtn == 4 && <button className={styles.btn4}>{text}</button>}

      {/* 5. 등록 */}
      {selectBtn == 5 && <button className={styles.btn5}>{text}</button>}

      {/* 6. 목록 && 검색 */}
      {selectBtn == 6 && <button className={styles.btn6}>{text}</button>}
    </>
  );
}

export default Button;
