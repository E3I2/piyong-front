import React, { useEffect } from "react";
import styles from "./Info.module.css";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import omoPath from "./omo.png";
import recodePath from "./순찰일지.png";
import requestPath from "./순찰요청.png";
import communityPath from "./커뮤니티.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-regular-svg-icons";

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
        <h2 className={styles.h2}>삐용이는?</h2>
        <Hr />
        <div data-aos="fade-right" className={styles.robotBox}>
          <div className={styles.omoInfo1}>
            <span style={{ color: "#007cba" }}>삐용이는</span> 경찰 보조용 순찰
            로봇으로, <br />
            시민의 안전을 위해 좁은 골목길이나 cctv가 없는 지역을 파악해 순찰 할
            수 있도록 개발된 로봇입니다.
          </div>
          <img src={omoPath} className={styles.omo} />
        </div>
        <Hr />
        <div data-aos="fade-left" className={styles.robotBox2}>
          <div className={styles.scan}>
            <div className={styles.thief}></div>
          </div>
          <div className={styles.omoInfo2}>
            <span style={{ color: "#007cba" }}>삐용이는</span> 수배중인 범인의
            얼굴이나 지역 범죄자의 얼굴을 학습해, 순찰 중 학습한 인물과 만나면
            그 즉시 모니터링 창을 통해 만난 장소와 만난 사람에 관한 메시지를
            보냅니다.
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className={styles.arrow}>
        ▼
      </div>
      <div className={styles.item} data-aos="fade-up">
        <h2 className={styles.h2}>삐용이 사용법</h2>
        <Hr />
        <div data-aos="fade-right" className={styles.pageBox}>
          <div className={styles.pageInfo}>
            <h3 className={styles.step}>Step 1. 순찰일지</h3>
            <div className={styles.stepInfo}>
              삐용이가 순찰한 골목의 정보를 확인하세요.
              <br />
              시간대별 유동인구 수와 범죄자 이동 정보를 확인할 수 있어요!
              <p></p>
              <NavLink
                to="./recode"
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                <span className={styles.go}>바로가기</span>
              </NavLink>
            </div>
          </div>
          <img src={recodePath} className={styles.pageImg} />
        </div>
        <Hr />
        <div data-aos="fade-left" className={styles.pageBox}>
          <img src={requestPath} className={styles.pageImg} />
          <div className={styles.pageInfo}>
            <h3 className={styles.step2}>Step 2. 순찰요청</h3>
            <div className={styles.stepInfo2}>
              삐용이에게 순찰 요청을 남겨주세요.
              <br />
              으스스한 골목길, 사람이 들어가지 못하는 곳!
              <br />
              동네 구석구석 순찰해 드립니다.
              <br />
              순찰이 완료되면 답변을 남겨드릴게요.
              <p></p>
              <NavLink
                to="./request"
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                <span className={styles.go2}>바로가기</span>
              </NavLink>
            </div>
          </div>
        </div>
        <Hr />
        <div data-aos="fade-right" className={styles.pageBox}>
          <div className={styles.pageInfo}>
            <h3 className={styles.step}>Step 3. 커뮤니티</h3>
            <div className={styles.stepInfo}>
              우리 동네, 이웃 동네 정보를 함께 공유해요.
              <br />
              교육, 생활 등 다양한 정보를 공유할 수 있어요!
              <br />
              게시글을 남기고 댓글로 소통하세요.
              <p></p>
              <NavLink
                to="./community"
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                <span className={styles.go}>바로가기</span>
              </NavLink>
            </div>
          </div>
          <img src={communityPath} className={styles.pageImg} />
        </div>
      </div>
      <div data-aos="fade-up" className={styles.arrow}>
        ▼
      </div>
      <div className={styles.item2} data-aos="fade-up">
        <div>
          국민 안전 지킴이 삐용이
          <br />
          <br />
          국민의 안전과 행복을 수호하는 선진 치안 로봇
          <br />
          안전하고 행복한 도시를 위해 삐용이는 오늘도 힘차게 달립니다!
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

export default Card;
