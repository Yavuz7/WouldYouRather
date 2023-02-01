import  ReactDOM  from "react-dom/client";
import App from "./App";
import ChoicePanel from "./ChoicePanel";


<div id="root"></div>
const root = ReactDOM.createRoot(
    document.getElementById('root')
    );
    const element = (     
            <div id ="mainstuff">    
                <App/>
                <ChoicePanel/>
            </div>
    )
root.render(element);
