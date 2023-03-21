import axios from "axios";
import { useEffect,userState,useSetRecoilState } from "react";
import { useNavigate } from "react-router-dom";

function KakaoLogin() {
  const setUser = useSetRecoilState(userState);
  const navi = useNavigate();

  const REQUEST_ADDRESS = "http://localhost:3000/"

  useEffect(() => {
    
    const url = new URL(window.location.href);
     
    const code = url.searchParams.get("code");
   
     
    axios.get(`${REQUEST_ADDRESS}oauth/jwt/kakao/callback?code=${code}`).then((res) => {
      
      localStorage.setItem("token", res.data.token);
      axios.get(`${REQUEST_ADDRESS}userinfo`, {
          headers: {
            Authorization: "Bearer " + res.data.token,
          },
        })
        .then((response) => {
          console.log(response)
          setUser(response.data);
          navi("/");

        }).catch(error=> {
          console.log(error.response)
        });
        
    });
  }, []);
  return <div>KakaoLogin</div>;
}

  export default KakaoLogin;
