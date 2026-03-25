import Davit from './assets/King.png'
import Cards from './Cards.jsx'
import Timeline from './Timeline.jsx'
import ScrollReveal from './ScrollReveal.jsx'

function Home() {
  return (
    <>
      <div className="container">
        <ScrollReveal className="left">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        <h1 id='hh'>King David IV the Builder</h1>
        <h2 id='hh'>━━━━ King of Georgia ━━━━</h2>
        <p id='hh'>
        David IV the Builder strengthened and unified the Kingdom of Georgia, transforming it into one of the most powerful states in the region. Under his leadership, Georgia experienced a golden age of political stability, military success, and cultural growth. He liberated Georgian lands from foreign domination, most notably achieving a decisive victory against the Seljuk Turks at the Battle of Didgori.

        He reformed the army and administration, invited scholars and thinkers to his court, and founded important cultural and educational centers such as the Gelati Monastery, which became a hub of knowledge and learning. David elevated the authority of the Georgian Church while promoting unity across the kingdom.

        <br /><br />
        His vision extended far beyond his reign—he laid the foundation for a strong, centralized Georgian state that would flourish for generations. Today, he is remembered as one of Georgia’s greatest kings, a brilliant strategist, and a symbol of unity, strength, and national revival.
        </p>
        </ScrollReveal>
        <ScrollReveal className="right">
          <img src={Davit} alt="" />
        </ScrollReveal>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Cards/>
      <br />
      <br />
      <div>
        <h1 id='h1'>Timeline of Davit The Builder IV</h1>
      </div>
      <br />
      <br />
      <Timeline/>
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Home