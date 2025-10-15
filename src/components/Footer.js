import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import "./footer.css"


export const Footer = () => {

    return <footer className="center-container">
        <a
            title={"Edit this site on GitHub"}
            href={"https://github.com/AndreasChristianson/space-of-resolution"}
        >
            <FontAwesomeIcon className={"fa-solid"} icon={faGithub}/>
        </a>
        <a
            title={"Email Space of Resolution"}
            href={"mailto:spaceofresolution@pessimistic-it.com"}
        >
            <FontAwesomeIcon className={"fa-solid"} icon={faEnvelope}/>
        </a>
    </footer>;
}