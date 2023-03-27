import React, { useEffect } from "react";
import styles from "./Info.module.css";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import omoPath from "./omo.png";

function Card() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.body} id="slide">
      <div className={styles.item} data-aos="fade-up">
        <h1 className={styles.h1}>
          Korean security robot <span style={{ color: "#B72E1D" }}>PIYONG</span>
        </h1>
        <p className={styles.p1}>
          안전한 대한민국을 위해, <br /> 오늘도 삐용이가 국민과 함께합니다.
        </p>
      </div>
      <div data-aos="fade-up" className={styles.arrow}>
        ▼
      </div>
      <div className={styles.item} data-aos="fade-up">
        <div>
          <h2 className={styles.h2}>삐용이는?</h2>
          <Hr />
          <div data-aos="slide-right" className={styles.robotBox}>
            <div className={styles.omoInfo1}>
              <span style={{ color: "#007cba" }}>삐용이는</span> 경찰 보조용
              순찰 로봇으로, <br />
              시민의 안전을 위해 좁은 골목길이나 cctv가 없는 지역을 파악해 순찰
              할 수 있도록 개발된 로봇입니다.
            </div>
            <img src={omoPath} className={styles.omo} />
          </div>
          <Hr />
          <div data-aos="slide-left">
            <div className={styles.omoInfo2}>
              삐용이는 수배중인 범인의 얼굴이나 지역 범죄자의 얼굴을 학습해,
              순찰 중 학습한 인물과 만나면 그 즉시 모니터링 창을 통해 만난
              장소와 만난 사람에 관한 메시지를 보냅니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Hr = styled.hr`
  height: 0.8px;
  width: 93%;
  background-color: rgba(0, 0, 0, 0.2);
  border: 0;
  margin: auto;
`;

/*
Korean security robot PIYONG
안전한 대한민국을 위해,
오늘도 삐용이가 국민과 함께합니다.


우리의 삐용이는 경찰 보조용 순찰 로봇으로, 
시민의 안전을 위해 좁은 골목길이나 
cctv가 없는 지역을 파악해 순찰 할 수 있도록 개발된 로봇입니다.

삐용이는 수배중인 범인의 얼굴이나 지역 범죄자의 얼굴을 학습해,
순찰 중 학습한 인물과 만나면 그 즉시 모니터링 창을 통해 만난 장소와 만난 사람에 관한 메시지를 보냅니다.

순찰요청 페이지에 순찰이 필요해 보인는 골목길의 순찰을 제보해주시면 삐용이가 달려갑니다.
*/

export default Card;
