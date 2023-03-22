import styles from "./Logout.module.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Logout({ setModal }) {
  // X 버튼 클릭 시 닫기
  const closeModal = () => {
    setModal(false);
  };

  // navi 링크
  const navi = useNavigate();

  // 로그아웃
  const logout = () => {
    localStorage.removeItem("token");
    alert("로그아웃되었습니다.");
    navi("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.closeBox}>
          <button onClick={closeModal} className={styles.close}>
            X
          </button>
        </div>
        <div className={styles.logoutBox}>
          <button onClick={logout} className={styles.logout}>
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
