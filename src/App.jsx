import './App.scss'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Radio from './components/Radio/Radio'
import Music from './components/Music/Music'
import Art from './components/Art/Art'
import Press from './components/Press/Press'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ComingSoon from './prelaunch/ComingSoon/ComingSoon'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      {/* <ComingSoon /> */}
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Header darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Radio darkMode={darkMode} />
      <Music darkMode={darkMode} />
      <Art darkMode={darkMode} />
      <Press darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  )
}

export default App
