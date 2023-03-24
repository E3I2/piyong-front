import styled from "styled-components";
import Button from "../../components/common/button/Button";
import styles from "./CommunityWrite.module.css";
// import { NavLink, useNavigate, useParams } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function CommunityWrite() {
  const navi = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "자유게시판",
  });

  const handleValueChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (post.title.length == 0) {
    if (post.title.length === 0) {
      alert("제목을 입력해 주세요.");
      return;
    // } else if (post.content.length == 0) {
    } else if (post.content.length === 0) {
      alert("내용을 입력해 주세요.");
      return;
    }

    fetch(`https://port-0-pipi-6g2llfcg53ue.sel3.cloudtype.app/post`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert("등록되었습니다.");
        navi(`/community`);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.subject}>글쓰기</div>
      <Hr />
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <div className={styles.inputBox}>
          <input
            onChange={(e) => handleValueChange(e)}
            name="title"
            className={styles.input}
            type="text"
            placeholder="제목을 입력해 주세요."
          />
        </div>
        <div className={styles.textBox}>
          <textarea
            onChange={(e) => handleValueChange(e)}
            name="content"
            className={styles.text}
            placeholder="내용을 입력해 주세요."
          />
        </div>
        <div className={styles.btnBox}>
          <span className={styles.listBtn}>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " click" : "")
              }
              to="/community"
              style={{ textDecoration: "none" }}
            >
              <Button selectBtn={6} text={"목록"} />
            </NavLink>
          </span>
          <div className={styles.mainBtn}>
            <span className={styles.imgBtn}>
              <Button selectBtn={8} text={"첨부파일"}>
                <input type="file" accept="image/png, image/jpeg, image/jpg" />
              </Button>
            </span>
            <Button selectBtn={2} text={"등록하기"} type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

const Hr = styled.hr`
  height: 0.8px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border: 0;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default CommunityWrite;
