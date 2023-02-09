import ReactDOM from "react-dom/client";
import App from "./App";

<div id="root"></div>;
const root = ReactDOM.createRoot(document.getElementById("root"));
const thePage = (
  <div id="mainstuff">
    <App/>
  </div>
);
root.render(thePage);
