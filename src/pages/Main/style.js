import styled from "styled-components";
import startpage from "../../assets/startpage.png";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${startpage});
  background-size: cover;
  background-position: center;
  position: relative;
  font-family: "Pretendard-Regular";
`;

export const Title = styled.div`
  position: absolute;
  top: 38%;
  left: 67%;
  font-size: 70px;
  font-weight: bold;
`;

export const StartBtn = styled.button`
  position: absolute;
  padding: 15px 40px;
  border: none;
  background-color: #d9d9d9;
  color: black;
  font-size: 30px;
  font-weight: bold;
  border-radius: 8px;
  top: 49%;
  left: 74%;
  cursor: pointer;
`;
