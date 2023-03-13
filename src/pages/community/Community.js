import Category from "../../components/common/category/Category";
import Button from "../../components/common/button/Button";
import styles from "./Community.module.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// import Home from "../../pages/home/Home";

function Community() {
  // 카테고리 옵션 선택
  const [select, setSelect] = useState("0");
  const onSelect = (event) => {
    setSelect(event.target.value);
  };

  // db 서버 연결

  return (
    <div>
      <Category category={"커뮤니티 - 동네 정보 공유"} text={"커뮤니티"} />
      <div>
        <select value={select} onChange={onSelect}>
          <option value={0}>전체</option>
          <option value={1}>둔산동</option>
          <option value={2}>괴정동</option>
          <option value={3}>월평동</option>
        </select>
        {/* {select === "1" ? <Home /> : null} */}
        <div>검색창</div>
        <span className={styles.btn}>
          <NavLink
            className={({ isActive }) =>
              "nav-link" + (isActive ? " click" : "")
            }
            to="/community-write"
            style={{ textDecoration: "none" }}
          >
            <Button selectBtn={1} text={"작성하기"} />
          </NavLink>
        </span>
      </div>
      <MainBox>
        <hr className={styles.hr} />
        <PostsBox>
          <header className={styles.header}>
            <div>번호</div>
            <div>제목</div>
            <div>작성자</div>
            <div>작성일</div>
            <div>조회수</div>
            <div>좋아요</div>
          </header>
          <Hr />
          <div>어쩌구</div>
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

export default Community;
