import "./Footer.scss"
import bandcamp from "../../assets/images/icons/bandcamp.svg"
import email from "../../assets/images/icons/email.svg"
import facebook from "../../assets/images/icons/facebook.svg"
import instagram from "../../assets/images/icons/instagram.svg"
import linkedin from "../../assets/images/icons/linkedin.svg"
import twitter from "../../assets/images/icons/twitter.svg"
import threads from "../../assets/images/icons/threads.svg"

const Footer = ({ darkMode }) => {
    return (
        <footer className={`footer ${darkMode ? 'dark' : ''}`}>
            <div className="image-container">
                <a className="image-container__a" href="https://jcowit.bandcamp.com/" target="_blank">
                    <img className="image-container__img" src={bandcamp} />
                </a>
                <a className="image-container__a " href="mailto:Jaycowit@gmail.com" target="_blank">
                    <img className="image-container__img image-container__img--email" src={email} />
                </a>
                <a className="image-container__a" href="https://www.facebook.com/jcowitRuthless" target="_blank">
                    <img className="image-container__img image-container__img--facebook" src={facebook} />
                </a>
                <a className="image-container__a" href="https://www.instagram.com/jcowit/" target="_blank">
                    <img className="image-container__img" src={instagram} />
                </a>
                <a className="image-container__a image-container__a--linkedin" href="https://www.linkedin.com/in/jay-cowit/" target="_blank">
                    <img className="image-container__img" src={linkedin} />
                </a>
                <a className="image-container__a image-container__a--twitter" href="https://twitter.com/jaycowit" target="_blank">
                    <img className="image-container__img image-container__img--twitter" src={twitter} />
                </a>
                <a className="image-container__a" href="https://www.threads.net/@jcowit" target="_blank">
                    <img className="image-container__img" src={threads} />
                </a>
            </div>
            <h6 className="footer__h6">©Jay Cowit. All rights reserved.</h6>
            <h6 className="footer__h6"><a href="mailto:joseph.m.young2@gmail.com">Contact the Webmaster</a></h6>
        </footer>
    )
}

export default Footer