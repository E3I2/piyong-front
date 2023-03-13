import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <div className={styles.FooterSection}>
        <div className={styles.FooterDiv}></div>
        <div className={styles.FooterTitle}>
          E3I2
          <div className={styles.FooterTitleMiddle}>BACKEND</div>
          <div className={styles.FooterMiddle}>Park Chan Yang</div>
          <div className={styles.FooterMiddle}>Min Kyeong Seo</div>
          <div className={styles.FooterMiddle}>Kim Eom Ji</div>
        </div>
        <div>
          <div className={styles.FooterTitleMiddle2}>FRONTEND</div>
          <div className={styles.FooterMiddle2}>Yang Seon Woong</div>
          <div className={styles.FooterMiddle2}>Lee Eun Hye</div>
        </div>
        <div>
          <div className={styles.FooterTitleMiddle2}>ROS</div>
          <div className={styles.FooterMiddle2}>Kim Eom Ji</div>
          <div className={styles.FooterMiddle2}>Min Kyeong Seo</div>
        </div>
        <div className={styles.FooterTitleEnd}>E3I2</div>
      </div>

      <div className={styles.FooterBottom}>@삐용 - 대전둔산경찰서</div>
    </div>
  );
}

export default Footer;
