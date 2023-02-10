import { useState, useEffect } from "react";
import "./ChoicePanel.css";
import Question from "./Question"
import RandomNumb from "./RandomNumb";

export default function ChoicePanel() {
  const [selectRed, setSelectRed] = useState(true)
  const [selectBlue, setSelectBlue] = useState(true)
  const [randStorage,setRandStorage] = useState(null)
  const [qUpdate,setQUpdate] = useState(false)

  function qUpdater(select)
  {
    if(select === false){
      setQUpdate(!qUpdate);
      setRandStorage(null)
    }
    else{
      setRandStorage(-1)
    }
  }
  useEffect(() => {
    if(randStorage > -1){
      
    }
  }
  )
console.log({randStorage});

 return (
  <section className="ChoicePanels">  

     <div className={"banana-zone" + (selectRed ? " redUnSelected" : " redSelected")}
      onClick={() => {setSelectRed(!selectRed);qUpdater(selectRed);}}/> 

     <div className={"banana-zone" + (selectBlue ? " blueUnSelected" : " blueSelected")}
      onClick={() => {setSelectBlue(!selectBlue);qUpdater(selectBlue);}}/>

      {/*<Question updater = {qUpdate}/>*/}
      {randStorage != null && <RandomNumb setVariable = {setRandStorage}/>}  
  </section> 
  );
}

