import { useState } from "react";

export default function RandomNumb() {
  const [numbey, setNumbey] = useState(0);
  const [numbey2, setNumbey2] = useState(0);
  function genRan() {
    setNumbey(Math.floor(Math.random() * 100));
    setNumbey2(100 - numbey);
  }
  return (
    <div>
        {numbey}{numbey2}

    </div>
  );
}
