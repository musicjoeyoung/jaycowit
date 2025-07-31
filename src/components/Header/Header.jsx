import "./Header.scss"
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
  const { darkMode } = useTheme();
    return (
        <header className={`header ${darkMode ? `dark` && `dark--element` : ''}`}>
            <div className="header__theme-toggle">
                <ThemeToggle />
            </div>
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