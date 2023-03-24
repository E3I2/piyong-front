import React, { useState } from "react";
import styled from "styled-components";


const HeaderCSS = styled.div`
  top: 0;
  width: 100%;
  position: fixed;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  background-color: white;
  height: 180px;
  box-shadow: 0px 4px 8px 0px #cbcbcb;
  color: black;   
  font-weight: 900;
  font-size: 30px;
  text-shadow: 2px 2px 2px gray;
  padding-left:145px;
  z-index: 99;
  
  .linkstyle {
    color: white;
    text-decoration:none;
  }

  .Ppiyong {
    margin: 0 1rem;
    font-size: 2rem;
  }

  .HeaderTitle {
    list-style: none;
    display: flex;
  }

  .HeaderTitleEnd {
    list-style: none;
    display: flex;
    padding-right: 300px;
  }

  .HeaderTitleEnd div {
    margin: 0 1rem;

  }

  li {
    padding: 0 1rem;
  }

  .HeaderToggle {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  .HeaderUserBotton {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  @media screen and (max-width: 830px) {
    flex-wrap: wrap;
    padding-left:0px;


    .HeaderTitleEnd {
      display: ${(props) => (props.userToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      color: black;
      background-color: white;
      margin-top:0px;

    }

    .HeaderTitle {
      display: ${(props) => (props.isToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      color: black;
      margin-bottom:0px;
      background-color: white;
  
    }

    .HeaderTitle li,
    .HeaderTitleEnd li {
      margin: 1rem 0;
      padding: 0;

    }

    .HeaderToggle {
      display: block;
    }

    .HeaderUserBotton {
      display: block;
    }
  }
`;

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);


  const REST_API_KEY = "a3eef5bea95a9b422b4e7e10ddee98e2"
  const REDIRECT_URI = "http://localhost:3000/oauth/jwt/kakao/callback"

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const openKakaoLogin = () => {
    window.open(KAKAO_AUTH_URL, "_self");
  };

  return (
    
    <HeaderCSS isToggled={isToggled} userToggled={userToggled}>
      <div
        className="HeaderToggle"
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        <img src="/img/button.png" alt="button"></img>
      </div>

      <div className="Ppiyong">
        <img src="/img/ppiyong.png" alt="ppiyong"></img>
      </div>

      <div
        className="HeaderUserBotton"
        onClick={() => {
          setUserToggled(!userToggled);
        }}
      >
        <img src="/img/user.png" alt="user"></img>
      </div>

      <ul className="HeaderTitle">
        <li>순찰일지</li>
        <li>순찰요청</li>
        <li>커뮤니티</li>
        <li>순찰하기</li>
      </ul>
      <ul className="HeaderTitleEnd">
        <li>로그인</li>
        <li>회원가입</li>
      </ul>
    </HeaderCSS>
  );


}

export default Header;