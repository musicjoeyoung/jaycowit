import "./Navbar.scss"
import resume from "../../../src/assets/documents/JayCowit_RESUME.pdf"

const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="navbar__link" href="#about">About</a>
            <div className="dropdown">Radio
                {/*      <button className="dropbtn">Radio
                    <i className="fa fa-caret-down"></i>
                </button> */}
                <div className="dropdown-content">
                    <a className="navbar__link" href="#soundDesign">Sound Design</a>
                    <a className="navbar__link" href="#editing">Editing/Writing</a>
                    <a className="navbar__link" href="#voice">Voiceover/Hosting</a>
                    <a className="navbar__link" href="#coaching">Directing/Voice Coaching</a>
                </div>
            </div>
            <a className="navbar__link" href="#music">Music</a>
            <a className="navbar__link" href="#art">Art</a>
            <a className="navbar__link" href="#press">Press</a>
            <a className="navbar__link" href={resume} target="_blank">Resume</a>
            <a className="navbar__link" href="#contact">Contact</a>
        </nav>
    )
}

export default Navbar