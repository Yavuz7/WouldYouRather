import ReactDOM from "react-dom/client";
import ChoicePanel from "./ChoicePanel";
import HoverDownPanel from "./HoverDownPanel";
import Modal from "./Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
const thePage = (
  <>
    <HoverDownPanel/>
    <ChoicePanel/>
    <Modal/>
  </>
);
root.render(thePage);
