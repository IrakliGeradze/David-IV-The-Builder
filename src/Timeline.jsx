import ScrollReveal from './ScrollReveal.jsx'
import sword from './assets/sword.png'


function Timeline(){
    return(
        <>
        <div className="timeline">
            <div className="timeline-line">
                <img src={sword} alt="sword" />
            </div>
            <div className="timeline-items">
                <ScrollReveal className="timeline-item">
                    <h1>1073</h1>
                    <h2>Birth</h2>
                    <p>Born into the Bagrationi Dynasty</p>
                    <p className="red">Son of King George II</p>
                </ScrollReveal>
                <ScrollReveal className="timeline-item">
                    <h1>1089</h1>
                    <h2>Becomes King</h2>
                    <p>Ascends the throne at a young age</p>
                    <p className="red">Begins reforms immediately</p>
                </ScrollReveal>
                <ScrollReveal className="timeline-item">
                    <h1>1090s</h1>
                    <h2>Reforms & Strengthening</h2>
                    <p>Reorganizes army and government</p>
                    <p className="red">Reduces noble opposition</p>
                </ScrollReveal>
                <ScrollReveal className="timeline-item">
                    <h1>1104</h1>
                    <h2>Unification Begins</h2>
                    <p>Annexes Kakheti-Hereti</p>
                    <p className="red">Expands royal authority</p>
                </ScrollReveal>
                <ScrollReveal className="timeline-item">
                    <h1>1121</h1>
                    <h2>Battle of Didgori</h2>
                    <p>Defeats Seljuk forces decisively</p>
                    <p className="red">Turning point for Georgia</p>
                </ScrollReveal>
                <ScrollReveal className="timeline-item">
                    <h1>1122</h1>
                    <h2>Liberation of Tbilisi</h2>
                    <p>Captures Tbilisi from Seljuks</p>
                    <p className="red">Declares it the capital</p>
                </ScrollReveal>
                <ScrollReveal className="timeline-item">
                    <h1>1106-1130</h1>
                    <h2>Cultural Golden Age</h2>
                    <p>Founds Gelati Monastery</p>
                    <p className="red">Promotes education & faith</p>
                </ScrollReveal>
                <ScrollReveal className="timeline-item">
                    <h1>1125</h1>
                    <h2>Death</h2>
                    <p>Dies after a legendary reign</p>
                    <p className="red">Leaves powerful unified kingdom</p>
                </ScrollReveal>
            </div>
        </div>
        </>
    )
}
export default Timeline