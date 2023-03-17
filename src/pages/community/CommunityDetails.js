import Button from "../../components/common/button/Button";
import Category from "../../components/common/category/Category";
import styled from "styled-components";
import styles from "./CommunityDetails.module.css";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CommunityDetails() {
  const [list, setList] = useState([]);
  let { num } = useParams();
  console.log("num: ", num);

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
      .then((data) => setList(data));
  }, []);
  console.log("list: ", list);

  return (
    <>
      <Category />
      <MainBox>
        <PostsBox>
          <div>
            <div>{list.title}</div>
            <div>{list.content}</div>
          </div>
        </PostsBox>
      </MainBox>
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

export default CommunityDetails;
