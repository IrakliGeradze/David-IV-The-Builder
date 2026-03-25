import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Header({ onPlay, isDarkMode, toggleTheme }){
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return(
        <>
        <div className="header" style={{ borderBottom: scrolled ? '2px solid #dfdbdb' : 'none' }}>
            <button className="header-btn left" onClick={onPlay}>▶</button>
            <div className="header-nav">
                <Link to="/">Home</Link>
                <Link to="/achievements">Achievements</Link>
                <Link to="/legacy">Legacy</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/biography">Biography</Link>
            </div>
            <button className="header-btn right" onClick={toggleTheme}>{isDarkMode ? '☀' : '☾'}</button>
        </div>
        </>
    )
}

export default Header;