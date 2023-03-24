import Category from "../../components/common/category/Category";
import Button from "../../components/common/button/Button";
import styled from "styled-components";
import styles from "./RequestWrite.module.css";
// import { NavLink, useNavigate, useParams } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function RequestWrite() {
  const navi = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "신고게시판",
  });

  const handleValueChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    }); // submit action을 안타도록 설정
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
        navi(`/request`);
      });
  };

  return (
    <div>
      <Category category={"신고 / 순찰 요청"} text={"순찰요청"} />
      <div className={styles.title}>
        순찰을 원하는 장소와 이유를 적어주세요!
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <MainBox>
          <PostsBox>
            <div className={styles.inputBox}>
              <div className={styles.titleBox}>
                <p className={styles.titleP}>제목</p>
                <input
                  onChange={(e) => handleValueChange(e)}
                  name="title"
                  type="text"
                  size="5"
                  placeholder="제목을 입력해 주세요."
                  className={styles.titleInput}
                  id="title"
                />
              </div>
              <Hr />
              <div className={styles.contentBox}>
                <p className={styles.contentP}>내용</p>
                <textarea
                  onChange={(e) => handleValueChange(e)}
                  name="content"
                  placeholder="내용을 입력해 주세요."
                  className={styles.contentInput}
                  id="content"
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
            <button type="submit" className={styles.submitBtn}>
              <FontAwesomeIcon icon={faCheck} />
              <span className={styles.btnText}>등록하기</span>
            </button>
          </span>
        </div>
      </form>
    </div>
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

export default RequestWrite;
