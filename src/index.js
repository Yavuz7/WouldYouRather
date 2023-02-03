import  ReactDOM  from "react-dom/client";
import ChoicePanel from "./ChoicePanel";


<div id="root"></div>
const root = ReactDOM.createRoot(
    document.getElementById('root')
    );
    const thePage = (     
            <div id ="mainstuff">  
              {/*First Panel is Red Second Is Blue*/}
                <ChoicePanel leftPercentage={'0%'} colorUnselected={'red'} colorSelected={'pink'} />
                <ChoicePanel leftPercentage={'50%'} colorUnselected={'blue'} colorSelected={'lightblue'}/>
            </div>
    )
root.render(thePage);
