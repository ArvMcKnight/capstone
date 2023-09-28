import React, { useRef, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import './header.css';
import { motion } from 'framer-motion';
// import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';

import { Container, Row, Toast } from 'reactstrap';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

const nav_Links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'exploration',
    display: 'Exploration'
  },
  {
    path: 'interactives',
    display: 'Interactives'
  },
  {
    path: 'shophome',
    display: 'CosmicShop'
  },
  {
    path: 'shop',
    display: 'Products'
  },
  // {
  //   path: 'cart',
  //   display: 'Cart'
  // },
]

const Header = () => {

  const headerRef = useRef(null)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const profileActionRef = useRef(null)

  const menuRef = useRef(null)
  const navigate = useNavigate()
  const { currentUser } = useAuth()

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  const logout = () => {
    signOut(auth).then(() => {
      toast.success('Logged out')
      navigate("/home")
    }).catch(err=>{
      toast.error(err.message)
    })
  }

  useEffect(() => {
    stickyHeaderFunc()

    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  });

  const menuToggle = () => menuRef.current.classList.toggle('active_menu')

  const navigateToCart = () => {
    navigate('/cart');
  }

  const toggleProfileActions = ()=> profileActionRef.current.classList.toggle('show_profileActions');

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <h1><a href="/home">Cosmic Exploration</a></h1>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                
                {
                  nav_Links.map((item, index) => (
                    <li className='nav_item' key={index}>
                  <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' : ''} >{item.display}</NavLink>
                </li>
                  ))
                }

              </ul>
            </div>

            <div className="nav_icons">
              {/* <span className='fav_icon'>
              <i class="ri-heart-line"></i>
              <span className="badge"></span>
              </span> */}
              <span className='cart_icon' onClick={navigateToCart}>
              <i class="ri-shopping-bag-line"></i>
              <span className="badge">{totalQuantity}</span>

              </span>

              <div className='profile'>
                <motion.img 
                  whileTap={{ scale: 1.2 }} 
                  src={ currentUser ? currentUser.photoURL : userIcon } 
                  alt="" 
                  onClick={toggleProfileActions} 
                />

                
              </div>

              <div className="mobile_menu">
              <span onClick={menuToggle}>
              <i class="ri-menu-line"></i>
              </span>
            </div>

            <div 
                  className="profile_actions" 
                  ref={profileActionRef} 
                  onClick={toggleProfileActions}
                >
                  {
                    currentUser ? (
                      <span onClick={logout}>Logout</span>
                    ) : (
                      <div className='logins'>
                        {/* <Link to='/signup'>SignUp</Link> */}
                        <Link to='/login'>Login</Link>
                      </div>
                  )}
                </div>

            </div>

            

          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header;