import "./Footer.scss"
import bandcamp from "../../assets/images/icons/bandcamp.svg"
import email from "../../assets/images/icons/email.svg"
import facebook from "../../assets/images/icons/facebook.svg"
import instagram from "../../assets/images/icons/instagram.svg"
import linkedin from "../../assets/images/icons/linkedin.svg"
import twitter from "../../assets/images/icons/x-logo.png"
import threads from "../../assets/images/icons/threads-logo.png"
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();
    return (
        <footer className={`footer ${darkMode ? 'dark' : ''}`}>
            <div className="image-container">
                <a className="image-container__a" href="https://jcowit.bandcamp.com/" target="_blank">
                    <img className="image-container__img" src={bandcamp} alt="bandcamp logo" />
                </a>
                <a className="image-container__a " href="mailto:Jaycowit@gmail.com" target="_blank">
                    <img className="image-container__img image-container__img--email" src={email} alt="email" />
                </a>
                <a className="image-container__a" href="https://www.facebook.com/jcowitRuthless" target="_blank">
                    <img className="image-container__img image-container__img--facebook" src={facebook} alt="facebook logo" />
                </a>
                <a className="image-container__a" href="https://www.instagram.com/jcowit/" target="_blank">
                    <img className="image-container__img" src={instagram} alt="instagram logo" />
                </a>
                <a className="image-container__a image-container__a--linkedin" href="https://www.linkedin.com/in/jay-cowit/" target="_blank">
                    <img className="image-container__img" src={linkedin} alt="linkedin logo" />
                </a>
                <a className="image-container__a image-container__a--twitter" href="https://twitter.com/jaycowit" target="_blank">
                    <img className="image-container__img image-container__img--twitter" src={twitter} alt="twitter logo" />
                </a>
                <a className="image-container__a " href="https://www.threads.net/@jcowit" target="_blank">
                    <img className="image-container__img image-container__img--threads" src={threads} alt="threads logo" />
                </a>
            </div>
            <h6 className="footer__h6">©Jay Cowit. All rights reserved.</h6>
            <h6 className="footer__h6"><a href="mailto:joseph.m.young2@gmail.com">Contact the Webmaster</a></h6>
        </footer>
    )
}

export default Footer