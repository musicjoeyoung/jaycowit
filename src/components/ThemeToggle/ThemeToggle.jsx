import { useTheme } from '../../contexts/ThemeContext';
import "./ThemeToggle.scss";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <button 
      className={`theme-toggle ${darkMode ? 'dark' : ''}`}
      onClick={toggleTheme}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-toggle__icon">
        {darkMode ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

export default ThemeToggle;
