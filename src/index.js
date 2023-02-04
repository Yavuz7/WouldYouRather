import ReactDOM from "react-dom/client";
import ChoicePanel from "./ChoicePanel";
import Question from "./Question";

<div id="root"></div>;
const root = ReactDOM.createRoot(document.getElementById("root"));
const thePage = (
  <div id="mainstuff">
   
    {/*First Panel is Red Second Is Blue*/}
    <ChoicePanel
      leftPercentage={"0%"}
      colorUnselected={"red"}
      colorSelected={"pink"}
      panelAnimationSet = {"redSet"}
    />
    <ChoicePanel
      leftPercentage={"50%"}
      colorUnselected={"blue"}
      colorSelected={"lightblue"}
      panelAnimationSet = {"blueSet"}
    />
     <Question/>
  </div>
);
root.render(thePage);
