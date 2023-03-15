import React from 'react';

const REST_API_KEY = "a3eef5bea95a9b422b4e7e10ddee98e2"
const REDIRECT_URI = "http://localhost:3000/oauth/jwt/kakao/callback"

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

