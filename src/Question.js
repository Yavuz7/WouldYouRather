import { useState, useEffect } from "react";
import "./Question.css";
import axios from "axios";

//Api From : https://replit.com/@AbaanShanid :3
//Code Repurposed : https://www.freecodecamp.org/news/how-to-use-axios-with-react/#how-to-set-up-axios-with-react
const baseUrl = "https://would-you-rather-api.abaanshanid.repl.co/"

export default function Question() {
    
    const[post,setPost] = useState(null);
   

    useEffect( () => {
        axios.get(baseUrl).then((response) => {
            setPost(response.data);
        })
    },[]);

    if (!post) return null;

    return ( 
        
    <div className="question">
        <p>{post.data}</p>


    </div>
    )
       
    
}