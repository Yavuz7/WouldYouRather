import { useState } from 'react';
import './ChoicePanel.css';



function ChoicePanel(props){
    const [color,setColor] = useState(true);

    
    function colorHandler(prop){
        setColor(!color);
    }
    const selectedStyle = {
      background: "red",
      width: "50%",
      zIndex: "2"
    }
    const unSelectedStyle = {
      background: "lightblue",
      width: "100%",
      zIndex: "10"
    }
   return(
    <div className="banana-zone b1" style= {color? selectedStyle:unSelectedStyle} onClick={() => colorHandler('red')}/>
   )
}

export default ChoicePanel;