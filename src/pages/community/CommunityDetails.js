import Button from "../../components/common/button/Button";
import Category from "../../components/common/category/Category";
import styled from "styled-components";
import styles from "./CommunityDetails.module.css";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { isElementType } from "@testing-library/user-event/dist/utils/misc/isElementType";

function CommunityDetails() {
  const [list, setList] = useState([]);
  let { num } = useParams();
  console.log("num: ", num);

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
      .then((data) => setList(data))
      .then(console.log(list));
  // }, []);
  }, [num, list]);

  // 댓글 POST
  const [post, setPost] = useState({
    content: "",
  });

  const handleValueChange = (e) => {
    setPost({
      content: e.target.value,
    });
    console.log(post);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://192.168.31.151:8080/comment?post_id=6", {
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
      });
  };

  return (
    <>
      <Category category={"커뮤니티 - 동네 정보 공유"} text={"커뮤니티"} />
      <MainBox>
        <PostsBox>
          <div className={styles.subject}>
            <div className={styles.title}>{list.title}</div>
            <div className={styles.postInfo}>
              <div className={styles.userBox}>
                <div className={styles.img}></div>
                <div className={styles.userInfo}>
                  <div className={styles.userId}>{list.writer}</div>
                  <div className={styles.created}>{list.createdDate}</div>
                </div>
              </div>
              <div className={styles.InfoBox}>
                <div className={styles.comment}>
                  <div>○</div>
                  <div>댓글</div>
                  <div>{list.comments ? list.comments.length : 0}</div>
                </div>
              </div>
            </div>
          </div>
          <Hr />
          <div className={styles.content}>{list.content}</div>
          <Hr />

          {/* 댓글 */}
          <div className={styles.commentBox}>
            <div className={styles.commentTitle}>댓글</div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <div className={styles.commentUser}>
                  <div className={styles.img}></div>
                  <div className={styles.userId} style={{ margin: "0 10px" }}>
                    아이디
                  </div>
                  <div className={styles.created}>2023.03.22. 13:28</div>
                </div>
                <div>
                  <button className={styles.commentBtn}>수정</button>
                  <button className={styles.commentBtn}>삭제</button>
                </div>
              </div>
              <div className={styles.commentContent}></div>
              <Hr />
              <form
                className={styles.commentPostBox}
                onSubmit={(e) => handleSubmit(e)}
              >
                <textarea
                  placeholder="댓글을 입력해 주세요."
                  className={styles.commentPost}
                  onChange={(e) => handleValueChange(e)}
                ></textarea>
                <button className={styles.commentPostBtn} type="submit">
                  등록
                </button>
              </form>
            </div>
          </div>
        </PostsBox>
      </MainBox>

      {/* 버튼 */}
      <div className={styles.btnBox}>
        <span className={styles.btn}>
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
        <span className={styles.btn2}>
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
    </>
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
  box-shadow: 1px 1px 15px #909090;
  letter-spacing: -0.5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
`;

const MainBox = styled.div`
  margin: auto;
  margin-top: 40px;
  margin-bottom: 30px;
`;

export default CommunityDetails;
