import { useState } from "react";
import "./ChoicePanel.css";

export default function ChoicePanel({
  leftPercentage,
  colorUnselected,
  colorSelected,
}) {
  const [select, setSelect] = useState(true);

  const selectedStyle = {
    background: colorUnselected,
    width: "50%",
    zIndex: "2",
    left: leftPercentage,
  };
  const unSelectedStyle = {
    background: colorSelected,
    width: "100%",
    zIndex: "4",
  };
  return (
    <div
      className="banana-zone b1"
      style={select ? selectedStyle : unSelectedStyle}
      onClick={() => setSelect(!select)}
    />
  );
}
