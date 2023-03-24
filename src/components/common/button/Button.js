import styles from "./Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";

function Button({ text, selectBtn }) {
  return (
    <>
      {/* 1. 글쓰기 */}
      {/* {selectBtn == 1 && ( */}
      {selectBtn === 1 && (
        <button className={styles.btn1}>
          <FontAwesomeIcon icon={faPen} className={styles.icon} />
          <span className={styles.btnText}>{text}</span>
        </button>
      )}

      {/* 2. 등록하기 */}
      {/* {selectBtn == 2 && ( */}
      {selectBtn === 2 && (
        <button className={styles.btn2}>
          <FontAwesomeIcon icon={faCheck} className={styles.icon} />
          <span className={styles.btnText}>{text}</span>
        </button>
      )}

      {/* 3. 답변 준비중 */}
      {/* {selectBtn == 3 && <button className={styles.btn3}>{text}</button>} */}
      {selectBtn === 3 && <button className={styles.btn3}>{text}</button>}

      {/* 4. 답변 완료 */}
      {/* {selectBtn == 4 && <button className={styles.btn4}>{text}</button>} */}
      {selectBtn === 4 && <button className={styles.btn4}>{text}</button>}

      {/* 5. 등록 */}
      {/* {selectBtn == 5 && <button className={styles.btn5}>{text}</button>} */}
      {selectBtn === 5 && <button className={styles.btn5}>{text}</button>}

      {/* 6. 목록 && 검색 */}
      {/* {selectBtn == 6 && <button className={styles.btn6}>{text}</button>} */}
      {selectBtn === 6 && <button className={styles.btn6}>{text}</button>}

      {/* 7. 삭제하기*/}
      {/* {selectBtn == 7 && ( */}
      {selectBtn === 7 && (
        <button className={styles.btn7}>
          <FontAwesomeIcon icon={faTrashCan} className={styles.icon} />
          <span className={styles.btnText}>{text}</span>
        </button>
      )}

      {/* 8. 사진 첨부하기*/}
      {/* {selectBtn == 8 && ( */}
      {selectBtn === 8 && (
        <button className={styles.btn8}>
          <FontAwesomeIcon icon={faImage} className={styles.icon} />
          <span className={styles.btnText}>{text}</span>
        </button>
      )}
    </>
  );
}

export default Button;
