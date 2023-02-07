import { useState, useEffect, useContext } from "react";
import { UpdateContext } from "./App";
import "./Question.css";
import axios from "axios";

//Api From : https://replit.com/@AbaanShanid :3
//Code Repurposed : https://www.freecodecamp.org/news/how-to-use-axios-with-react/#how-to-set-up-axios-with-react
const baseUrl = "https://would-you-rather-api.abaanshanid.repl.co/";

export default function Question() {
  const [post, setPost] = useState(null);
  const[counter,setCounter] = useState(0);
  const {
    update,
    setUpdate
  } = useContext(UpdateContext);



 useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPost(response.data);
    });
  }, [update]);


  if (!post) return null;

  let splitQuestion = post.data.split(" or ");
  splitQuestion[0] = splitQuestion[0].replace('Would you rather','');

  return (
    <div className = {"questions"}>
      <p className="question" style = {{left: '12%'}}>{splitQuestion[0]}?</p>
      <p className="question" style = {{right: '12%'}}>{splitQuestion[1]}</p>
    </div>
  );
}
