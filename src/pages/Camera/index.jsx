import React, { useRef, useState } from 'react';
import WebCam from "react-webcam"
import { useNavigate } from 'react-router-dom';
import * as S from "./style";

export default function Webcam({ setImgs }) {
    const navigate = useNavigate();
    const webcamRef = useRef(null);
    const [camera, setCamera] = useState(false)
    const [num, setNum] = useState();
    const [cnt, setCnt] = useState(3);

    const videoConstraints = {
        width: 700,
        height: 484,
    };

    const capture = () => {
        setCamera(true);

        setImgs([]);
        let count = 5;

        const countDown = (i) => {
            if (count > 0) {
                setNum(count);
                count--;
                setTimeout(() => countDown(i), 1000);
            } else {
                setCnt(prev => prev - 1);
                setNum(null);
                const newImg = webcamRef.current.getScreenshot();
                setImgs(prevImgs => [...prevImgs, newImg]);
                if (i < 3) {
                    count = 5;
                    setTimeout(() => countDown(i + 1), 1000);

                } else {
                    setCamera(false);
                    navigate('/photoResult');
                }
            }
        };

        countDown(0);
    };

    return (
        <S.Container>
            <S.Left>
                <S.TextBox>
                    <S.ExText style={{ float: "left" }}>(키워드) 추천 포즈 #1</S.ExText>
                </S.TextBox>
                <S.Pose>

                </S.Pose>
            </S.Left>

            <S.Right>
                <S.TextBox>
                    <S.ExText style={{ float: "left" }}>#3. 추천받은 포즈에 따라 하나뿐인 사진을 남겨보세요!</S.ExText>
                    <S.ExText style={{ float: "right" }}>{4 - cnt} / 4</S.ExText>
                </S.TextBox>

                <h2 style={{ position: "fixed", top: "200px", left: "500px", fontSize: "150px" }}>{num}</h2>
                <WebCam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/png"
                    videoConstraints={videoConstraints}
                    mirrored={true} />
                <S.Capture onClick={capture} disabled={camera}></S.Capture>
            </S.Right>
            
        </S.Container>
    )
}
