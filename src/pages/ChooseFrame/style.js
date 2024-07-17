import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  gap: 80px;
`;

export const Item = styled.img`
  padding: 20px;
  border-radius: 5px;
  height: 400px;
`;

export const Title = styled.span`
  font-size: 36px;
  font-weight: bold;
`;

export const Desc = styled.span`
  font-size: 30px;
`;

const FlexCenterColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Topbar = styled(FlexCenterColumn)`
  margin-top: 30px;
`;

export const ItemContainer = styled(FlexCenterColumn)`
  background-color: ${(props) => (props.selected ? "#efefef" : "#fff")};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) => (props.selected ? "#efefef" : "#e0e0e0")};
  }
  border-radius: 10px;
  margin-top: 20px;
`;

export const Tag = styled.div`
  width: 80%;
  padding: 10px 0;
  font-weight: 900;
  border-radius: 10px;
  text-align: center;
  background-color: ${(props) =>
    props.frameColor === "yellow"
      ? "#F9F6A3"
      : props.frameColor === "pink"
      ? "pink"
      : "#D9D9D9"};
  margin-bottom: 20px;
`;
