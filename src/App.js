import { createContext, useState } from "react";
import ChoicePanel from "./ChoicePanel";

export const UpdateContext = createContext(false);

export default function App() {
    const [update,setUpdate] = useState(false);
  return (
    <div>
      <UpdateContext.Provider value = {{update, setUpdate}}>
      {/*First Panel is Red Second Is Blue*/}
      
      <ChoicePanel/>
       
      
      </UpdateContext.Provider>

    </div>
  );
}
