import { createContext, useState } from "react";
import ChoicePanel from "./ChoicePanel";
import Question from "./Question";

export const UpdateContext = createContext(0);

export default function App() {
    const [update,setUpdate] = useState(0);
  return (
    <div>
      <UpdateContext.Provider value = {{update, setUpdate}}>
      {/*First Panel is Red Second Is Blue*/}
      <Question/>
      <ChoicePanel
        leftPercentage={"0%"}
        colorUnselected={"red"}
        colorSelected={"pink"}
        panelAnimationSet={"redSet"}
      />

      <ChoicePanel
        leftPercentage={"50%"}
        colorUnselected={"blue"}
        colorSelected={"lightblue"}
        panelAnimationSet={"blueSet"}
      />


      </UpdateContext.Provider>
    </div>
  );
}
