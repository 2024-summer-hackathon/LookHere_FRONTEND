import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  width: 100%;
`;

export const Frame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 766px;
  background-image: url(${(props) => props.frameUrl});
  background-size: cover;
  background-position: center;
  padding-top: 19px;
  gap: 10px;
  margin-right: 20%;
`;

export const ImageWrapper = styled.div`
  width: 199px;
  height: 150px;
  overflow: hidden;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImgDownBtn = styled.button`
  font-weight: bold;
  width:150px;
  height: 60px;
  border: none;
  border-radius: 30px;
  background: lightgray;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: gray;
  }

  &:active {
    background: darkgray;
  }
`