import styles from "./Request.module.css";
import styled from "styled-components";
import Category from "../../components/common/category/Category";
import Button from "../../components/common/button/Button";
import Posts from "../../server/config/Posts";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Request({ user }) {
  // navi
  const navi = useNavigate();

  return (
    <div>
      <Category category={"신고 / 순찰 요청"} text={"순찰요청"} />
      <div className={styles.title}>
        순찰이 필요하다면 언제든지 삐용이에게 요청하세요!
      </div>
      <span className={styles.btn}>
        {user == null ? (
          alert("로그인이 필요합니다.")
        ) : (
          <NavLink
            className={({ isActive }) =>
              "nav-link" + (isActive ? " click" : "")
            }
            to="/request-write"
            style={{ textDecoration: "none" }}
          >
            <Button selectBtn={1} text={"작성하기"} />
          </NavLink>
        )}
      </span>
      <MainBox>
        <hr className={styles.hr} />
        <PostsBox>
          <header className={styles.header}>
            <p className={styles.num}>번호</p>
            <br />

            <p className={styles.state}>진행상태</p>
          </header>
          <Hr />
          <Posts />
        </PostsBox>
        <hr className={styles.hr} />
      </MainBox>
    </div>
  );
}

const Hr = styled.hr`
  height: 0.8px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border: 0;
  margin: auto;
`;

const PostsBox = styled.div`
  margin: auto;
  width: calc(100% - 3%);
  height: 100%;
  box-shadow: 1px 1px 40px #909090;
  letter-spacing: -0.5px;
`;

const MainBox = styled.div`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export default Request;
