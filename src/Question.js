import { useState, useEffect } from "react";
import "./Question.css";
import axios from "axios";

//Api From : https://replit.com/@AbaanShanid :3
//Code Repurposed : https://www.freecodecamp.org/news/how-to-use-axios-with-react/#how-to-set-up-axios-with-react
const baseUrl = "https://would-you-rather-api.abaanshanid.repl.co/";

export default function Question() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  const splitQuestion = post.data.split(" or ");
  return (
    <div className = "questions">
      <p className="question" style = {{left: '25%', maxWidth: '350px'}}>{splitQuestion[0] }</p>
      <p className="question" style = {{right: '25%', maxWidth: '350px'}}>{splitQuestion[1]}</p>
    </div>
  );
}
