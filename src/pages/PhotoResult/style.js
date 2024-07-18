import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  width: 100%;
  font-family: "Pretendard-Regular";
`;
export const HomeBtn = styled.button`
  position: absolute;
  top: 50px;
  left: 50px;
  padding: 20px 30px;
  background-color: #d9d9d9;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  cursor: pointer;
`;

export const Frame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 740px;
  padding-top: 20px;
  gap: 15px;
  margin-right: 10%;
`;

export const FrameImg = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 766px;
  background-image: url(${(props) => props.frameUrl});
  background-size: cover;
  background-position: center;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index:5;
`;

export const ImageWrapper = styled.div`
  width: 199px;
  height: 140px;
  overflow: hidden;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -5;
  }
`;

export const ImgDownBtn = styled.button`
  font-weight: bold;
  padding: 20px 40px;
  border: none;
  border-radius: 15px;
  background: #d9d9d9;
  color: black;
  font-size: 22px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: #cfcdcd;
  }

  &:active {
    background: darkgray;
  }
`;

export const Qr = styled.img `
  width:200px;
  height:200px;
`