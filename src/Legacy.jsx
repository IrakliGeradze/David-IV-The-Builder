import React from 'react'
import ScrollReveal from './ScrollReveal.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import lega from './assets/imag.png'
import first from './assets/1.png'
import second from './assets/2.png'
import third from './assets/3.png'
import fourth from './assets/4.png'
import fifth from './assets/5.png'

function Legacy() {
    return (
        <>
        <img id='imag' src={lega} alt="" />
        <br />
        <br />
        <br />
        <h1 id='h'>David IV The Builder Legacy</h1>
        <br />
        <br />
            <div className="legacy-wrapper">
            <div className="legacy">
                    <div className="right">
                    <ScrollReveal>
                    <div className="item">
                        <img src={first} alt="" />
                        <div className="line-vertical"></div>
                        <div className="text">
                            <h2>Military Genius</h2>
                            <p>A brilliant strategist who led Georgia to miraculous victories.</p>
                        </div>
                    </div>
                    </ScrollReveal>
                    <ScrollReveal>
                    <div className="item">
                        <img src={second} alt="" />
                        <div className="line-vertical"></div>
                        <div className="text">
                            <h2>Unifier of Georgia</h2>
                            <p>United fragmented lands into one powerful kingdom.</p>
                        </div>
                    </div>
                    </ScrollReveal>
                    <ScrollReveal>
                    <div className="item">
                        <img src={third} alt="" />
                        <div className="line-vertical"></div>
                        <div className="text">
                            <h2>Cultural Patron</h2>
                            <p>Founded Gelati and promoted education & culture.</p>
                        </div>
                    </div>
                    </ScrollReveal>
                    <ScrollReveal>
                    <div className="item">
                        <img src={fourth} alt="" />
                        <div className="line-vertical"></div>
                        <div className="text">
                            <h2>Golden Age</h2>
                            <p>Led Georgia into prosperity and greatness.</p>
                        </div>
                    </div>
                    </ScrollReveal>
                    <ScrollReveal>
                    <div className="item">
                        <img src={fifth} alt="" />
                        <div className="line-vertical"></div>
                        <div className="text">
                            <h2>National Hero</h2>
                            <p>A symbol of unity and pride for all Georgians.</p>
                        </div>
                    </div>
                    </ScrollReveal>
                    </div>
            </div>
            <div className="quote">
                “Strength is not in numbers, but in unity and faith.”
            </div>
        </div>
        <br />
        <br />
        <Footer/>
        </>
    )
}

export default Legacy;