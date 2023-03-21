import axios from "axios";


const KakaoCallback = () => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    const grant_type = "authorization_code";
    const client_id = "a3eef5bea95a9b422b4e7e10ddee98e2";
    const REDIRECT_URI = "http://localhost:3000/oauth/jwt/kakao/callback";

    axios.post(
        `http://kauth`
    )
}