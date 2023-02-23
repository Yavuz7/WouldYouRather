import ReactDOM from "react-dom/client";
import ChoicePanel from "./ChoicePanel";
import HoverDownPanel from "./HoverDownPanel";

const root = ReactDOM.createRoot(document.getElementById("root"));
const thePage = (
  <>
    <HoverDownPanel/>
    <ChoicePanel/>
  </>
);
root.render(thePage);
