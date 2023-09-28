import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commonSection';
import '../styles/checkout.css'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Checkout = () => {

const totalQty = useSelector(state => state.cart.totalQuantity)
const totalAmount = useSelector(state => state.cart.totalAmount)

const submitHandler = (e) => {
  e.preventDefault()


  toast.success('Payment complete')
}

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout'/>
      <section className='checkout_body'>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing_info'>
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Enter your Name' required />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type="email" placeholder='Enter your Email' required />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type="number" placeholder='Enter your number' required />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type="text" placeholder='Address' required />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type="text" placeholder='City' required />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type="text" placeholder='Postal code' required />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type="text" placeholder='Country' required />
                </FormGroup>

                
              </Form>
              
                  <div className='payment_option'>
                    <input type="radio" name='payment' />
                    <label>Paypal</label>

                    <input type="radio" name='payment' />
                    <label htmlFor="">GCASH</label>
                  </div>
                
            </Col>

            <Col lg='4'>
              <div className="checkout_cart">
                <h6>Total Qty: <span>{totalQty} items</span></h6>
                <h6>Subtotal: <span>&#8369;{totalAmount}</span></h6>
                <h6><span>Shipping: <br/>Free shipping</span> <span>&#8369;100</span></h6>
                <h4>Total Cost: <span>&#8369;{totalAmount}</span></h4>
                <button onClick={submitHandler} className='buy_btn auth_btn w-100'><Link to='/shophome'>Place order</Link></button>
                
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout