import { useState } from 'react';
import './ChoicePanel.css';



function ChoicePanel(){
    const [color,setColor] = useState(true);
    const [color2,setColor2] = useState(true);

    function colorHandler(prop){
       if( prop === "banana"){
        setColor(!color);
       }
       else if( prop === "banana2"){
        setColor2(!color2);
       }
    }
   return(
    <div>
    <div className='question'><p>Hello!</p> </div>
    <div  className="banana-zone b1" style={{ background: color2? 'red':'lightblue'}} onClick={() => colorHandler('banana')}/>
    <div className="banana-zone b2" style={{ background: color? 'blue':'pink'}} onClick={() => colorHandler('banana2')}/>
    </div>
   )
}

export default ChoicePanel;