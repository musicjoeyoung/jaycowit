import './App.scss';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Radio from './components/Radio/Radio';
import Music from './components/Music/Music';
import Art from './components/Art/Art';
import Press from './components/Press/Press';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ComingSoon from './prelaunch/ComingSoon/ComingSoon';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';

console.log(
  '%c🌐 Want a stunning website? 🚀 %cReach out to%c Joe Young %cjoseph.m.young2@gmail.com',
  'color: #51355a; font-size: 18px; font-weight: bold; text-shadow: 2px 2px 4px rgba(81, 53, 90, 0.5);',
  'color: #3498db; font-size: 18px; font-weight: bold; text-decoration: underline;',
  'color: #e74c3c; font-size: 18px; font-weight: bold;',
  'color: #e67e22; font-size: 18px; font-weight: bold;'
);

function App() {
  return (
    <ThemeProvider>
      {/* <ComingSoon /> */}
      <Navbar />
      <Header />
      <About />
      <Radio />
      <Music />
      <Art />
      <Press />
      <Contact />
      <Footer />
      <ScrollArrow />
    </ThemeProvider>
  );
}

export default App
