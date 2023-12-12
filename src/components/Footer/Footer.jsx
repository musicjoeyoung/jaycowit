import "./Footer.scss"
import bandcamp from "../../assets/images/icons/bandcamp.svg"
import email from "../../assets/images/icons/email.svg"
import facebook from "../../assets/images/icons/facebook.svg"
import instagram from "../../assets/images/icons/instagram.svg"
import linkedin from "../../assets/images/icons/linkedin.svg"
import twitter from "../../assets/images/icons/twitter.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="image-container">
                <img className="image-container__img" src={bandcamp} />
                <img className="image-container__img" src={email} />
                <img className="image-container__img" src={facebook} />
                <img className="image-container__img" src={instagram} />
                <img className="image-container__img" src={linkedin} />
                <img className="image-container__img" src={twitter} />
            </div>
            <h6 className="footer__h6">©Jay Cowit. All rights reserved.</h6>
            <h6 className="footer__h6"><a href="mailto:joseph.m.young2@gmail.com">Contact the Webmaster</a></h6>
        </footer>
    )
}

export default Footer