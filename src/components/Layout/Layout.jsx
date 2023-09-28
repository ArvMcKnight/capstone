import React from 'react';
import Header from '../Header/Header';
import Footer from '../../components/footer';
import Routers from '../../routers/Routers';

const Layout = () => {
  return (
    <>
      <Header/>
      <div>
        <Routers/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout;