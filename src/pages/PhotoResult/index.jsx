import React, { useEffect, useState } from "react";
import BigRuppeFrame from "../../assets/BigRupeeFrame.png";
import BigSoulFrame from "../../assets/BigSoulFrame.png";
import BigAlrisoriFrame from "../../assets/BigAlrisoriFrame.png";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export default function PhotoResult({ imgs }) {
  const frames = [
    { id: 1, url: BigRuppeFrame },
    { id: 2, url: BigSoulFrame },
    { id: 3, url: BigAlrisoriFrame },
  ];

  const [selectedFrame, setSelectedFrame] = useState(null);
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const frameId = localStorage.getItem("selectedFrameId");
    if (frameId) {
      const frame = frames.find((frame) => frame.id === parseInt(frameId));
      setSelectedFrame(frame);
    }
  }, []);

  return (
    <S.Layout>
      <S.HomeBtn onClick={handleGoHome}>⬅️ 처음으로 가기</S.HomeBtn>
      <S.Frame frameUrl={selectedFrame ? selectedFrame.url : ""}>
        {imgs.map((img, index) => (
          <S.ImageWrapper key={index}>
            <img src={img} alt={`image-${index}`} />
          </S.ImageWrapper>
        ))}
      </S.Frame>
    </S.Layout>
  );
}
