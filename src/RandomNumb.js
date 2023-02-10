

export default function RandomNumb() {
  let numbey,numbey2;
  function genRan() {
    numbey = Math.floor(Math.random() * 100);
    numbey2 = 100 - numbey;
  }
  genRan();
  return (
   <>
        {numbey} {numbey2}
    </>
  );
}
