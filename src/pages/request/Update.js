import Category from "../../components/common/category/Category";
import Button from "../../components/common/button/Button";
import styled from "styled-components";
import styles from "./RequestWrite.module.css";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Update() {
  const navi = useNavigate();
  const [post, setPost] = useState([]);
  let { num } = useParams();
  useEffect(() => {
    fetch(`http://192.168.31.151:8080/post?id=${num}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbHNydWR0ajE1MjdAZ21haWwuY29tIiwiaWQiOjEsImV4cCI6MTY3OTY0MDk0MywidXNlcm5hbWUiOiJrYWthb18yNjk1NzU5MDgwIn0.NgNZTV2AKwbIFKDeONJXzm1Qu9d2ds4y9iNGnIe1er09eCCttJIXo6XkzRH5s6bG7IZCr4dRE5-8yRgUMrmV1g",

        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  const handleValueChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    }); // submit action을 안타도록 설정
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (post.title == "" || post.content == "") {
      alert("제목과 내용을 모두 입력하세요!");
      return;
    }

    fetch(`http://192.168.31.151:8080/post?id=${num}`, {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbHNydWR0ajE1MjdAZ21haWwuY29tIiwiaWQiOjEsImV4cCI6MTY3OTY0MDk0MywidXNlcm5hbWUiOiJrYWthb18yNjk1NzU5MDgwIn0.NgNZTV2AKwbIFKDeONJXzm1Qu9d2ds4y9iNGnIe1er09eCCttJIXo6XkzRH5s6bG7IZCr4dRE5-8yRgUMrmV1g",

        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        console.log("POST결과", res);
        alert("수정되었습니다.");
        navi(`/request/${num}`);
      });
  };

  return (
    <>
      <Category category={"신고 / 순찰 요청"} text={"순찰요청"} />
      <div className={styles.title}>
        순찰을 원하는 장소와 이유를 적어주세요!
      </div>
      <form onSubmit={handleSubmit}>
        <MainBox>
          <PostsBox>
            <div className={styles.inputBox}>
              <div className={styles.titleBox}>
                <p className={styles.titleP}>제목</p>
                <input
                  onChange={handleValueChange}
                  name="title"
                  type="text"
                  size="5"
                  placeholder="제목을 입력해 주세요."
                  value={post.title}
                  className={styles.titleInput}
                  required
                />
              </div>
              <Hr />
              <div className={styles.contentBox}>
                <p className={styles.contentP}>내용</p>
                <textarea
                  onChange={handleValueChange}
                  name="content"
                  placeholder="내용을 입력해 주세요."
                  className={styles.contentInput}
                  value={post.content}
                  required
                ></textarea>
              </div>
            </div>
          </PostsBox>
        </MainBox>
        <div className={styles.btnBox}>
          <span className={styles.btn2}>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " click" : "")
              }
              to="/request"
              style={{ textDecoration: "none" }}
            >
              <Button selectBtn={6} text={"목록"} />
            </NavLink>
          </span>
          <span className={styles.btn}>
            <button type="submit">등록하기</button>
          </span>
        </div>
      </form>
    </>
  );
}

const Hr = styled.hr`
  height: 0.8px;
  width: calc(100% - 2%);
  background-color: rgba(0, 0, 0, 0.2);
  border: 0;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PostsBox = styled.form`
  margin: auto;
  width: calc(100% - 3%);
  min-height: 600px;
  box-shadow: 1px 1px 40px #909090;
  letter-spacing: -0.5px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 3px;
`;

const MainBox = styled.div`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export default Update;
