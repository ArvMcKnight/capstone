import React, { useState, useEffect } from 'react'
import CommonSection from '../components/UI/commonSection';
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';
import "../styles/shop.css";
import products from '../assets/data/products';
import ProductList from '../components/UI/ProductsList';

const Shop = () => {

  const [productsData, setProductsData] =useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "lamp") {
      const filteredProducts = products.filter(
        (item) => item.category === "lamp"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "shirt") {
      const filteredProducts = products.filter(
        (item) => item.category === "shirt"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "hoody") {
      const filteredProducts = products.filter(
        (item) => item.category === "hoody"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProducts);
    }
  }

  const handleSearch = e => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }

  return (
    <Helmet title="Products">
      <CommonSection title="Products"/>


      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter_widget">
                <select onClick={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="lamp">Lamp</option>
                  <option value="mobile">Mobile</option>
                  <option value="shirt">T-shirt</option>
                  <option value="hoody">Hoody</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>

            <Col lg='3' md='6' className='text-end'>
            <div className="filter_widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>

            <Col lg='6' md='12'>
              <div className="search_box">
                <input type="text"  placeholder='Search.....' onChange={handleSearch}/>
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0? ( <h1 className='text-center fs-4'>No products are found!</h1> )
              : ( <ProductList data={productsData}/> )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop;