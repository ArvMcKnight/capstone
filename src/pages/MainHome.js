import "../assets/css/home.css";
import videoBg from '../assets/images/loob.mp4' 
import Popup from '../components/popup'
import React, { useState } from 'react';
import human1 from '../assets/images/Nicolaus-Copernicus.webp'
import human2 from '../assets/images/kepler.jpg'
import human3 from '../assets/images/Galileo Galilei.jpg'
import human4 from '../assets/images/Isaac.jpg'
import Helmet from '../components/Helmet/Helmet';




const MainHome = () => {
  const [isPopupOpen1, setIsPopupOpen1] = useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const [isPopupOpen3, setIsPopupOpen3] = useState(false);
  const [isPopupOpen4, setIsPopupOpen4] = useState(false);

  const openPopup1 = () => {
    setIsPopupOpen1(true);
  };
  
  const closePopup1 = () => {
    setIsPopupOpen1(false);
  };
  
  const openPopup2 = () => {
    setIsPopupOpen2(true);
  };
  
  const closePopup2 = () => {
    setIsPopupOpen2(false);
  };
  
  const openPopup3 = () => {
    setIsPopupOpen3(true);
  };
  
  const closePopup3 = () => {
    setIsPopupOpen3(false);
  };
  const openPopup4 = () => {
    setIsPopupOpen4(true);
  };
  
  const closePopup4 = () => {
    setIsPopupOpen4(false);
  };
  
  const card1Content = {
    title: 'Nicolas Copernicus (1473-1543)',
    content: 'Nicolaus Copernicus was an astronomer who proposed a heliocentric system, that the planets orbit around the Sun; that Earth is a planet which, besides orbiting the Sun annually, also turns once daily on its own axis; and that very slow changes in the direction of this axis account for the precession of the equinoxes.',
    image: human1
    
  };

  const card2Content = {
    title: 'Johannes Kepler (1571-1630) ',
    content: 'Johannes Kepler was a German mathematician and astronomer who discovered that the Earth and planets travel about the sun in elliptical orbits. He gave three fundamental laws of planetary motion. He also did important work in optics and geometry..',
    image: human2
  };

  const card3Content = {
    title: 'Galileo Galilei (1564-1642)',
    content: 'Galileo Galilei pioneered the experimental scientific method and was the first to use a refracting telescope to make important astronomical discoveries. He is often referred to as the “father of modern astronomy” and the “father of modern physics”. Albert Einstein called Galileo the “father of modern science.  ',
    image: human3
  };

  const card4Content = {
    title: 'Isaac Newton (1642-1727)',
    content: 'Newtons theory of universal gravitation says that every particle in the universe attracts every other particle through the force of gravity. The theory helps us predict how objects as large as planets and as small as individual colliding molecules will interact; it shows us the way earthquakes ripple through the Earth’s crust and how to build building that can withstand them.',
    image: human4
  };
  return (
        <Helmet title={'Home'}>
        <div className="heroSection">
            <video src={videoBg} autoPlay loop muted/>
            <p className="heroContent">Discover the Wonders Beyond the stars</p>
        </div>
        <div className="breaker"></div>
        <div className="landingBody">
            <div className="introPage">
              <h6 className="introText">Welcome to CosmicExplorations, your gateway to the wonders of the universe. Embark on a mesmerizing journey through the cosmos with us, where the stars themselves become our guiding lights. Our mission is to illuminate the mysteries of outer space and showcase the beauty and marvels that await beyond our world. Whether you're a seasoned astronomer or just starting your cosmic adventure, our website is your source for captivating articles, stunning imagery, and interactive experiences that will ignite your curiosity about the universe. Join us as we explore the vastness of space, study distant stars, and bring the wonders of the cosmos closer to you.</h6>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="astronomers" id="astronomers">
              <p>Founders of Astronomy</p>
            </div>
            <section className="Features">
              {/* Card 1 */}
              <div className="cards">
                <button onClick={openPopup1}><img src={card1Content.image} alt="Nicolaus Copernicus" className="image-hover-effect" /></button>
                {isPopupOpen1 && <Popup onClose={closePopup1} title={card1Content.title} content={card1Content.content} image={card1Content.image} />}
                <p className="name">Nicolaus Copernicus</p>
              </div>

              {/* Card 2 */}
              <div className="cards"> 
                <button onClick={openPopup2}><img src={card2Content.image} alt="Johannes Kepler" className="image-hover-effect"/></button>
                {isPopupOpen2 && <Popup onClose={closePopup2} title={card2Content.title} content={card2Content.content} image={card2Content.image} />}
                <p className="name">Johannes Kepler</p>
              </div>

              {/* Card 3 */}
              <div className="cards">
                <button onClick={openPopup3}><img src={card3Content.image} alt="Galileo Galilie" className="image-hover-effect" /></button>
                {isPopupOpen3 && <Popup onClose={closePopup3} title={card3Content.title} content={card3Content.content} image={card3Content.image} />}
                <p className="name">Galileo Galilie</p>
              </div>

              {/* Card 4 */}
              <div className="cards">
                <button onClick={openPopup4}><img src={card4Content.image} alt="Galileo Galilie" className="image-hover-effect" /></button>
                {isPopupOpen4 && <Popup onClose={closePopup4} title={card4Content.title} content={card4Content.content} image={card4Content.image} />}
                <p className="name">Isaac Newton</p>
              </div>
            </section>

          <div>
            <section className="planets" id="planets">
              <h2 className="planetTitle">Planets</h2>
              <div className="Mercury">
                <div className="descrip">
                  <div className="text-container">
                  <p className="descrip1"><strong>Mercury</strong> is the smallest and closest planet to the Sun in our solar system. It's a barren, rocky world with extreme temperature variations, scorching hot on its sunlit side and frigidly cold in the shadows. With a lack of a substantial atmosphere, Mercury's surface is marked by craters and rugged terrains.</p>
                  <ul className="descrip2">
                    <li><strong>Equator circumference:</strong> 15,329km</li>
                    <li><strong>Radius:</strong> 2,440km</li>
                    <li><strong>Average distance from Sun:</strong> 58 million km</li>
                    <li><strong>Surface temperature:</strong> -180°C to 430°C</li>
                    <li><strong>Average orbital speed:</strong> 170,500km/h (47km/s)</li>
                    <li><strong>Moons:</strong> 0</li> 
                   
                  </ul>
                </div>
                <div className="image">
                <iframe
                  src='https://solarsystem.nasa.gov/gltf_embed/2369'  
                  title='Solar System Embed'
                />
                </div>
                </div>  
              </div>
              <div className="Venus">
                <div className="descrip">
                  <div className="image">
                <iframe
                  src='https://solarsystem.nasa.gov/gltf_embed/2342&#39'  
                  title='Solar System Embed'
                /></div>
                <div className="text-container">
                <p className="descrip1"><strong>Venus</strong> is the second planet from the Sun and Earth's closest planetary neighbor. Even though Mercury is closer to the Sun, Venus is the hottest planet in our solar system. Its thick atmosphere is full of the greenhouse gas carbon dioxide, and it has clouds of sulfuric acid.</p>
                  <ul className="descrip2">
                    <li><strong>Equator circumference:</strong> 38,025km</li>
                    <li><strong>Radius:</strong> 6,052km</li>
                    <li><strong>Average distance from Sun:</strong> 108 million km</li>
                    <li><strong>Surface temperature:</strong> 462°C</li>
                    <li><strong>Average orbital speed:</strong> 126,074km/h (35km/s)</li>
                    <li><strong>Moons:</strong> 0</li> 
                   
                  </ul>
                  </div>
                
                </div>  
              </div>
              <div className="earth">
                <div className="descrip">
                  <div className="text-container">
                  <p className="descrip1"><strong>Earth,</strong> our home planet is the third planet from the Sun, and the only place we know of so far that's inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.</p>
                  <ul className="descrip2">
                    <li><strong>Equator circumference:</strong> 40,075km</li>
                    <li><strong>Radius:</strong> 6,371km</li>
                    <li><strong>Average distance from Sun:</strong> 149.6 million km</li>
                    <li><strong>Surface temperature:</strong> 15°C to 35°C</li>
                    <li><strong>Average orbital speed:</strong> 107,000km/h (30km/s)</li>
                    <li><strong>Moons:</strong> 1</li> 
                   
                  </ul>
                </div>
                <div className="image">
                <iframe
                  src='https://solarsystem.nasa.gov/gltf_embed/2393&#39'  
                  title='Solar System Embed'
                />
                </div>
                </div>  
              </div>
              <div className="mars">
                <div className="descrip">
                  <div className="image">
                <iframe
                  src='https://solarsystem.nasa.gov/gltf_embed/2372&#39'  
                  title='Solar System Embed'
                /></div>
                <div className="text-container">
                <p className="descrip1"><strong>Mars</strong> is the fourth planet from the Sun - a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past. It is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape.</p>
                  <ul className="descrip2">
                    <li><strong>Equator circumference:</strong> 21,297km</li>
                    <li><strong>Radius:</strong> 3,390km</li>
                    <li><strong>Average distance from Sun:</strong> 228 million km</li>
                    <li><strong>Surface temperature:</strong> -153°C to 20°C</li>
                    <li><strong>Average orbital speed:</strong> 86,700km/h (24km/s)</li>
                    <li><strong>Moons:</strong> 2</li> 
                   
                  </ul>
                  </div>
                
                </div>  
              </div>
              <div className="jupiter">
                <div className="descrip">
                  <div className="text-container">
                  <p className="descrip1"><strong>Jupiter,</strong> the largest planet in our solar system, is a vast and stormy world. Its atmosphere, primarily composed of hydrogen and helium, is crossed with swirling clouds of ammonia that give the planet its banded appearance. These bands encircle Jupiter, and are driven by winds of up to 360 kilometres per hour. Each travels in the opposite direction to its neighbours, leading to tremendous turbulence where two bands meet.</p>
                  <ul className="descrip2">
                    <li><strong>Equator circumference:</strong> 439,264km</li>
                    <li><strong>Radius:</strong> 69,911km</li>
                    <li><strong>Average distance from Sun:</strong> 778  million km</li>
                    <li><strong>Surface temperature:</strong>  -145 degrees Celsius (-234 degrees Fahrenheit)</li>
                    <li><strong>Average orbital speed:</strong> 47,160km/h </li>
                    <li><strong>Moons:</strong> 79</li> 
                   
                  </ul>
                </div>
                <div className="image">
                <iframe
                  src='https://solarsystem.nasa.gov/gltf_embed/2369'  
                  title='Solar System Embed'
                />
                </div>
                </div>  
              </div>
              <div className="saturn">
                <div className="descrip">
                  <div className="image" >
                <iframe
                  src='https://solarsystem.nasa.gov/gltf_embed/2355&#39' 
                  title='Solar System Embed'
                  
                /></div>
                <div className="text-container">
                <p className="descrip1"><strong>Saturn</strong> is the sixth planet from the Sun and the second-largest planet in our solar system. Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings – made of chunks of ice and rock – but none are as spectacular or as complicated as Saturn's</p>
                  <ul className="descrip2">
                    <li><strong>Equator circumference:</strong> 378,675km</li>
                    <li><strong>Radius:</strong> 58,232km</li>
                    <li><strong>Average distance from Sun:</strong>  1.42 billion km</li>
                    <li><strong>Surface temperature:</strong> -139 degrees Celsius</li>
                    <li><strong>Average orbital speed:</strong> 34,884km/h </li>
                    <li><strong>Moons:</strong> 80</li> 
                   
                  </ul>
                  </div>
                
                </div>  
              </div>
              <div className="uranus">
                <div className="descrip">
                  <div className="text-container">
                  <p className="descrip1"><strong>Uranus</strong> is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead, the scientific community accepted Bode's suggestion to name it Uranus, the Greek god of the sky, as suggested by Bode.​</p>
                  <ul className="descrip2">
                    <li><strong>Equator circumference:</strong> 378,675km</li>
                    <li><strong>Radius:</strong> 58,232km</li>
                    <li><strong>Average distance from Sun:</strong> 1.42 billion  km</li>
                    <li><strong>Surface temperature:</strong> -139 degrees Celsius </li>
                    <li><strong>Average orbital speed:</strong> 34,884km/h </li>
                    <li><strong>Moons:</strong> 80+</li> 
                   
                  </ul>
                </div>
                <div className="image">
                <iframe
                  src='https://solarsystem.nasa.gov/gltf_embed/2344&#39'  
                  title='Solar System Embed'
                />
                </div>
                </div>  
              </div>
              <div className="neptune">
                <div className="descrip">
                  <div className="image">
                <iframe
                  src='https://solarsystem.nasa.gov/gltf_embed/2364&#39'  
                  title='Solar System Embed'
                /></div>
                <div className="text-container">
                <p className="descrip1">Dark, cold, and whipped by supersonic winds, ice giant <strong>Neptune</strong> is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846. NASA's Voyager 2 is the only spacecraft to have visited Neptune up close. It flew past in 1989 on its way out of the solar system.</p>
                  <ul className="descrip2">
                    <li><strong>Equator circumference:</strong> 155,600km</li>
                    <li><strong>Radius:</strong> 24,622km</li>
                    <li><strong>Average distance from Sun:</strong> 4.5 billion km</li>
                    <li><strong>Surface temperature:</strong> -224 degrees Celsius</li>
                    <li><strong>Average orbital speed:</strong> 19,548km/h (24km/s)</li>
                    <li><strong>Moons:</strong> 14</li>  
                  </ul>
                  </div>  
                </div>  
              </div>
            </section>
            <br></br>
          </div>
        </  div>  
        </Helmet>
    )
}

export default MainHome;