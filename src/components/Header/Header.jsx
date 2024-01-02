import "./Header.scss"

const Header = ({ darkMode, setDarkMode }) => {
    const toggleSvg = darkMode ? 'toggle-dm.svg' : 'toggle-lm.svg';
    return (
        <header className={`header ${darkMode ? `dark` && `dark--element` : ''}`}>
            <img className="header__toggle-mobile" src={`/src/assets/images/icons/${toggleSvg}`} onClick={() => setDarkMode(!darkMode)} alt="light/dark toggle" />
            <h1 className="header__h1">Jay Cowit</h1>
            <div className="titles-container">
                {/* <span>Animations are </span> */}
                <p className="titles-container__title">Sound Designer, Editor, Mixer</p>
                <p className="titles-container__title">Copy Editor, Script Writer, Consultant</p>
                {/* <p className="titles-container__title">Musician</p> */}
                {/* <p className="titles-container__title">Artist</p> */}
                {/* <p className="titles-container__title">Director/Voice Coach</p> */}
                {/* <p className="titles-container__title">Voice-Over Artist/On-Air Host</p> */}
            </div>
        </header>
    )
}

export default Header