import War1 from './assets/Warss.png'
import War2 from './assets/War22.png'
import ScrollReveal from './ScrollReveal.jsx'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Cards () {
    return (
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
            <div className="Out">
                <div className="in">
                    <ScrollReveal className="cards">
                        <img src={War1} alt="" />
                        <h1>Clash with the Seljuk Empire</h1>
                        <div className="straigth"></div>
                        <p>Discover the legendary battles that shaped Georgia’s destiny</p>
                        <br />
                        <Link id='s' to="/achievements">View More ➥</Link>
                    </ScrollReveal>
                    <ScrollReveal className="cards">
                        <img src={War2} alt="" />
                        <h1>Battle of Didgori</h1>
                        <div className="straigth"></div>
                        <p>Explore the decisive victory that changed history</p>
                        <br />
                        <Link id='s' to="/achievements">View More ➥</Link>
                    </ScrollReveal>
                </div>
            </div>
        </>
    )
}

export default Cards;