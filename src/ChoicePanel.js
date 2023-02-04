import { useState } from "react";
import "./ChoicePanel.css";

export default function ChoicePanel({
  leftPercentage,
  colorUnselected,
  colorSelected,
  panelAnimationSet,
}) {
  const [select, setSelect] = useState(true);

  const unSelectedStyle = {
    width: "50%",
    zIndex: "2",
    left: leftPercentage,
  };
  const selectedStyle = {
    background: colorSelected,
    width: "100%",
    zIndex: "4",
  };
  return (
    <div
      className={select ? panelAnimationSet + " banana-zone" : "banana-zone"}
      style={select ? unSelectedStyle : selectedStyle}
      onClick={() => setSelect(!select)}
    />
  );
}
