import styled from "styled-components";

export const Layout = styled.div`
  font-family: "Pretendard-Regular";
  display: flex;
  flex-direction: column;
  padding: 250px 200px 0 200px;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: bolder;
  gap: 7px;
`;

export const BoldText = styled.div`
  font-weight: bolder;
`;

export const SubTitle = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: center;
  gap: 7px;
`;

export const KeyWordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 80px 100px 0 100px;
  gap: 30px;
`;

export const KeyWord = styled.div`
  width: 140px;
  padding: 25px 35px;
  text-align: center;
  background-color: ${(props) => props.color || "none"};
  font-size: 24px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
`;
