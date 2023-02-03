import  ReactDOM  from "react-dom/client";
import App from "./App";
import ChoicePanel from "./ChoicePanel";


<div id="root"></div>
const root = ReactDOM.createRoot(
    document.getElementById('root')
    );
    const thePage = (     
            <div id ="mainstuff">  
              {/*First Panel is Red Second Is Blue*/}
                <ChoicePanel/>
                <ChoicePanel/>
            </div>
    )
root.render(thePage);
