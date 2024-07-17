import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 130px;
  width: 100%;
`;

export const Frame = styled.div`
  position: relative;
  /* top: 30px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 189px;
  height: 579px;
  background-image: url(${(props) => props.frameUrl});
  background-size: cover;
  background-position: center;
  padding-top: 19px; /* 사진을 아래로 내리기 위한 패딩 추가 */
  gap: 16px; /* 이미지 간의 간격 */
`;

export const ImageWrapper = styled.div`
  width: 153px;
  height: 105px;
  overflow: hidden;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /*이미지가 박스를 채우도록 조정 */
  }
`;
