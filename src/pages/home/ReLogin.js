import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import axios from "axios";
import styled from "styled-components";
import styles from "./ReLogin.module.css";

function ReLogin() {
  const location = useLocation();
  const navi = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];
  console.log(KAKAO_CODE);

  const IP = "https://port-0-pipi-6g2llfcg53ue.sel3.cloudtype.app";

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      fetch(`${IP}/aaa?code=${KAKAO_CODE}`, {
        method: "GET",
      })
        .then((res) => {
          console.log("rrrr: ", res);
          return res.headers.get("Authorization");
        })
        .then((token) => localStorage.setItem("token", token))
        .then(() => {
          navi("/");
          window.location.reload();
        });
    }
  }, []);
  useEffect(() => {});
  return (
    <MainBox>
      <div className={styles.body}>
        <h2 className={styles.h2} data-text="Loading...">
          Loading...
        </h2>
      </div>
    </MainBox>
  );
}

const MainBox = styled.div`
  min-height: 500px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export default ReLogin;
