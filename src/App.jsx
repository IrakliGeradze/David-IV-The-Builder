import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { useState, useRef, useEffect } from 'react'
import Davit from './assets/King.png'
import Cards from './Cards.jsx'
import Timeline from './Timeline.jsx'
import ScrollReveal from './ScrollReveal.jsx'
import Intro from './assets/Final.mp4'
import Audio from './assets/Audio.mp3'
import Sword from './assets/sword.png'
import { Routes, Route } from "react-router-dom";
import Biography from "./Bio";
import Achievements from './Achievements'
import Legacy from './Legacy.jsx'
import Gallery from './Gallery.jsx'


function App() {
  const [loading, setLoading] = useState(!sessionStorage.getItem('introShown'));
  const [started, setStarted] = useState(!!sessionStorage.getItem('introShown'));
  const [isDarkMode, setIsDarkMode] = useState(true);
  const audioRef = useRef(null);
  const startSite = () => {
    setStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);
  return (
    <>
      <audio ref={audioRef} src={Audio} />
      {!started ? (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'black', display: 'flex', justifyContent: 'center',
          alignItems: 'center', color: 'white', zIndex: 99999, cursor: 'pointer',
          flexDirection: 'column', gap: '20px'
        }} onClick={startSite}>
          <h1 id='h1'>David The Builder IV</h1>
          <div className="enter">
            <div className="intro-left">
              <img src={Sword} alt="" />
            </div>
            <div className="intro-middle">
              <h1>Click to Enter</h1>
            </div>
            <div className="intro-right">
              <img src={Sword} alt="" />
            </div>
          </div>
        </div>
      ) : loading ? (
        <div id="preloader">
          <video
            autoPlay
            muted
            onEnded={() => {
              setLoading(false);
              sessionStorage.setItem('introShown', 'true');
            }}
          >
            <source src={Intro} type="video/mp4" />
          </video>
        </div>
      ) : (
        <>
          <Header
            onPlay={() => {
              setLoading(true);
              if (audioRef.current) {
                audioRef.current.play().catch(e => console.log("Audio play failed:", e));
              }
            }}
            isDarkMode={isDarkMode}
            toggleTheme={() => setIsDarkMode(!isDarkMode)}
          />
          <Routes>
            <Route path="/" element={
              <>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
                <div className="container">
                  <ScrollReveal className="left">
                  <h1 id='hh'>King David IV the Builder</h1> 
                  <h2 id='hh'>━━━━ King of Georgia ━━━━</h2> 
                  <p id='hh'> David IV the Builder strengthened and unified the Kingdom of Georgia, transforming it into one of the most powerful states in the region. Under his leadership, Georgia experienced a golden age of political stability, military success, and cultural growth. He liberated Georgian lands from foreign domination, most notably achieving a decisive victory against the Seljuk Turks at the Battle of Didgori. He reformed the army and administration, invited scholars and thinkers to his court, and founded important cultural and educational centers such as the Gelati Monastery, which became a hub of knowledge and learning. David elevated the authority of the Georgian Church while promoting unity across the kingdom. <br /><br /> His vision extended far beyond his reign—he laid the foundation for a strong, centralized Georgian state that would flourish for generations. Today, he is remembered as one of Georgia’s greatest kings, a brilliant strategist, and a symbol of unity, strength, and national revival.</p>
                  </ScrollReveal>
                  <ScrollReveal className="right">
                    <img src={Davit} alt="" />
                  </ScrollReveal>
                </div>
                <br />
                <br />
                <br />
                <Cards />
                <h1 id='h1'>Timeline of Davit The Builder IV</h1>
                <Timeline />
                <br />
                <br />
                <Footer />
              </>
            } />
            <Route path="/biography" element={<Biography />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/legacy" element={<Legacy/>}/>
            <Route path="/gallery" element={<Gallery/>} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;