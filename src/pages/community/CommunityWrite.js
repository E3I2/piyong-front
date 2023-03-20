import styled from "styled-components";
import Button from "../../components/common/button/Button";
import styles from "./CommunityWrite.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";

function CommunityWrite() {
  const navi = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "커뮤니티게시판",
  });

  const handleValueChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://192.168.31.151:8080/post`, {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbHNydWR0ajE1MjdAZ21haWwuY29tIiwiaWQiOjEsImV4cCI6MTY3OTY0MDk0MywidXNlcm5hbWUiOiJrYWthb18yNjk1NzU5MDgwIn0.NgNZTV2AKwbIFKDeONJXzm1Qu9d2ds4y9iNGnIe1er09eCCttJIXo6XkzRH5s6bG7IZCr4dRE5-8yRgUMrmV1g",

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
        <select></select>
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
          <span>
            <Button selectBtn={8} text={"첨부파일"}>
              <input type="file" accept="image/png, image/jpeg, image/jpg" />
            </Button>
          </span>
          <Button selectBtn={2} text={"등록하기"} type="submit" />
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
