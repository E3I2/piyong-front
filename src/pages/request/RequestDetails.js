import Button from "../../components/common/button/Button";
import Category from "../../components/common/category/Category";
import styled from "styled-components";
import styles from "./RequestDetails.module.css";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function RequestDetails({ user }) {
  const navi = useNavigate();
  const [posts, setPosts] = useState([]);
  const [commemts, setComments] = useState([]);
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
      .then((res) => {
        setPosts(res);
        setComments(res.comments);
        console.log("res", res);
        console.log("res.com", res.comments);
      });
  }, []);

  const deletePost = () => {
    fetch(
      `https://port-0-pipi-6g2llfcg53ue.sel3.cloudtype.app/post?id=${num}`,
      {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    ).then(() => {
      if (window.confirm("삭제하시겠습니까?")) {
        alert("삭제되었습니다.");
        navi(`/request`);
      } else {
        alert("취소되었습니다.");
      }
    });
  };

  // 관리자 댓글
  const [comment, setComment] = useState({
    content: "",
  });

  const handleValueChange = (e) => {
    setComment({
      content: e.target.value,
    }); // submit action을 안타도록 설정
    console.log(comment);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://port-0-pipi-6g2llfcg53ue.sel3.cloudtype.app/comment?post_id=${num}`,
      {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert("등록되었습니다.");
        window.location.reload();
      });
  };

  // 관리자 댓글 삭제
  const deleteComment = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(
        `https://port-0-pipi-6g2llfcg53ue.sel3.cloudtype.app/comment?id=${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      ).then(() => {
        alert("삭제되었습니다.");
        window.location.reload();
      });
    } else {
      alert("취소되었습니다.");
    }
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
        </PostsBox>
      </MainBox>

      <MainBox>
        <PostsBox>
          <div
            style={{ margin: "auto", width: "calc(100% - 1%)", height: "100%" }}
          >
            <div className={styles.commentTitle}>삐용이의 답변</div>
            <Hr />
            {/*댓글부분시작*/}
            {commemts.map(({ id, content }) => (
              <div>
                <article key={id}>
                  <div>{id}</div>
                  {content}
                </article>
                <button onClick={() => deleteComment(id)}>삭제</button>
                <Hr />
              </div>
            ))}

            {/* 관리자만 보이게 */}
            {/* {user.role == "USER" ? ( */}
            {user.role === "USER" ? (
              <form
                className={styles.commentBox}
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className={styles.commentImg}></div>
                <textarea
                  placeholder="내용을 입력해 주세요."
                  className={styles.comment}
                  onChange={(e) => handleValueChange(e)}
                ></textarea>
                <span className={styles.btn2}>
                  <Button selectBtn={2} text={"등록"} />
                </span>
              </form>
            ) : (
              <div className={styles.loading}>답변 대기중입니다.</div>
            )}
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
            to="/request"
            style={{ textDecoration: "none" }}
          >
            <Button selectBtn={6} text={"목록"} />
          </NavLink>
        </span>
        {posts.writer === user.name ? (
          <div className={styles.btnBox2}>
            <span onClick={deletePost} className={styles.deleteBtn}>
              <Button selectBtn={7} text={"삭제하기"} />
            </span>
            <NavLink
              to={`/request-update/${num}`}
              style={{
                textDecoration: "none",
                color: "#fff",
                marginLeft: "10px",
              }}
            >
              <Button selectBtn={1} text={"수정하기"} />
            </NavLink>
          </div>
        ) : (
          <></>
        )}
      </div>
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
