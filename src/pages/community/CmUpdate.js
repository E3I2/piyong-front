import styled from "styled-components";
import styles from "./CommunityWrite.module.css";
import Button from "../../components/common/button/Button";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function CmUpdate() {
  const navi = useNavigate();
  const [list, setList] = useState([]);
  let { num } = useParams();
  useEffect(() => {
    fetch(
      `https://port-0-pipi-6g2llfcg53ue.sel3.cloudtype.app/post?id=${num}`,
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((res) => setList(res));
  }, []);

  const handleValueChange = (e) => {
    setList({
      ...list,
      [e.target.name]: e.target.value,
    });
  };
  console.log("change: ", list);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (list.title.length == 0) {
      alert("제목을 입력해 주세요.");
      return;
    } else if (list.content.length == 0) {
      alert("내용을 입력해 주세요.");
      return;
    }

    fetch(
      `https://port-0-pipi-6g2llfcg53ue.sel3.cloudtype.app/post?id=${num}`,
      {
        method: "PUT",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(list),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("PUT 결과: ", res);
        alert("수정되었습니다.");
        navi(`/community/${num}`);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.subject}>글쓰기</div>
      <Hr />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputBox}>
          <input
            onChange={handleValueChange}
            name="title"
            className={styles.input}
            type="text"
            placeholder="제목을 입력해 주세요."
            value={list.title}
            required
          />
        </div>
        <div className={styles.textBox}>
          <textarea
            onChange={handleValueChange}
            name="content"
            className={styles.text}
            placeholder="내용을 입력해 주세요."
            value={list.content}
            required
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
            <span className={styles.imgBtn}></span>
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

export default CmUpdate;
