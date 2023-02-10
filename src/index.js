import ReactDOM from "react-dom/client";
import ChoicePanel from "./ChoicePanel";

<div id="root"></div>;
const root = ReactDOM.createRoot(document.getElementById("root"));
const thePage = (
  <div id="mainstuff">
    <ChoicePanel/>
  </div>
);
root.render(thePage);
