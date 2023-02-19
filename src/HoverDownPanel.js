import "./HoverDownPanel.css";
import gitHubIcon from "./images/githubicon.png"
import aboutmeicon from "./images/aboutmeicon.png"
import aboutsiteicon from "./images/aboutsiteicon.png"

export default function HoverDownPanel() {
    return(
    <>
        <div className="hoverDownGrid">
        <section className="gridContent">           
            <span><a href ="https://github.com/Yavuz7/WouldYouRather" target="_blank" rel="noreferrer"><img src={gitHubIcon} alt="GitHubIcon"></img></a>GitHub</span>
            <span><img src={aboutmeicon} alt="AboutSiteIcon"></img>About Me</span>
            <span><img src={aboutsiteicon} alt="AboutMeIcon" href=""></img>About Site</span>
            <span>More Information</span>
        </section>

        </div>
    </>
    )
}