import "./Question.css";
import { useEffect} from "react";

export default function RandomNumb({setVariable}) {
  let numbey,numbey2;
  function genRan() {
    numbey = Math.floor(Math.random() * 100);
    numbey2 = 100 - numbey;
  }
  genRan();
  useEffect(() => {
    setVariable(numbey);
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
     <div id="Percentage-Numbers" className="questions">
        <span className="question" style = {{left: '12%'}}>{numbey}</span>
        <span className = "question" style = {{right: '12%'}}>{numbey2}</span> 
     </div>
  );
}
