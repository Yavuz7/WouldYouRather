import { useState, useEffect, memo } from "react";
import "./Question.css";
import axios from "axios";

//Api From : https://replit.com/@AbaanShanid :3
//Code Repurposed : https://www.freecodecamp.org/news/how-to-use-axios-with-react/#how-to-set-up-axios-with-react
const baseUrl = "https://would-you-rather-api.abaanshanid.repl.co/";

export default memo( function Question(updater) {
  const [post, setPost] = useState(null);

 useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPost(response.data);
    });
  }, [updater]);

  if (!post) return null;

  let splitQuestion;
  post.data.indexOf(", ") > 0? splitQuestion = post.data.split(", "): splitQuestion = post.data.split(" or ");
  splitQuestion[0] = splitQuestion[0].replace('Would you rather','');

  return (
    <>
    <div className = {"questions"}>
      <p className="question title">Would You Rather</p>
      <p className="question" style = {{left: '12%'}}>{splitQuestion[0]}?</p>
      <p className="question" style = {{right: '12%'}}>{splitQuestion[1]}</p>     
    </div>
    </>
  );
})
