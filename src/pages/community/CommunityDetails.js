import Button from "../../components/common/button/Button";
import Category from "../../components/common/category/Category";
import styled from "styled-components";
import styles from "./CommunityDetails.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faCircleUser,
  faEye,
} from "@fortawesome/free-regular-svg-icons";

function CommunityDetails({ user }) {
  const navi = useNavigate();
  const [list, setList] = useState([]);
  const [comments, setCommnets] = useState([]);
  const [listSplit, setListsplit] = useState();
  let { num } = useParams();
  console.log("num: ", num);

  useEffect(() => {
    // 게시글 가져오기 GET
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
        setList(res);
        setCommnets(res.comments);
        setListsplit(res.content.split("\n"));
        console.log("res21", res.content.split("\n"));
        console.log("res: ", res);
        console.log("res.com: ", res.comments);
      });
  }, []);

  // 게시글 삭제
  const deletePost = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(
        `https://port-0-pipi-6g2llfcg53ue.sel3.cloudtype.app/post?id=${num}`,
        {
          method: "DELETE",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      ).then(() => {
        alert("삭제되었습니다.");
        navi(`/community`);
      });
    } else {
      alert("취소되었습니다.");
    }
  };

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
    fetch(
      `https://port-0-pipi-6g2llfcg53ue.sel3.cloudtype.app/comment?post_id=${num}`,
      {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert("등록되었습니다.");
        window.location.reload();
      });
  };

  // 댓글 삭제
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
      return;
    }
  };

  // 로그인 해야만 글쓰기 가능
  const loginClick = () => {
    if (user.length === 0) {
      alert("로그인이 필요합니다.");
      return;
    } else {
      navi("/community-write");
    }
  };

  // \n 처리
  // const listSplit = list != "" ? list.content.split("\n") : [1, 2, 3];
  console.log("split해보자: ", listSplit);
  if (listSplit == "") {
    setListsplit([1, 2, 3]);
  }

  // -------------------------------------------------------
  return (
    <>
      <Category category={"커뮤니티 - 동네 정보 공유"} text={"커뮤니티"} />
      <MainBox>
        <PostsBox>
          {/* 게시글 - 타이틀, 유저 정보 */}
          <div className={styles.subject}>
            <div className={styles.title}>{list.title}</div>
            <div className={styles.postInfo}>
              <div className={styles.userBox}>
                <div className={styles.img}>
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    className={styles.img2}
                  />
                </div>
                <div className={styles.userInfo}>
                  <div className={styles.userId}>{list.writer}</div>
                  <div className={styles.created}>{list.createdDate}</div>
                </div>
              </div>
              <div className={styles.InfoBox}>
                <div className={styles.hits}>
                  <FontAwesomeIcon icon={faEye} />
                  <div style={{ margin: "0 5px" }}>조회수</div>
                  <div>{list.hit ? list.hit : 0}</div>
                </div>
                <div className={styles.comment}>
                  <FontAwesomeIcon icon={faCommentDots} />
                  <div style={{ margin: "0 5px" }}>댓글</div>
                  <div>{list.comments ? list.comments.length : 0}</div>
                </div>
              </div>
            </div>
          </div>
          <Hr />

          {/* 게시글 수정 및 삭제 - 작성자 본인만 게시글 수정/삭제 가능 */}
          {list.writer === user.name ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginRight: "30px",
              }}
            >
              <NavLink
                to={`/community-update/${num}`}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  marginLeft: "10px",
                }}
              >
                <button className={styles.commentBtn}>수정</button>
              </NavLink>
              <button onClick={deletePost} className={styles.commentBtn}>
                삭제
              </button>
            </div>
          ) : (
            <></>
          )}

          {/* 게시글 콘텐츠*/}
          <div className={styles.content}>
            {listSplit &&
              listSplit.map((list) => (
                <div>
                  {list}
                  <br />
                </div>
              ))}
          </div>
          <Hr />

          {/* 댓글 */}
          <div className={styles.commentBox}>
            <div className={styles.commentTitle}>댓글</div>
            <div>
              {comments.map(({ id, nickname, createdDate, content }) => (
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className={styles.commentUser}>
                      <div className={styles.img}>
                        <FontAwesomeIcon
                          icon={faCircleUser}
                          className={styles.img2}
                        />
                      </div>
                      <div
                        className={styles.userId}
                        style={{ margin: "0 10px" }}
                      >
                        {nickname}
                      </div>
                      <div className={styles.created}>{createdDate}</div>
                    </div>
                    {user.name == nickname ? (
                      <div>
                        <button
                          onClick={() => deleteComment(id)}
                          className={styles.commentBtn}
                        >
                          삭제
                        </button>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className={styles.commentContent}>{content}</div>
                  <Hr />
                </div>
              ))}

              {user.length === 0 ? (
                <div style={{ margin: "0 0 20px 10px", color: "gray" }}>
                  로그인이 필요합니다.
                </div>
              ) : (
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
              )}
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
        <span className={styles.btn2} onClick={loginClick}>
          <Button selectBtn={1} text={"작성하기"} />
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
