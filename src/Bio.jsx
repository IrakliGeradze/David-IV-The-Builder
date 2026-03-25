import React from 'react'
import Sword from './assets/sword.png'
import ScrollReveal from './ScrollReveal.jsx'
import Footer from './Footer.jsx'
import Biog from './assets/Biography.png'
import King from './assets/King.PNG'


function Biography() {
    return (
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
            <div className="bio">
                <div className="graphy">
                    <h1>David IV The Builder - Biography</h1>
                    <p>David IV, known as “The Builder,” was one of the greatest kings in the history of Georgia. He was born in 1073 and became king at a very young age, inheriting a weakened and divided kingdom threatened by foreign powers, especially the Seljuk Turks.
                    Despite his youth, David proved to be a brilliant and determined ruler. He began by strengthening the state from within—reforming the army, centralizing power, and reducing the influence of rebellious nobles. One of his most important military reforms was the creation of a strong, disciplined army, including the famous Kipchak warriors who became a key force in his campaigns.
                    <br />
                    David’s greatest achievement came in 1121 at the Battle of Didgori, where his forces defeated a much larger Seljuk army. This victory is often considered one of the most important moments in Georgian history, marking the beginning of Georgia’s golden age.
                    <br />
                    Following his military successes, David liberated Tbilisi and made it the capital of his kingdom, uniting much of Georgia under a strong centralized rule. He also focused heavily on culture and education. He founded the Gelati Monastery, which became a major center of learning, often referred to as the “Second Athens.”
                    <br />
                    David was not only a warrior king but also a wise and humble leader. He promoted justice, supported the church, and encouraged intellectual and cultural growth throughout his kingdom.
                    <br />
                    He died in 1125, leaving behind a powerful and united Georgia. Today, David IV is remembered as a national hero, a symbol of strength, wisdom, and unity, and one of the greatest rulers in Georgian history.</p>
                </div>
                
                <ScrollReveal className='sword'>
                    <img src={Biog} alt="" />
                    <img src={King} alt="" />
                </ScrollReveal>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Footer/>
        </>
    )
}

export default Biography;
