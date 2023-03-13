import Category from "../../components/common/category/Category";
import Button from "../../components/common/button/Button";
import styled from "styled-components";
import styles from "./RequestWrite.module.css";
import { NavLink } from "react-router-dom";

function RequestWrite() {
  return (
    <div>
      <Category category={"신고 / 순찰 요청"} text={"순찰요청"} />
      <div className={styles.title}>
        순찰을 원하는 장소와 이유를 적어주세요!
      </div>
      <MainBox>
        <PostsBox>
          <div className={styles.inputBox}>
            <div className={styles.titleBox}>
              <p className={styles.titleP}>제목</p>
              <input
                type="text"
                size="5"
                placeholder="제목을 입력해 주세요."
                className={styles.titleInput}
              />
            </div>
            <Hr />
            <div className={styles.contentBox}>
              <p className={styles.contentP}>내용</p>
              <textarea
                placeholder="내용을 입력해 주세요."
                className={styles.contentInput}
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
        <span
          onClick={() => {
            alert("등록이 완료되었습니다.");
          }}
          className={styles.btn}
        >
          <Button selectBtn={2} text={"등록하기"} />
        </span>
      </div>
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

const PostsBox = styled.div`
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
