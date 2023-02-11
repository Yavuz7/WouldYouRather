import ReactDOM from "react-dom/client";
import ChoicePanel from "./ChoicePanel";
import DropDownPanel from "./DropDownPanel";

const root = ReactDOM.createRoot(document.getElementById("root"));
const thePage = (
  <>
    <DropDownPanel/>
    <ChoicePanel/>
  </>
);
root.render(thePage);
