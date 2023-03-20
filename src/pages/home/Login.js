import styles from "./Login.module.css";
import styled from "styled-components";
import kakaoPath from "./kakao.png";
import googlePath from "./google.png";
function Login({ setModal }) {
  // X 버튼 클릭 시 닫기
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.closeBox}>
          <button onClick={closeModal} className={styles.close}>
            X
          </button>
        </div>
        <div className={styles.titleBox}>
          <p className={styles.logoTitle}>PIYONG</p>
          <p className={styles.logoInfo}>둔산경찰서</p>
        </div>
        <div className={styles.text}>SNS 간편 로그인</div>
        <Hr />
        <div className={styles.loginBox}>
          <div>
            <a
              href="http://192.168.31.151:8080/oauth2/authorization/kakao"
              className={styles.kakaoBox}
            >
              <div className={styles.kakao}>
                <img src={kakaoPath} className={styles.kakaoImg} />
                카카오 계정으로 로그인
              </div>
            </a>
          </div>
          <div>
            <a
              href="http://192.168.31.151:8080/oauth2/authorization/google"
              className={styles.googleBox}
            >
              <div className={styles.google}>
                <img src={googlePath} className={styles.googleImg} />
                구글 계정으로 로그인
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const Hr = styled.hr`
  height: 0.8px;
  width: 90%;
  background-color: rgba(0, 0, 0, 0.2);
  border: 0;
  text-align: center;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default Login;
