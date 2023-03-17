import React, { useEffect } from "react";
import styles from "./Info.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Card() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.body} id="slide">
      <div className={styles.item} data-aos="fade-up">
        <h1 className={styles.h1}>국민 안전 지킴이 삐용이</h1>
        <p className={styles.p1}>
          국민의 안전과 행복을 수호하는 선진 치안 로봇
        </p>
        <p className={styles.p1}>
          안전하고 행복한 도시를 위해 삐용이는 오늘도 힘차게 달립니다!
        </p>
      </div>
    </div>
  );
}

export default Card;
