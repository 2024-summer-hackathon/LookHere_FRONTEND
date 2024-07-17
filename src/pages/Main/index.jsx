import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate("/choose-keyword");
  };
  return (
    <S.Layout>
      <S.Title>자, 여기 보세요</S.Title>
      <S.StartBtn onClick={handleStartClick}>촬영시작</S.StartBtn>
    </S.Layout>
  );
};

export default Main;
