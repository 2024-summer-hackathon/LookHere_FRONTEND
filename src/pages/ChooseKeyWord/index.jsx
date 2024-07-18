import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const ChooseKeyWord = () => {
  const [inputprompt, setInputprompt] = useState("");
  const navigate = useNavigate();
  const concept = [
    { id: 1, title: "설렘", color: "#FFD1DC" },
    { id: 2, title: "힙합", color: "#CFCDCD" },
    { id: 3, title: "우정", color: "#A7F378" },
    { id: 4, title: "에너지 넘치는", color: "#FFBC5C" },
    { id: 5, title: "다정한", color: "#BEBEFF" },
    { id: 6, title: "축하", color: "#A4FEF8" },
    { id: 7, title: "콘서트", color: "#FAFD70" },
    { id: 8, title: "사랑", color: "#FF756E" },
  ];

  //const selectedKeyword = localStorage.getItem('selectedKeyword');

  const handleKeywordClick = (title) => {
    localStorage.setItem("selectedKeyword", title);
    localStorage.setItem("selectType", 1);
    navigate("/choose-frame");
  };

  const handleKeywordInput = (input) => {
    localStorage.setItem("selectedKeyword", input);
    localStorage.setItem("selectType", 2);
    navigate("/choose-frame");
  };

  return (
    <S.Layout>
      <S.TitleContainer>
        <S.Title>#1.원하는 키워드를 선택하세요!</S.Title>
        <S.SubTitle>
          선택한 키워드에 맞춰 <S.BoldText>최고의 인생네컷 포즈</S.BoldText>를
          추천해드립니다.
        </S.SubTitle>
        <S.Input
          placeholder="키워드를 입력해주세요!"
          onChange={(e) => setInputprompt(e.currentTarget.value)}
        />
        <S.BtnBtn onClick={() => handleKeywordInput(inputprompt)}>
          선택
        </S.BtnBtn>
        <S.KeyWordContainer>
          {concept.map((item) => (
            <S.KeyWord
              key={item.id}
              color={item.color}
              onClick={() => handleKeywordClick(item.title)}
            >
              {item.title}
            </S.KeyWord>
          ))}
        </S.KeyWordContainer>
      </S.TitleContainer>
    </S.Layout>
  );
};

export default ChooseKeyWord;
