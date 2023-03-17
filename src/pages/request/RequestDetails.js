import Button from "../../components/common/button/Button";
import Category from "../../components/common/category/Category";
import styled from "styled-components";
import styles from "./RequestDetails.module.css";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RequestDetails() {
  const [posts, setPosts] = useState([]);
  let { num } = useParams();
  useEffect(() => {
    fetch(`http://192.168.31.151:8080/post?id=${num}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbHNydWR0ajE1MjdAZ21haWwuY29tIiwiaWQiOjEsImV4cCI6MTY3OTY0MDk0MywidXNlcm5hbWUiOiJrYWthb18yNjk1NzU5MDgwIn0.NgNZTV2AKwbIFKDeONJXzm1Qu9d2ds4y9iNGnIe1er09eCCttJIXo6XkzRH5s6bG7IZCr4dRE5-8yRgUMrmV1g",
      },
    })
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .then((res) => console.log("res", res));
  }, []);

  // const updatePost = () => {
  //   fetch(`http://192.168.31.151:8080/post?id=${num}`, {
  //     method: "PUT",
  //     headers: {
  //       Authorization:
  //         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbHNydWR0ajE1MjdAZ21haWwuY29tIiwiaWQiOjEsImV4cCI6MTY3OTY0MDk0MywidXNlcm5hbWUiOiJrYWthb18yNjk1NzU5MDgwIn0.NgNZTV2AKwbIFKDeONJXzm1Qu9d2ds4y9iNGnIe1er09eCCttJIXo6XkzRH5s6bG7IZCr4dRE5-8yRgUMrmV1g",
  //     },
  //   })
  const deletePost = () => {
    fetch(`http://192.168.31.151:8080/post?id=${num}`, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbHNydWR0ajE1MjdAZ21haWwuY29tIiwiaWQiOjEsImV4cCI6MTY3OTY0MDk0MywidXNlcm5hbWUiOiJrYWthb18yNjk1NzU5MDgwIn0.NgNZTV2AKwbIFKDeONJXzm1Qu9d2ds4y9iNGnIe1er09eCCttJIXo6XkzRH5s6bG7IZCr4dRE5-8yRgUMrmV1g",
      },
    });
  };

  return (
    <div>
      <Category category={"신고 / 순찰 요청"} text={"순찰요청"} />
      <MainBox>
        <PostsBox>
          <div
            style={{
              margin: "auto",
              width: "calc(100% - 1%)",
              height: "100%",
            }}
          >
            <div className={styles.box}>
              <div className={styles.title}>
                <div>제</div>
                <div>목</div>
              </div>
              <div className={styles.content}>{posts.title}</div>
            </div>
            <Hr />
            <div className={styles.box}>
              <div className={styles.title}>
                <div>작</div>
                <div>성</div>
                <div>일</div>
                <div>자</div>
              </div>
              <div className={styles.content}>{posts.id}</div>
            </div>
            <Hr />
            <div className={styles.box}>
              <div className={styles.title2}>
                <div>내</div>
                <div>용</div>
              </div>
              <div className={styles.content2}>{posts.content}</div>
            </div>
          </div>

          <NavLink to={`/request-update/${num}`}>
            <button>수정</button>
          </NavLink>
          <br />
          <button onClick={deletePost}>삭제</button>
        </PostsBox>
      </MainBox>
      <MainBox>
        <PostsBox>
          <div
            style={{ margin: "auto", width: "calc(100% - 1%)", height: "100%" }}
          >
            <div className={styles.commentTitle}>삐용이의 답변</div>
            <Hr />
            <div className={styles.commentBox}>
              <div className={styles.commentImg}></div>
              <textarea
                placeholder="내용을 입력해 주세요."
                className={styles.comment}
              ></textarea>
              <span
                className={styles.btn2}
                onClick={() => {
                  alert("등록이 완료되었습니다.");
                }}
              >
                <Button selectBtn={2} text={"등록"} />
              </span>
            </div>
          </div>
        </PostsBox>
      </MainBox>
      <span className={styles.btn}>
        <NavLink
          className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
          to="/request"
          style={{ textDecoration: "none" }}
        >
          <Button selectBtn={6} text={"목록"} />
        </NavLink>
      </span>
    </div>
  );
}

const Hr = styled.hr`
  height: 0.8px;
  width: calc(100% - 1%);
  background-color: rgba(0, 0, 0, 0.2);
  border: 0;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PostsBox = styled.div`
  margin: auto;
  width: calc(100% - 3%);
  min-height: 250px;
  box-shadow: 1px 1px 40px #909090;
  letter-spacing: -0.5px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  padding: 30px 0;
`;

const MainBox = styled.div`
  margin: auto;
  margin-top: 40px;
  margin-bottom: 30px;
`;

export default RequestDetails;
