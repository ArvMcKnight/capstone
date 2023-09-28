import { useState } from "react";
import "../assets/css/interactive.css";
import guide from "../assets/images/sample.jpg"
import Interaction from "../components/Interactions";

import image1 from '../assets/images/interImages/black-hole.jpg'
import image2 from '../assets/images/interImages/dark-matter.jpg'
import image3 from '../assets/images/interImages/detecting-other-world.jpg'
import image4 from '../assets/images/interImages/exoplanet-diversity.jpg'
import image5 from '../assets/images/interImages/interacting-galaxies.jpg'
import image6 from '../assets/images/interImages/seeing-farther.jpg'
import image7 from '../assets/images/interImages/star-Death.jpg'
import image8 from '../assets/images/interImages/variable-stars.jpg'
import image9 from  '../assets/images/analyzing-light/image9_1.jpg'

import ssBanner from '../assets/images/SolarSystemBanner.webp'
import marsBanner from '../assets/images/Mars2020Banner.jpg'
import earthBanner from '../assets/images/EarthBanner.jpg'
import asteroidBanner from '../assets/images/AsteroidsBanner.jpg'
import Helmet from '../components/Helmet/Helmet';


const Interactives = () => {
    const [open,setOpen] =  useState(false)
    const [imgN,setImgN] = useState("img1")
    const [order,setOrder] = useState(0)
    const CardsHandle = e => {
        const {id} = e.target.dataset
        setOpen(true)        
        setImgN(`img${id}`)
        setOrder(parseInt(id) -1)
        console.log(imgN)
    }
    return (
        <Helmet title='Interactives'>   
        <div className="interactivebody">
        <div className="interHero">
            <div className="interText">
            <h1>INTERACTIVES</h1>
            <h4>EXPLORE THE UNIVERSE WITH INTERACTIVES</h4>
            </div>   
        </div>
        <div id="scroll"></div>
            
        {open == false ?
        <> 
        <div className="interWelcome">
            <h3 className="interWelcome1">Expand Your Universe with TheUniverse Interactives</h3>
            <p className="interWelcom2">Interactives allow you to explore objects and materials from different perspectives, and discover how we can combine information to better understand the universe.</p>
            <p></p>
            <hr />
        </div>
        <section className="interBenefits">
        <p>Spy newly forming stars hidden inside giant clouds of gas and dust</p>
        <p>Search for a pulsar in the remains of an exploded star</p>
        <p>Witness the effects of galaxy collisions</p>
        <p>Explore ways of detecting and investigating planets orbiting distant stars</p>
        </section>
        <div className="guide">
        < img src={guide}/>
        </div>
        </>:''
        }
        {open &&

            < Interaction order={order} img={imgN}/>
        }
        {open == false ?
        <div className="explore">
            <h3 className="explore1">Start Exploring</h3>
            <p>Select a topic below to access our interactive sliders. Each topic includes a number of sliders, which are accessible by expanding the topic within the Topics Menu (shown above), and then clicking on the slider title.</p>
            <hr />
        </div>:''
        }


        <div className="cards_">
            <div className="card_text">
                <h5>Explore More</h5>
                <p>Find out more with these additional resources from NASA's Universe of Learning</p>
            </div>
            <div className="div1">
            <a href="#scroll">
            <div className="image">
                <img src={image1} alt="image1" data-id="1" onClick={CardsHandle}/>
                <p>Black Holes</p>
            </div>
            </a>

            <a href="#scroll" >
            <div className="image">
                <img src={image2} alt="image1"  data-id="2" onClick={CardsHandle}/>
                <p>Dark Matter</p>
            </div>
            </a>
            
            <a href="#scroll">
            <div className="image">
                <img src={image3} alt="image1" data-id="3" onClick={CardsHandle}/>
                <p>Detecting other world</p>
            </div>
            </a>
            </div>

            <div className="div2">
                <a href="#scroll">
            <div className="image">
                <img src={image4} alt="image1" data-id="4" onClick={CardsHandle} />
                <p>Star formation</p>
            </div>
                </a>
                <a href="#scroll">
            <div className="image">
                <img src={image5} alt="image1" data-id="5" onClick={CardsHandle}/>
                <p>Interacting galaxies</p>
            </div>
                </a>
                <a href="#scroll">
            <div className="image">
                <img src={image6} alt="image1" data-id="6" onClick={CardsHandle}/>
                <p>Gathering light</p>
            </div>
                </a>
            </div>
            <div className="div3">

                <a href="#scroll" >
            <div className="image">
                <img src={image7} alt="image1"data-id="7" onClick={CardsHandle}/>
                <p>Star death</p>
            </div>
                </a>
                <a href="#scroll">
            <div className="image">
                <img src={image8} alt="image1"  data-id="8" onClick={CardsHandle}/>
                <p>Variable stars</p>
            </div>
                </a>

                <a href="#scroll">
            <div className="image">
                <img src={image9} alt="image1"  data-id="9" onClick={CardsHandle}/>
                <p>Analyzing light</p>
            </div>
                </a>
            </div>
        </div>
        <section className="interactive">
            <p>Cosmic Explorations is proud to announce an incredible partnership with <strong>Solarsystemscope.com</strong> and <strong>NASA,</strong> bringing you a new era of immersive 3D models and interactive experiences like never before. This collaboration marks a significant milestone in our commitment to enhancing your knowledge and exploration of the cosmos.</p>
            <hr />
            <div className="iframe-img">

            <iframe
                src="https://www.solarsystemscope.com/iframe"
                name="solarsystemscope_iframe"
                ></iframe>
                </div>
                <br />
            <div className="NASA">
                    <a className="banner" href="https://eyes.nasa.gov/apps/asteroids/#/home">
                        <img src={asteroidBanner} alt="NASA Solar Asteroid Banner" />
                        </a>
                    <hr />
                    <br />
                <a className="banner" href="https://eyes.nasa.gov/apps/mars2020/#/home">
                    <img src={marsBanner} alt="NASA Solar Mars Banner" />
                    </a>
                <hr />
                <br />
                <a className="banner" href="https://eyes.nasa.gov/apps/earth/">
                    <img src={earthBanner} alt="NASA Solar Earth Banner" />
                    </a>
                <hr />
                <br />
                <a className="banner" href="https://eyes.nasa.gov/apps/solar-system/">
                    <img src={ssBanner} alt="NASA Solar System Banner" />
                    </a>
                <hr />
                <br />


            </div>
        </section>
        </div>  
        

        {/* <section className="NasaList">
            <a className="bannerOne" href="https://eyes.nasa.gov/apps/solar-system/#/home">Learn More</a>
            <a href="https://eyes.nasa.gov/apps/earth/#/">
                <div>Images</div>
            </a>
        </section> */}

        </Helmet>
        
    )   
}

export default Interactives;