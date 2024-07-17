import React, { useEffect, useState } from "react";
import ruppeFrame from "../../assets/rupeeFrame.png";
import soulFrame from "../../assets/soulFrame.png";
import alrisoriFrame from "../../assets/alrisoriFrame.png";
import * as S from "./style";

export default function PhotoResult({ imgs }) {
  const frames = [
    { id: 1, url: ruppeFrame },
    { id: 2, url: soulFrame },
    { id: 3, url: alrisoriFrame },
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
