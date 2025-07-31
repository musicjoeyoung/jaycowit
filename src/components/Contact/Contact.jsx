import "./Contact.scss"
import { useTheme } from '../../contexts/ThemeContext';

const Contact = () => {
  const { darkMode } = useTheme();
    return (
        <section className={`contact ${darkMode ? 'dark' : ''}`}>
            <h2 className="contact__h2" id="contact">Contact</h2>
            <a href="mailto:jaycowit@gmail.com">Email me</a>
        </section>
    )
}

export default Contact