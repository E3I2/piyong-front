import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import axios from "axios";

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
        .then((res) => res.headers.get("Authorization"))
        .then((token) => localStorage.setItem("token", token))
        .then(() => {
          navi("/");
          window.location.reload();
        });
    }
  }, []);
  useEffect(() => {});
  return <>로그인중</>;
}

export default ReLogin;
