import ScrollReveal from './ScrollReveal.jsx'
import Footer from './Footer.jsx'
import Biog from './assets/Biography.png'
import King from './assets/King.png'
import Img from './assets/img.png'
import d1 from './assets/d1.png'
import geo from './assets/geo.png'
import imag2 from './assets/imag2.png'


function Gallery(){
    return(
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ScrollReveal className='sword'>
            <div className="gallery">
                <img src={Biog} alt="" />
                <img src={King} alt="" />
                <img src={Img} alt="" />
                <img src={d1} alt="" />
            </div>
        </ScrollReveal>
        <br />
        <br />
        <div className="another">
            <img src={geo} alt="" />
            <img src={imag2} alt="" />
            <br />
        </div>
        <br />
        <br />
            <p id='h2'>During the reign of David IV of Georgia, also known as David the Builder, Georgia experienced one of the most powerful and transformative periods in its history. His rule, from 1089 to 1125, is often considered the beginning of the Georgian Golden Age—a time when the kingdom rose from fragmentation and foreign domination to become a strong, unified, and culturally flourishing state.
When David came to power at the age of just 16, Georgia was in a weakened condition. Much of its territory was under the control of the Seljuk Empire, whose invasions had devastated the land, forced people to abandon cities, and disrupted economic life.</p>
        <br />
        <br />
        <Footer/>
        </>
    )
}

export default Gallery;