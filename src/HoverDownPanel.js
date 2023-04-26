import "./HoverDownPanel.css";
import { useState } from "react";
import gitHubIcon from "./images/githubicon.png"
import aboutmeicon from "./images/aboutmeicon.png"
import aboutsiteicon from "./images/aboutsiteicon.png"
import Modal from "./Modal";


export default function HoverDownPanel() {
    const [modalActive,setModalActive] = useState(0);
    const [modalInfo,setModalInfo] = useState({title:"",info:"",link:""});
    
    function changeModal(modalNumber)
    {
        switch(modalNumber)
        {
            case 1:
                {
                    setModalInfo({
                        title:"GitHub",
                        info :"The link below will bring you to the github in a new tab!",
                        link: "https://github.com/Yavuz7/WouldYouRather"
                    });                
                    setModalActive(1);
                    return;
                }
            case 2:
            {
                setModalInfo({
                    title:"About Me",
                    info :"My name is Yavuz, I'm a IT major with a concentration on multimedia. I'm currently focusing on learning React and this is my first project using it!"
                });                
                setModalActive(1);
                return;
            }
            case 3:
            {
                setModalInfo({
                    title:"About Site",
                    info :"This site is a Would You Rather game built using react. It makes extensive use of some of the hooks react has to offer, and even uses an api I found online:",
                    link:"https://replit.com/@AbaanShanid"
                });                
                setModalActive(1);
                return;
            }
            default:
                return;
        }
    }
    return(
    <>
        <div className="hoverDownGrid">
        <section className="gridContent">           
            <span onClick={() => changeModal(1)}><img src={gitHubIcon} alt="GitHubIcon"></img>GitHub</span>
            <span onClick={() => changeModal(2)}><img src={aboutmeicon} alt="AboutSiteIcon"></img>About Me</span>
            <span onClick={() => changeModal(3)}><img src={aboutsiteicon} alt="AboutMeIcon" href=""></img>About Site</span>
            <span>More Information</span>
        </section>
        </div>
        <Modal onClose={() => setModalActive(0)} modalActive={modalActive} title = {modalInfo.title} info = {modalInfo.info} link={modalInfo.link}/>
    </>
    )
}