import { useState} from "react";
import "./ChoicePanel.css";
import Question from "./Question"
import RandomNumb from "./RandomNumb";

export default function ChoicePanel() {
  const [selectRed, setSelectRed] = useState(true)
  const [selectBlue, setSelectBlue] = useState(true)
  const [randStorage,setRandStorage] = useState(50)
  const [qUpdate,setQUpdate] = useState(false)

  function qUpdater(select)
  {
    if(select === false){
      setQUpdate(!qUpdate);
      setRandStorage(50)
    }
    else{
      setRandStorage(Math.floor(Math.random() * 100))
    }
  }
console.log({randStorage});

 return (
  <section className="ChoicePanels">  

     <div className={"banana-zone" + (selectRed ? " redUnSelected" : " redSelected")}
     style = {{"width" : {randStorage}}}
      onClick={() => {setSelectRed(!selectRed);qUpdater(selectRed);}}/> 

     <div className={"banana-zone" + (selectBlue ? " blueUnSelected" : " blueSelected")}
     style = {{"width":{randStorage}}}
      onClick={() => {setSelectBlue(!selectBlue);qUpdater(selectBlue);}}/>

      {/*<Question updater = {qUpdate}/>*/}
      {randStorage !== 50 && <RandomNumb Variable = {randStorage}/>}  
  </section> 
  );
}

