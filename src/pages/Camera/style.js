import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: auto;
  width: 1400px;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const ExText1 = styled.span`
  display: flex;
  font-size: 26px;
  font-weight: bold;
`;
export const ExText = styled.span`
  display: flex;
  font-size: 25px;
`;

export const TextBox = styled.div`
  width: 700px;
  height: 50px;
`;

export const Pose = styled.img`
  width: 350px;
  height: 484px;
  background: #d9d9d9;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Left = styled.div`
  position: absolute;
  width: 500px;
  height: 600px;
  top: 50%;
  margin-top: -300px;
  left: 0px;
  margin-left: 100px;
`;

export const Right = styled.div`
  position: absolute;
  width: 700px;
  height: 600px;
  top: 50%;
  margin-top: -300px;
  left: 0px;
  margin-left: 600px;
  text-align: center;
`;

export const Capture = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 80px;
  background: #cfcdcd;
  cursor: pointer;
  bottom: 0px;
  left: 0px;
  margin-left: 325px;
`;

export const CountBox = styled.h2`
  font-size: 150px;
  position: absolute;
  top: 0px;
  margin-top: 175px;
  left: 0px;
  margin-left: 315px;
  cursor: pointer;
  color: white;
`;

export const Noaudio = styled.audio`
  display: none;
`;
