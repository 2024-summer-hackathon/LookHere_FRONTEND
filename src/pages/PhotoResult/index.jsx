import React, { useEffect, useState } from "react";
import BigRuppeFrame from "../../assets/BigRupeeFrame.png";
import BigSoulFrame from "../../assets/BigSoulFrame.png";
import BigAlrisoriFrame from "../../assets/BigAlrisoriFrame.png";
import * as S from "./style";

export default function PhotoResult({ imgs }) {
  const frames = [
    { id: 1, url: BigRuppeFrame },
    { id: 2, url: BigSoulFrame },
    { id: 3, url: BigAlrisoriFrame },
  ];

  const [selectedFrame, setSelectedFrame] = useState(null);

  useEffect(() => {
    const frameId = localStorage.getItem("selectedFrameId");
    if (frameId) {
      const frame = frames.find((frame) => frame.id === parseInt(frameId));
      setSelectedFrame(frame);
    }
  }, []);

  return (
    <S.Layout>
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
