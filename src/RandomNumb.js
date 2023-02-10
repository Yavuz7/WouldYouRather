import "./Question.css";
import { useEffect} from "react";

export default function RandomNumb({Variable}) {
  let numbey = Variable;
  let numbey2 = 100 - numbey;

  return (
     <div id="Percentage-Numbers" className="questions">
        <span className="question" style = {{left: '12%'}}>{numbey}</span>
        <span className = "question" style = {{right: '12%'}}>{numbey2}</span> 
     </div>
  );
}
