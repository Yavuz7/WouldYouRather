import { useState } from 'react';
import './ChoicePanel.css';

function ChoicePanel(){
    function selectionHandler(event){
      
    }
   return(
    <div>
    <div id="question"> Hello!</div>
    <div id ="banana" className="banana-zone" onClick={selectionHandler}/>
    <div id="banana2" className="banana-zone b2" onClick={selectionHandler}/>
    </div>
   )
}

export default ChoicePanel;