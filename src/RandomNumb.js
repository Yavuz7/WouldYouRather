import "./Question.css";

export default function RandomNumb({Variable}) {
  let numbey = Variable;
  let numbey2 = 100 - numbey;
   const styleWidth = '10vw';  
  return (
     <div id="Percentage-Numbers" className="questions">
        <span className="question" style = {{left: styleWidth}}>{numbey}%</span>
        <text className = "question" style = {{left: styleWidth}}>Of People Chose</text>
        <span className = "question" style = {{right: styleWidth}}>{numbey2}%</span>
        <text className = "question" style = {{right: styleWidth}}>Of People Chose</text> 
     </div>
  );
}
