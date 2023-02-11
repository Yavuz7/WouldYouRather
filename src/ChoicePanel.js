import { useState} from "react";
import "./ChoicePanel.css";
import Question from "./Question"
import RandomNumb from "./RandomNumb";

export default function ChoicePanel() {
  const [select,setSelect] = useState(true)
  const [qUpdate,setQUpdate] = useState(false)
  const [randStorage,setRandStorage] = useState(50)
  
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
const randWidthRed = randStorage + "%";
const randWidthBlue= (100 - randStorage)+ "%"
 return (
  <section className="ChoicePanels">  

     <div className={"banana-zone" + (select ? " redUnSelected" : " redSelected")}
     style = {{width: randWidthRed}}
      onClick={() => {setSelect(!select);qUpdater(select);}}/> 

     <div className={"banana-zone" + (select ? " blueUnSelected" : " blueSelected")}
     style = {{width: randWidthBlue}}
      onClick={() => {setSelect(!select);qUpdater(select);}}/>

      <Question updater = {qUpdate}/>
      {randStorage !== 50 && <RandomNumb Variable = {randStorage}/>}  
  </section> 
  );
}

