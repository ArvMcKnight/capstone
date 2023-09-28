
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/hero-img.jpg';
import '../styles/home.css';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/double-sofa-01.jpg'

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] =useState([]);
  const [wirelessProducts, setWirelessProducts] =useState([]);
  const [popularProducts, setPopularProducts] =useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "shirt"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "lamp"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "hoody"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={'CosmicShop'}>
      <div className="shop-body">
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero_content'>
                <p className='hero_subtitle'>Trending product in {year}</p>
                <h2>Make your life more GALACTIC</h2>
                <p>Astronaut & Rocket Ship Plush Toy Doll, Stuffed Spaceship Pillow Outer Space Shuttle, 14 inches</p>
                <motion.button whileTap={{ scale:1.2 }} className='buy_btn'><Link to='/shop'>Shop Now</Link></motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>


          </Row>
        </Container>
      </section>

      <Services/>
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'>Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts}/>
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'>Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg='6' md='12' className='count_down-col'>

              <div className="clock_top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Table Moon Lamp</h3>
              </div>
              <Clock/>

              <motion.button whileTap={{ scale: 1.2 }} className='buy_btn visit store_btn'>
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg='6' md='12' className='text-end counter_img'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section_title'>New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts}/>
            <ProductsList data={wirelessProducts}/>
          </Row>
        </Container>
      </section>

      <section className="popular_category">
      <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section_title'>Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts}/>
          </Row>
        </Container>
      </section>
      </div>
      
    </Helmet>
  )
}

export default Home