import { useState } from "react";
import "./ChoicePanel.css";
import Question from "./Question"


export default function ChoicePanel() {

  const [selectRed, setSelectRed] = useState(true)
  const [selectBlue, setSelectBlue] = useState(true)
  const [qUpdate,setQUpdate] = useState(false)
  const redunSelectedClasses = "banana-zone redUnSelected"
  const redSelectedClasses = "banana-zone redSelected"
  const blueunSelectedClasses = "banana-zone blueUnSelected"
  const blueSelectedClasses = "banana-zone blueSelected"
  
 return (
  <>
    <div
      className={selectRed ? redunSelectedClasses : redSelectedClasses}
      onClick={() => {setSelectRed(!selectRed);if(selectRed === false){setQUpdate(!qUpdate)}}}/> 
     <div className={selectBlue ? blueunSelectedClasses : blueSelectedClasses}
      onClick={() => {setSelectBlue(!selectBlue);if(selectBlue === false){setQUpdate(!qUpdate)}}}/>
      <Question updater = {qUpdate}/>   
  </> 
  );
}

