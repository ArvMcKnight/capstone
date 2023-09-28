import { useEffect, useState ,useRef} from "react"
import '../assets/css/interaction.css'
import Image1_1 from "../assets/images/interactive/interImage1.jpg" 
import Image2_1 from "../assets/images/interactive/interImage2.jpg" 
import Image3_1 from "../assets/images/interactive/interImage3.jpg" 
import Image4_1 from "../assets/images/interactive/interImage4.jpg" 
import Image5_1 from "../assets/images/interactive/interImage5.jpg" 
import Image6_1 from "../assets/images/interactive/interImage6.jpg" 
import Image7_1 from "../assets/images/interactive/interImage7.jpg" 
import Image8_1 from "../assets/images/interactive/interImage8.jpg" 
import Image9_1 from "../assets/images/interactive/interImage9.jpg" 
import Image10_1 from "../assets/images/interactive/interImage10.jpg" 

import Image1_2 from '../assets/images/interactive/darkmatter/image1.jpg'
import Image2_2 from '../assets/images/interactive/darkmatter/image2.jpg'
import Image3_2 from '../assets/images/interactive/darkmatter/image3.jpg'
import Image4_2 from '../assets/images/interactive/darkmatter/image4.jpg'
import Image5_2 from '../assets/images/interactive/darkmatter/image5.jpg'
import Image6_2 from '../assets/images/interactive/darkmatter/image6.jpg'
import Image7_2 from '../assets/images/interactive/darkmatter/image7.jpg'

import Image1_3 from '../assets/images/variable-stars/Image12-1.jpg'
import Image2_3 from '../assets/images/variable-stars/Image12-2.jpg'
import Image3_3 from '../assets/images/variable-stars/Image12-3.jpg'
import Image4_3 from '../assets/images/variable-stars/Image12-4.jpg'
import Image5_3 from '../assets/images/variable-stars/Image12-5.jpg'

import Image1_4 from '../assets/images/star-formation/Image11-1.jpg'
import Image2_4 from '../assets/images/star-formation/Image11-2.jpg'
import Image3_4 from '../assets/images/star-formation/Image11-3.jpg'
import Image4_4 from '../assets/images/star-formation/Image11-4.jpg'
import Image5_4 from '../assets/images/star-formation/Image11-5.jpg'

import Image1_5 from '../assets/images/star-death/Image9-1.jpg'
import Image2_5 from '../assets/images/star-death/Image9-2.jpg'
import Image3_5 from '../assets/images/star-death/Image9-3.jpg'
import Image4_5 from '../assets/images/star-death/Image9-4.jpg'
import Image5_5 from '../assets/images/star-death/Image9-5.jpg'

import Image1_6 from '../assets/images/seeing-farther/Image8-1.jpg'
import Image2_6 from '../assets/images/seeing-farther/Image8-2.jpg'
import Image3_6 from '../assets/images/seeing-farther/Image8-3.jpg'
import Image4_6 from '../assets/images/seeing-farther/Image8-4.jpg'
import Image5_6 from '../assets/images/seeing-farther/Image8-5.jpg'

import Image1_7 from '../assets/images/interacting-galaxies/Image7-1.jpg'
import Image2_7 from '../assets/images/interacting-galaxies/Image7-2.jpg'
import Image3_7 from '../assets/images/interacting-galaxies/Image7-3.jpg'
import Image4_7 from '../assets/images/interacting-galaxies/Image7-4.jpg'
import Image5_7 from '../assets/images/interacting-galaxies/Image7-5.jpg'
import Image6_7 from '../assets/images/interacting-galaxies/Image7-6.jpg'

import Image1_8 from '../assets/images/gathering-light/Image6-1.png'
import Image2_8 from '../assets/images/gathering-light/Image6-2.png'
import Image3_8 from '../assets/images/gathering-light/Image6-3.png'
import Image4_8 from '../assets/images/gathering-light/Image6-4.png'
import Image5_8 from '../assets/images/gathering-light/Image6-5.png'

import Image1_9 from '../assets/images/analyzing-light/image9_1.jpg'
import Image2_9 from '../assets/images/analyzing-light/image9_2.jpg'
import Image3_9 from '../assets/images/analyzing-light/image9_3.jpg'
import Image4_9 from '../assets/images/analyzing-light/image9_4.jpg'
import Image5_9 from '../assets/images/analyzing-light/image9_5.jpg'
import Image6_9 from '../assets/images/analyzing-light/image9_6.jpg'
import Image7_9 from '../assets/images/analyzing-light/image9_7.jpg'


const Interaction = (props) => {
    const img = props.img
    const order = props.order
    const [image,setImage] = useState({
        img1: [[Image1_1,1],[Image2_1,1],[Image3_1,2],[Image4_1,2],[Image5_1,3],[Image6_1,3],[Image7_1,4],[Image8_1,4],[Image9_1,5],[Image10_1,5]],

        img2: [[Image1_2,1],[Image2_2,2],[Image3_2,2],[Image4_2,3],[Image5_2,3],[Image6_2,4],[Image7_2,4]],

        img3: [[Image1_3,1],[Image2_3,2],[Image3_3,3],[Image4_3,4],[Image5_3,5]],

        img4: [[Image1_4,1],[Image2_4,2],[Image3_4,3],[Image4_4,4],[Image5_4,5]],

        img5: [[Image1_5,1],[Image2_5,2],[Image3_5,3],[Image4_5,4],[Image5_5,5]],

        img6: [[Image1_6,1],[Image2_6,2],[Image3_6,3],[Image4_6,4],[Image5_6,5]],

        img7: [[Image1_7,1],[Image2_7,2],[Image3_7,3],[Image4_7,4],[Image5_7,5],[Image6_7,5]],

        img8: [[Image1_8,1],[Image2_8,2],[Image3_8,3],[Image4_8,4],[Image5_8,5]],

        img9: [[Image1_9,1],[Image2_9,2],[Image3_9,3],[Image4_9,4],[Image5_9,5],[Image6_9,5],[Image7_9,5]],

    })
    const [innerText,setInnerText] = useState({
        text1: `<h2>A STORY OF BLACK HOLES: SAGITTARIUS A*</h2>
        <h5>Identifying our galaxy's supermassive black hole by tracking stars' orbits.</h5>
        <p>A black hole is a region of space packed with so much mass that its own gravity prevents anything from escaping—even a ray of light. Although we can't see a black hole, telescopes can observe the material around it. Matter swirling around a black hole, which can be made up of gas and dust, heats up and emits radiation that can be detected. In some cases, telescopes can observe the gravitational influence of a black hole on the motions of nearby individual stars.</p>
        <p>
        Although a point-like radio source, known as Sagittarius A* (pronounced Sagittarius A-star), was detected at the center of our Milky Way galaxy in the 1970s, researchers could not accurately determine enough of the characteristics of this compact object to precisely describe it. Beginning in the 1990s, astronomers began using new techniques to measure the orbits of the fast-moving stars orbiting this area. By 2008, they not only tracked complete orbits, but also gained enough information to determine the mass of and distances to the stars. At this point, they could confirm that the mass of the object at the center of those orbits is 4.6 million times the mass of our sun and its size can be no bigger than the orbit of Pluto. That meant it could be nothing other than a supermassive black hole. Researchers still track these stars, but for new reasons: to test fundamental physics, including Einstein’s general theory of relativity, which continues to hold up.</p>
        <h2>QUICK FACTS: SAGITTARIUS A</h2>
        <p><strong>Also known as:</strong> Sgr A*</p>
        <p><strong>Distance from Earth:</strong> 26,000 light-years</p>
        <p><strong>Size:</strong> 4.6 million times the mass of the Sun</p>
        <p><strong>Type of object:</strong> Supermassive black hole</p>
        <p><strong>Location in the sky:</strong> Sagittarius Constellation</p>
        <p><strong>Location in the universe:</strong> Center of our Milky Way galaxy</p>
        <p><strong>Did you know:</strong> In 2018, researchers found evidence for thousands of stellar-mass black holes located within 3 light-years of Sagittarius A* at the center of our Milky Way galaxy.</p>
        `,
        text2: `
        <h2>A STORY OF DARK MATTER: BULLET CLUSTER</h2>
        <h5>Dark matter is an enigma; scientists know more about what it is not than what it is.</h5> 
        <p>The mystery makes it one of the most exciting areas of astronomy. Though dark matter has not been detected with telescopes, we know it exists because of its effect on objects we do see—objects that emit or reflect light. When space is warped by dark matter’s gravity, the light of distant galaxies appears distorted. Using this and other methods, astronomers calculate that there is much more undetectable dark matter in the universe than detectable, “normal” matter.</p>
        <p>
        The Bullet Cluster is composed of two clusters of galaxies that collided and moved past each other, though this is not clear when viewing the region solely in visible light. Multi-wavelength observations of the Bullet Cluster provided the first strong observational evidence that dark matter does not interact with normal matter, or with itself, and holds the majority of mass in a galaxy cluster. Astronomers use visible-light images to map the location of the clusters’ mass, based on how the light of background galaxies is warped. Most of that mass is dark matter. X-rays show that the majority of normal matter, in this case gas, is in a different location than the dark matter of each cluster—it lags behind. This is because the normal matter of the two galaxy clusters collided, while the dark matter sailed through and kept going without interacting at all. Many mysteries remain as to the nature of dark matter, and the Bullet Cluster provides key evidence in the scientific investigation..</p>
        <h2>QUICK FACTS: BULLET CLUSTER</h2>
        <p><strong>Also known as:</strong> 1E 0657-56</p>
        <p><strong>Distance from Earth:</strong> 3.8 billion light-years</p>    
        <p><strong>Location in the sky:</strong> Carina Constellation</p>   
        <p><strong>Did you know:</strong> At the time these observations of the Bullet Cluster were made in 2004, the collision of the two galaxy clusters was the most energetic event known to have occurred since the big bang set off the expansion of the universe.</p>
        `,
        text3: `
        <h2>A STORY OF EXOPLANET DIVERSITY: ATMOSPHERE</h2>
        <h5>Every planet has a unique atmosphere.</h5>
        <p>Researchers have detected thousands of planets orbiting stars other than the Sun. The data show that these planets are even more varied than the planets and moons in our solar system. They range from small rocky planets a fraction of the size of Earth to large gas giants several times the size of Jupiter. Some orbit cool dwarf stars while others circle stars much hotter and more massive than the Sun. And like the objects in our solar system, they have a wide variety of compositions and structures.</p>
        <p>
        Although no exoplanet is close enough to visit with a space probe, we can—under the right conditions—study an exoplanet’s atmosphere. When a planet passes in front of its star, some of the starlight is filtered through the planet’s atmosphere. We can analyze the pattern of the filtered light (a transmission spectrum) to figure out what the atmosphere is made of. The peaks in the graph above represent the amount of light blocked by the exoplanet’s atmosphere – the largest peaks represent more light being filtered out.</p>
        <p>The transmission spectra shown here are models based on assumptions about the composition, temperature, and structure of the exoplanet’s atmosphere. As observatories like the James Webb Space Telescope continue to operate, scientists will compare their data to the models to figure out which assumptions are correct and which are not.</p>
        <h2>QUICK FACTS: QUICK FACTS: ATMOSPHERE</h2>
        <p><strong>Temperate Earth-sized exoplanet:</strong> TRAPPIST-1 e</p>
        <p><strong>Diameter:</strong> 0.9 times the size of Earth's diameter</p>
        <p><strong>Star:</strong> TRAPPIST-1, a very cool red dwarf</p>
        <p><strong>Warm Neptune-sized exoplanet:</strong> GJ 436 b</p>
        <p><strong>Location:</strong> Gliese 436 system, 30 light-years from Earth (inside the Milky Way)</p>
        <p><strong>Diameter:</strong> 4 times the size of Earth's diameter</p>
        <p><strong>Star:</strong> Gliese 436, a cool red dwarf</p>
        <p><strong>Hot Jupiter exoplanet:</strong> WASP-62 b</p>
        <p><strong>Location:</strong> WASP-62 system, 520 light-years away (inside the Milky Way)</p>
        <p><strong>Diameter:</strong> 15 times the size of Earth's diameter</p>
        <p><strong>Star:</strong> WASP-62, a hot blue-white star</p>
        `,
        text4: `
        <h2>A STORY OF INTERACTING GALAXIES: FUTURE OF THE MILKY WAY</h2>
        <h5>Galaxy observations today can be used to predict their changes in the distant future.</h5>
        <p>Galaxies are the universe's cities of stars, and, like cities they change over time in population, structure, and appearance. Galaxies that interact are drawn toward each other by gravity, and, while stars and planets like our sun and Earth can pass by each other unharmed, the gas between stars collides, heating up and setting off new star formation. If two galaxies of relatively equal mass merge together, eventually the gas and dust will be depleted by this process. The new galaxy resulting from the merger will be home to mature stars, but little to no new star formation.</p>
        <p>
        The Andromeda galaxy's movement toward us was first measured by American astronomer Vesto Slipher in 1912. More recently, the space telescopes Hubble and Gaia have made precise measurements of Andromeda’s sideways motion, confirming that it and our Milky Way galaxy are on a direct path toward each other, and not just a cosmic fly-by. The images in this slider are an artist’s view of how the night sky will look in the distant future, based on current astronomical measurements. Stargazers of the future appear to be in for quite a show.</p>
        <h2>QUICK FACTS: FUTURE OF THE MILKY WAY</h2>
        <p><strong>Also known as:</strong> The Andromeda galaxy is also called Messier 31 or M31.</p>
        <p><strong>Size:</strong> One trillion solar masses (each)</p>
        <p><strong>Type of object:</strong> Spiral galaxies</p>
        <p><strong>Did you know:</strong> The Andromeda galaxy is the closest large galaxy to our Milky Way. Among its estimated one trillion stars is V1, or variable number one, a Cepheid variable star that is credited with proving in the 1920s that there are galaxies beyond our Milky Way, opening up human minds to the vastness of space.</p>
        `,
        text5: `
        <h2>A STORY OF GATHERING LIGHT: HUBBLE ULTRA DEEP FIELD</h2>
        <h5>Looking at one patch of sky for an extended period of time allow us to see details that are otherwise too faint, small, or distant to distinguish.</h5>
        <p>If you have ever used manual camera controls to photograph in low light, you know that the darker it is, the longer the exposure needs to be. Keeping the camera shutter open longer allows more light to reach the film or detectors. The same is true for a telescope. The more light a telescope can gather, the fainter and more distant the objects it allows us to see.</p>
        <p>
        One way to increase the amount of light a telescope collects is by increasing the amount of time it spends pointed at a particular part of the sky. This is done both by taking extremely long exposures and by adding many separate exposures of the same area together. While one exposure may reveal the presence of a bright source like a star or galaxy, it might not provide much detail, and it won’t reveal dimmer light sources at all. A single exposure is also likely to have a lot of noise from cosmic rays (high-energy charged particles from the Sun and other sources) or random electrical fluctuations in the light detector. When many exposures are added together, noise gets canceled out and real sources of light emerge, becoming brighter and more detailed.</p>
        <p>Long combined-exposure times (tens to hundreds of hours) are particularly useful for looking deep into the universe and creating so-called “deep field” images that reveal the most distant objects known. This is because the longer a telescope looks in any direction, the more time the telescope has to collect light and detect faint sources in that direction. The images shown here reveal more than 10,000 galaxies of different sizes, shapes, colors, distances, ages, and stages of development in a tiny portion of the sky. The black-and-white images capture a single wavelength of near-infrared light. The full-color image is a combination of various colors of visible light, along with ultraviolet and infrared light.</p>
        <h2>QUICK FACTS: HUBBLE ULTRA DEEP FIELD</h2>
        <p><strong>Also known as:</strong> HUDF</p>
        <p><strong>Observation date:</strong> July 2002 to September 2012</p>
        <p><strong>Field of view:</strong> 2 by 2.3 arcminutes (less than 1% of the area covered by the full Moon)</p>
        <p><strong>Objects:</strong> More than 10,000 galaxies</p>
        <p><strong>Location in the sky:</strong> Fornax Constellation</p>
        <p><strong>Most distant object:</strong> More than 13 billion light-years away</p>
        <p><strong>Did you know:</strong> The complete Hubble Ultra Deep Field 2014 is a composite of thousands of separate exposures, totaling over 2 million seconds (23 days, 3.5 hours) of observing time.</p>
        `,
        text6: `
        <h2>A STORY OF GATHERING LIGHT: HUBBLE ULTRA DEEP FIELD</h2>
        <h5>We can detect planets by analyzing starlight.</h5>
        <p>Scientists have detected thousands of exoplanets: planets orbiting stars other than the Sun. We have seen only a few exoplanets directly, but we can detect them by measuring the effects they have on the stars they orbit.</p>
        <p>
        One effect a planet can have is to block some of the star's light as it passes between the star and the telescope. This is known as a transit. As an exoplanet transits its star, the star appears to dim very slightly. Although the planet itself is too far away to see, we can detect slight changes in the brightness of the star. If we observe a pattern—if the same change in brightness happens a few times at regular intervals—we can infer that a planet is orbiting the star. Analyzing the brightness pattern, or light curve, of the star also helps us figure out the time it takes the planet to orbit (the length of the planet’s year), the size of the planet, and how close it is to its star.</p>
        <p>The light curve shown here is based on Kepler space telescope observations of the star HAT-P-7 and its exoplanet HAT-P-7 b, which was discovered in 2008. Kepler has been used to detect more than 2,300 planets using the transit method. HAT-P-7 b’s large size relative to its star, along with its short orbital period of just over two days, made it relatively easy to detect using the transit method. Because of its size, mass, and high surface temperature, HAT-P-7 b is classified as a “Hot Jupiter” exoplanet.</p>
        <h2>QUICK FACTS: TRANSITING EXOPLANET</h2>
        <p><strong>Also known as:</strong> Kepler-2b</p>
        <p><strong>Distance from Earth:</strong> about 1,100 light-years</p>
        <p><strong>Size:</strong> 1.36 times the radius of Jupiter</p>
        <p><strong>Type of object:</strong> Hot Jupiter</p>
        <p><strong>Location in the sky:</strong> Cygnus Constellation</p>
        <p><strong>Location in the universe:</strong> orbiting star HAT-P-7, inside the Milky Way Galaxy</p>
        <p><strong>Did you know:</strong> Other observations of HAT-P-7 b suggest that it has aluminum oxide vapor in its atmosphere. On Earth, aluminum oxide exists as rubies, sapphires, and other forms of the mineral corundum.</p>
        `,
        text7: `
        <h2>A STORY OF STAR DEATH: CRAB NEBULA</h2>
        <h5>Many of the atoms in your body formed billions of years ago, inside an aging star.</h5>
        <p>Some stars die slowly, giving off puffs of gas and dust before collapsing to form small white dwarf stars. Much larger stars die suddenly in powerful explosions known as supernovas, blasting gas, dust, and energy out in all directions as they collapse to form tiny neutron stars or black holes. The gas and dust expelled by dying stars eventually combines with the remains of others to form new stars, planets, and moons.</p>
        <p>
        The Crab Nebula is a supernova remnant: the remains of a star whose life ended in a supernova explosion. Observing the different types of light given off by supernova remnants like the Crab Nebula allows us to better understand what happens to massive stars at the end of their lives; to understand what has happened to the matter and energy that made up the star; and better understand where the planets, moons, rock, water, soil—and living things—originally come from.</p>
        <h2>QUICK FACTS: CRAB NEBULA</h2>
        <p><strong>Also known as:</strong> Messier 1 (M1)</p>
        <p><strong>Type of object:</strong> Supernova remnant</p>
        <p><strong>Distance from Earth:</strong> 6,500 light-years</p>
        <p><strong>Size:</strong> Approximately 10 light-years across</p>
        <p><strong>Location in the sky:</strong> Taurus Constellation</p>
        <p><strong>Location in the universe:</strong> Milky Way Galaxy, outside the Solar System</p>
        <p><strong>Did you know:</strong> The bright light from the supernova explosion that formed the Crab Nebula was observed by Chinese, Japanese, and Arab astronomers in 1054 A.D. The light has since faded and the Crab Nebula is no longer visible without a telescope.</p>
        `,
        text8: `
        <h2>A STORY OF VARIABLE STARS: ETA CARINAE</h2>
        <h5>Tracking the outbursts of two tightly orbiting stars.</h5>
        <p>The brightness of some stars varies over time due to a variety of factors, including their age and interactions with other nearby objects. The variation in the brightness of some stars tells us about how they evolve, and helps researchers learn about their properties inside and out.</p>
        <p>
        In the 1840s, what looked like a single star erupted in the night sky. One of the two stars in Eta Carinae ejected some of its mass, brightening the pair and making them the second-brightest star visible in the night sky for more than a decade. These stars are extremely bright and prone to ongoing outbursts, which are causing the stars to lose mass. Observations made in multiple wavelengths of light have allowed researchers to determine the timing of each outburst, as well as the materials it sent out, which formed two lobes of gas and dust. Eta Carinae offers researchers an ongoing opportunity to study massive stars.</p>

        <h2>QUICK FACTS: ETA CARINAE</h2>
        <p><strong>Type of object:</strong> Extreme, high-mass star system</p>
        <p><strong>Distance from Earth  :</strong> 7,500 light-years</p>
        <p><strong>Location in the sky:</strong> Carina Constellation in the Southern sky</p>
        <p><strong>Did you know:</strong> In the 1840s, Eta Carinae brightened, becoming the second-brightest star visible in the night sky for more than a decade, an event known as the Great Eruption. In the 1860s, it faded from view. Since the late 1990s, it has slowly brightened, recently becoming visible to the naked eye again.</p>
        `,
        text9: `
        <h2>A STORY OF ANALYZING LIGHT: SPECTRUM OF THE STAR ALTAIR</h2>
        <h5>Patterns in colors of starlight provide important information about the star.</h5>
        <p>Almost everything we know about Altair, a bright star in the constellation Aquila, comes from studying its light. We know that Altair is 10 times brighter than the Sun, rotates once on its axis every 9 hours, has an average surface temperature of about 8,000 degrees Celsius, and is slightly flattened in shape.</p>
        <p>
        There are two main ways to study starlight: with images and with spectra. An image captured by a camera attached to a telescope shows us what the star looks like: its brightness, color, apparent size, and shape. An image can also help us figure out where the star is located relative to other objects in the sky.</p>
        <p>Most scientific telescopes also include spectrographs, tools used to spread light out into a rainbow of light known as a spectrum. A star’s spectrum shows the individual colors that combine to make up the overall color of the star. A spectrum also reveals small variations in the brightness of these different colors. The brightness pattern provides additional details about the star, such as its composition, surface temperature, and how it is moving in space.</p>
        <p>While some spectral features are obvious in a picture of a spectrum, others are very subtle. It is easy to see that there are differences in brightness, but it is almost impossible to tell exactly how bright or dim each color is. In fact, a picture of a spectrum can be deceiving because the human eye and brain perceive colors like blue as darker than colors like yellow, even when blue is brighter. The graph form of a spectrum is important because it shows exactly how bright each individual color (wavelength) of light is relative to every other color.</p>
        <h2>QUICK FACTS: SPECTRUM OF THE STAR ALTAIR</h2>
        <p><strong>Also known as:</strong> Alpha Aquilae</p>
        <p><strong>Type of object:</strong> Star</p>
        <p><strong>Distance from Earth:</strong> 17 light-years</p>
        <p><strong>Size:</strong> 1.8 times the mass of the Sun; 1.6 to 2 times the radius of the Sun</p>
        <p><strong>Location in the sky:</strong> Constellation Aquila</p>
        <p><strong>Location in the universe:</strong> Milky Way</p>
        <p><strong>Did you know:</strong> Altair is rotating so rapidly that it bulges out in the middle.</p>
        `
        
    })
        const [opacityI,setOpacityI] = useState([
        ["1999","2000",'2021',"2022","2023"],
        ["1999","2000",'2021',"2022"],
        ["1999","2000",'2021',"2022","2023"],
        ["1999","2000",'2021',"2022","2023"],
        ["1999","2000",'2021',"2022","2023"],
        ["1999","2000",'2021',"2022","2023"],
        ["1999","2000",'2021',"2022","2023"],
        ["1999","2000",'2021',"2022","2023"],
        ["1999","2000",'2021',"2022","2023"],
    ])

    console.log(opacityI)
    const innertHt = useRef(null)
    useEffect(()=>{innertHt.current.innerHTML = innerText[`text${order + 1}`]},[order])

    const [text,setText] = useState([
        [

            ["The stars' orbits provide overwhelming evidence of a supermassive black hole at the center of our galaxy.",1],
            ["To find evidence, astronomers began by observing the Milky Way center regularly, identifying individual stars and their orbits",2],
            ["As the stars' orbits became more defined, researchers began theorizing about the Milky Way center: What do the stars point to?",3],
            ["Researchers determined that something 4 million times the mass of the Sun is inside these orbits.",4],
            ["The stars' orbits provide overwhelming evidence of a supermassive black hole at the center of our galaxy.",5],
            
        ],
        // FOR CARD 2 
        [
            ["Based on the slightly warped shapes of galaxies, massss--mostly dark matter--in each cluster is mapped and shown in blue",1],
            ["In visible light, the relationship between two massive galaxy clusters is unclear.",2],
            ["X-rays show that the clusters collided, with the cooler, stripped core of the smaller cluster plowing through the warmer gas.",3],                     
            ["Dark matter is moving ahead of the gas because it does not interact with normal matter, so it did not collide and slow down.",4],
        ],
        // FOR CARD 3
        [
            ["Before the transit begins, none of the starlight is blocked.",1],
            ["As the transit begins, the brightness of the star decreases slightly.",2],
            ["The brightness of the star appears lowest in the middle of the transit, when the planet is between the star and the telescope.",3],                     
            ["As the planet completes its transit, the brightness of the star appears to increase.",4],
            ["When the transit is complete, the star is back to its normal apparent brightness.",5],
            ["A regular pattern of brightness dips is evidence that a planet is orbiting the star.",6]            
        ],
        // FOR CARD 4
        [
            ["Stars fade and dust structure shines in longer wavelengths.",1],
            ["Thousands more young stars shine through the nebula's warm, glowing dust.",2],            
            ["Forming stars nestle inside dense cocoons of gas and dust, which block their visible light from reaching the telescope.",3],           
            ["Most of the stars emitting high-energy X-ray light in the nebula are outside the pillars.",4],           
            ["Radiation from hot young stars shapes the pillars via erosion, while also sweeping up gas for gravity to compact into new stars.",5]
        ],
        // FOR CARD 5 
        [
            ["Two spiral galaxies, Andromeda and our Milky Way, hurtle toward each other at 250,000 mph, making Andromeda appear to grow larger.",1],
            ["Filling the night sky, the two galaxies' shapes begin to be distorted by their mutual gravitational pull.",2], 
            ["As stars of the two galaxies pass each other, colliding gas ignites storms of star formation.",3], 
            ["The galaxies pass each other, emerging from their first close encounter with warped shapes.",4], 
            ["The galaxies' spirals of gas and dust are depleted from star formation, leaving behind two bright cores.",5],
            ["Milky Way and Andromeda are now merged as one huge new elliptical galaxy of mature stars.",6] 
        ],
        // FOR CARD 6
        [
            ["To the eye, this part of the sky appears completely dark and empty, even when viewed through a telescope.",1],
            ["The sky is not empty after all, but it's hard to distinguish between random noise and actual sources of light.",2],            
            ["After adding several exposures together, real objects begin to emerge from background noise.",3],            
            ["Nearly 100 hours of collecting light reveals thousands of different galaxies.",4],            
            ["Combining ultraviolet, visible, and infrared light provides detailed information about the distant, early universe.",5]
        ],
        // FOR CARD 7
        [
            ["Charged particles emit radiation as they move at very high speeds along spiraling paths, guided by magnetic forces.",1],
            ["Dust that formed from the star may eventually become part of a new star or planet.",2],           
            ["The cloud of hot gas blown out from the star is still expanding outward.",3],           
            ["Stars outside the nebula are made of atoms created and expelled by earlier generations of stars.",4],           
            ["Particles caught in the magnetic field of the dead star's core (a small, dense, spinning ball of neutrons) shine in X-rays.",5],          
            ["A composite image of visible and invisible light shows the remains of a star nearly 1,000 years after it exploded.",6]
        ],
        // FOR CARD 8
        [
            ["Warm, glowing dust that was ejected during the 1840s is now heated by radiation from the central stars.",1],
                ["Mirrored lobes of gas and dust surround Eta Carinae's central stars, which are flanked at right by ragged, shock-heated gas.",2],               
                ["When clumpy dust is struck by ultraviolet light from the hidden stars, it can send out rays of light or cast long, thin shadows.",3],               
                ["X-rays at the center highlight the stars' colliding winds, while beyond that expelled material crashes into earlier ejections.",4],             
                ["Two massive stars, locked in a tight orbit, continue to shape gas and dust that were ejected over a hundred years ago.",5]       
        ],
        // FOR CARD 9
        [
            ["Altair is a bright star visible in the summer night sky in the northern hemisphere.",1],
                ["A backyard telescope shows Altair, a relatively close star with a blueish-white color.",2],               
                ["A tool called a spectrograph, which is attached to the telescope, spreads Altair's light out into a spectrum.",3],               
                ["Altair's spectrum shows that its blueish-white light is actually a mixture of colors of different brightness.",4],               
                ["A graph of the spectrum shows exactly how bright each color is.",5],               
                ["The brightness pattern gives us information about Altair's temperature, composition, and motion.",6]
        ]

    
    ])
    const [textOpacity,setTextOpacity] = useState([
        {
            text1: 0,
            text2: 0,
            text3: 1,
            text4: 0,
            text5: 0
        },
        {
            text1: 0,
            text2: 1,
            text3: 0,
        },
        {
            text1: 0,
            text2: 0,
            text3: 1,
            text4: 0,
            text5: 0
        },
        {
            text1: 0,
            text2: 0,
            text3: 1,
            text4: 0,
            text5: 0
        },
        {
            text1: 0,
            text2: 0,
            text3: 1,
            text4: 0,
            text5: 0
        },
        {
            text1: 0,
            text2: 0,
            text3: 1,
            text4: 0,
            text5: 0
        },
        {
            text1: 0,
            text2: 0,
            text3: 1,
            text4: 0,
            text5: 0
        },
        {
            text1: 0,
            text2: 0,
            text3: 1,
            text4: 0,
            text5: 0
        },
        {
            text1: 0,
            text2: 0,
            text3: 1,
            text4: 0,
            text5: 0
        },
    ])
    const [opacity,setOpacity] = useState([
        {
            img1: 1,
            img2: 0,
            img3: 0,
            img4: 0,
            img5: 0,
        },
        {
            img1: 1,
            img2: 0,
            img3: 0,
            img4: 0,
        },
        {
            img1: 1,
            img2: 0,
            img3: 0,
            img4: 0,
            img5: 0,
        },
        {
            img1: 1,
            img2: 0,
            img3: 0,
            img4: 0,
            img5: 0,
        },
        {
            img1: 1,
            img2: 0,
            img3: 0,
            img4: 0,
            img5: 0,
        },
        {
            img1: 1,
            img2: 0,
            img3: 0,
            img4: 0,
            img5: 0,
        },
        {
            img1: 1,
            img2: 0,
            img3: 0,
            img4: 0,
            img5: 0,
        },
        {
            img1: 1,
            img2: 0,
            img3: 0,
            img4: 0,
            img5: 0,
        },
        {
            img1: 1,
            img2: 0,
            img3: 0,
            img4: 0,
            img5: 0,
        },
    ])
    const RangeHandle = (e) => {
        const {value} = e.target
        let Ovalue = (value / 2.5) * .10 + 1 
        let Ovalue2 = ((value / 2 )-10) * .10 + 0.8
        console.log(Ovalue2)
        console.log(Ovalue)
        setOpacity([
            {
            img1: Ovalue,
            img2: Ovalue - 1,
            img3: Ovalue - 2,
            img4: Ovalue - 3,
            img5: Ovalue - 4,
            },
            {
                img1: Ovalue2  + 1,
                img2: Ovalue2 -1,
                img3: Ovalue2 -2,
                img4: Ovalue2 -3,
            },
            {
                img1: Ovalue,
                img2: Ovalue - 1,
                img3: Ovalue - 2,
                img4: Ovalue - 3,
                img5: Ovalue - 4,
            },
            {
                img1: Ovalue,
                img2: Ovalue - 1,
                img3: Ovalue - 2,
                img4: Ovalue - 3,
                img5: Ovalue - 4,
            },
            {
                img1: Ovalue,
                img2: Ovalue - 1,
                img3: Ovalue - 2,
                img4: Ovalue - 3,
                img5: Ovalue - 4,
            },
            {
                img1: Ovalue,
                img2: Ovalue - 1,
                img3: Ovalue - 2,
                img4: Ovalue - 3,
                img5: Ovalue - 4,
            },
            {
                img1: Ovalue,
                img2: Ovalue - 1,
                img3: Ovalue - 2,
                img4: Ovalue - 3,
                img5: Ovalue - 4,
            },
            {
                img1: Ovalue,
                img2: Ovalue - 1,
                img3: Ovalue - 2,
                img4: Ovalue - 3,
                img5: Ovalue - 4,
            },
            {
                img1: Ovalue,
                img2: Ovalue - 1,
                img3: Ovalue - 2,
                img4: Ovalue - 3,
                img5: Ovalue - 4,
            },
        ]);
        setTextOpacity([
            {
                text1: Ovalue < 1.5 ? 1 : 0,
                text2: Ovalue > 1.5 && Ovalue < 2.5 ? 1 : 0,
                text3: Ovalue > 2.5 && Ovalue < 3.5 ? 1 : 0,
                text4:  Ovalue > 3.5 && Ovalue < 4.5 ? 1 : 0,
                text5: Ovalue > 4.5 && Ovalue < 5.5 ? 1 : 0,
            },
            {
                text1: Ovalue < 1.5 ? 1 : 0,
                text2: Ovalue > 1.5 && Ovalue < 3.5 ? 1 : 0,
                text3: Ovalue > 3.5 && Ovalue < 5.5 ? 1 : 0,
            
            },
            {
                text1: Ovalue < 1.5 ? 1 : 0,
                text2: Ovalue > 1.5 && Ovalue < 2.5 ? 1 : 0,
                text3: Ovalue > 2.5 && Ovalue < 3.5 ? 1 : 0,
                text4:  Ovalue > 3.5 && Ovalue < 4.5 ? 1 : 0,
                text5: Ovalue > 4.5 && Ovalue < 5.5 ? 1 : 0,
            },
            {
                text1: Ovalue < 1.5 ? 1 : 0,
                text2: Ovalue > 1.5 && Ovalue < 2.5 ? 1 : 0,
                text3: Ovalue > 2.5 && Ovalue < 3.5 ? 1 : 0,
                text4:  Ovalue > 3.5 && Ovalue < 4.5 ? 1 : 0,
                text5: Ovalue > 4.5 && Ovalue < 5.5 ? 1 : 0,
            },
            {
                text1: Ovalue < 1.5 ? 1 : 0,
                text2: Ovalue > 1.5 && Ovalue < 2.5 ? 1 : 0,
                text3: Ovalue > 2.5 && Ovalue < 3.5 ? 1 : 0,
                text4:  Ovalue > 3.5 && Ovalue < 4.5 ? 1 : 0,
                text5: Ovalue > 4.5 && Ovalue < 5.5 ? 1 : 0,
            },
            {
                text1: Ovalue < 1.5 ? 1 : 0,
                text2: Ovalue > 1.5 && Ovalue < 2.5 ? 1 : 0,
                text3: Ovalue > 2.5 && Ovalue < 3.5 ? 1 : 0,
                text4:  Ovalue > 3.5 && Ovalue < 4.5 ? 1 : 0,
                text5: Ovalue > 4.5 && Ovalue < 5.5 ? 1 : 0,
            },
            {
                text1: Ovalue < 1.5 ? 1 : 0,
                text2: Ovalue > 1.5 && Ovalue < 2.5 ? 1 : 0,
                text3: Ovalue > 2.5 && Ovalue < 3.5 ? 1 : 0,
                text4:  Ovalue > 3.5 && Ovalue < 4.5 ? 1 : 0,
                text5: Ovalue > 4.5 && Ovalue < 5.5 ? 1 : 0,
            },
            {
                text1: Ovalue < 1.5 ? 1 : 0,
                text2: Ovalue > 1.5 && Ovalue < 2.5 ? 1 : 0,
                text3: Ovalue > 2.5 && Ovalue < 3.5 ? 1 : 0,
                text4:  Ovalue > 3.5 && Ovalue < 4.5 ? 1 : 0,
                text5: Ovalue > 4.5 && Ovalue < 5.5 ? 1 : 0,
            },
            {
                text1: Ovalue < 1.5 ? 1 : 0,
                text2: Ovalue > 1.5 && Ovalue < 2.5 ? 1 : 0,
                text3: Ovalue > 2.5 && Ovalue < 3.5 ? 1 : 0,
                text4:  Ovalue > 3.5 && Ovalue < 4.5 ? 1 : 0,
                text5: Ovalue > 4.5 && Ovalue < 5.5 ? 1 : 0,
            },
        ])
    }

return (  
    <>
    <section className="inter-section">
        {image[img].map((key,index) => (
            <img src={key[0]} key={index} style={{opacity:opacity[order][`img${key[1]}`]}}/>
        ))}
        <div className="input">
        
            <div className="inter-text">
                    {
                        text[order].map((key,index) => (
                            <p key={index} style={{opacity:textOpacity[order][`text${key[1]}`],width:'100%',textAlign:'center',backgroundColor:'#222222'}}>{key[0]}</p>
                        ))
                    }
            </div>

        <div className="line">
        <input type="range" onInput={RangeHandle}/>
        <div className="line1">
            {
            opacityI[order].map((key,index) => (
            <div className="line-2" key={index}>
                            <span>|</span>
                            <span>{key}</span>
                </div>
                ))
            }
            
            {/* <div>
            <span>|</span>
                <span>2000</span>
            </div>
            <div>
            <span>|</span>
                <span>1999</span>
            </div>
            <div>
            <span>|</span>
                <span>1999</span>
            </div>
            <div>
            <span>|</span>
                <span>1999</span>
            </div> */}
        </div>
        </div>
        
        </div>
        
    </section>
    <div className="inter-text" ref={innertHt}>
        </div>
    </>

)
}

export default Interaction