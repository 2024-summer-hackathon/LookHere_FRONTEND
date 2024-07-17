import ruppeFrame from "../../assets/rupeeFrame.png";
import soulFrame from "../../assets/soulFrame.png";
import alrisoriFrame from "../../assets/alrisoriFrame.png";
import * as S from "./style";

export default function PhotoResult({ id, imgs }) {
  const frames = [
    { id: 1, url: ruppeFrame },
    { id: 2, url: soulFrame },
    { id: 3, url: alrisoriFrame },
  ];

  const selectedFrame = frames.find((frame) => frame.id === id);

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
