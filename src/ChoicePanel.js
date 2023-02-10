import { useState } from "react";
import "./ChoicePanel.css";
import Question from "./Question"


export default function ChoicePanel() {
  function qUpdater(select)
  {
    if(select === false){
      setQUpdate(!qUpdate);
    }
  }
  const [selectRed, setSelectRed] = useState(true)
  const [selectBlue, setSelectBlue] = useState(true)
  const [qUpdate,setQUpdate] = useState(false)

 return (
  <>
    <div
      className={"banana-zone" + (selectRed ? " redUnSelected" : " redSelected")}
      onClick={() => {setSelectRed(!selectRed);qUpdater(selectRed);}}/> 
     <div className={"banana-zone" + (selectBlue ? " blueUnSelected" : " blueSelected")}
      onClick={() => {setSelectBlue(!selectBlue);qUpdater(selectBlue);}}/>
      <Question updater = {qUpdate}/>   
  </> 
  );
}

