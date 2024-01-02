import "./Header.scss"

const Header = ({ darkMode, setDarkMode }) => {
    //const toggleSvg = darkMode ? 'toggle-dm.svg' : 'toggle-lm.svg';
    const toggleLm = 'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1704223838/toggle-lm_agastf.svg'
    const toggleDm = 'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1704223837/toggle-dm_ekdax7.svg'
    const toggleSvg = darkMode ? toggleDm : toggleLm;
    return (
        <header className={`header ${darkMode ? `dark` && `dark--element` : ''}`}>
            <img className="header__toggle-mobile" src={toggleSvg} onClick={() => setDarkMode(!darkMode)} alt="light/dark toggle" />
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