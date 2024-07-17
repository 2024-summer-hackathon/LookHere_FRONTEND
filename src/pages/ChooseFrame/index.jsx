import React, { useState } from "react";
import Loopy from "../../assets/loopy.png";
import Soul from "../../assets/soul.png";
import Ari from "../../assets/ari.png";
import { useNavigate } from "react-router-dom";
import * as t from "./style.js";

const App = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelected(id);
    localStorage.setItem("selectedFrameId", id); // Save the selected frame id to localStorage
    navigate("/camera");
  };

  const items = [
    { id: 1, src: Loopy, frameColor: "pink", label: "루피 프레임" },
    { id: 2, src: Soul, frameColor: "red", label: "정소울 프레임" },
    { id: 3, src: Ari, frameColor: "yellow", label: "아리소리 프레임" },
  ];

  return (
    <t.Layout>
      <t.Topbar>
        <t.Title>#2. 원하는 프레임을 선택하세요!</t.Title>
        <t.Desc>
          선택한 키워드에 맞춰 <b>선택한 프레임</b>을 인생네컷에 씌어 드립니다
        </t.Desc>
      </t.Topbar>
      <t.Container>
        {items.map((item) => (
          <t.ItemContainer
            key={item.id}
            selected={selected === item.id}
            onClick={() => handleSelect(item.id)}
          >
            <t.Item src={item.src} />
            <t.Tag frameColor={item.frameColor}>{item.label}</t.Tag>
          </t.ItemContainer>
        ))}
      </t.Container>
    </t.Layout>
  );
};

export default App;
