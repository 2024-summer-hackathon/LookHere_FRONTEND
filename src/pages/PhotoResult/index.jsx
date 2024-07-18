import React, { useEffect, useState, useRef } from "react";
import BigRuppeFrame from "../../assets/BigRupeeFrame.png";
import BigSoulFrame from "../../assets/BigSoulFrame.png";
import BigAlrisoriFrame from "../../assets/BigAlrisoriFrame.png";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import qr from "../../assets/qr_code.svg";
import axios from "axios";

export default function PhotoResult({ imgs }) {
  const [FramImg, setFramImg] = useState();
  const divRef = useRef(null);

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

  const download = async () => {
    if (divRef.current) {
      const canvas = await html2canvas(divRef.current);
      const imgData = canvas.toDataURL("image/png");
      setFramImg(imgData);
      const link = document.createElement("a");
      axios
        .post("http://127.0.0.1:8000/upload", {
          string: imgData,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      link.href = imgData;
      link.download = "Four-cuts-in-life.png";
      link.click();
    }
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
      <S.Frame ref={divRef}>
        <S.FrameImg
          frameUrl={selectedFrame ? selectedFrame.url : ""}
        ></S.FrameImg>
        {imgs.map((img, index) => (
          <S.ImageWrapper key={index}>
            <img src={img} alt={`image-${index}`} />
          </S.ImageWrapper>
        ))}
      </S.Frame>
      <S.BContainer>
        <S.Qr src={qr} alt="" />
        <S.ImgDownBtn onClick={download}>이미지 다운로드</S.ImgDownBtn>
      </S.BContainer>
    </S.Layout>
  );
}
