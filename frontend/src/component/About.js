import React from 'react';
import './About.css';
import aboutimg from './images/about-us.jpg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <div className='about-section'>
        <Container className="mt-5 mb-5">
        <Row>
        <Col className='about-title'>
        <h2>About Us</h2>
      <p>Swing by for a cup of coffee, or leave us a message:</p>
        </Col>
      </Row>

      <Row>
        <Col lg={4} md={4} xs={12}>
        <img src={aboutimg} alt="about-us" className='img-fluid'/>
  <h2>Have a question?</h2>
  <p>If you have any question please do not hesitate to drop us an email.</p>
  <a href="/" className="text-danger">
   ReadMore..
  </a>
        </Col>
        <Col lg={4} md={4} xs={12}>
        <img src={aboutimg} alt="about-us" className='img-fluid' />
  <h2>Have a question?</h2>
  <p>If you have any question please do not hesitate to drop us an email.</p>
  <a href="/" className="text-danger">
  ReadMore..
  </a>
        </Col>
        <Col lg={4} md={4} xs={12}>
        <img src={aboutimg} alt="about-us" className='img-fluid' />
  <h2>Have a question?</h2>
  <p>If you have any question please do not hesitate to drop us an email.</p>
  <a href="/" className="text-danger">
  ReadMore..
  </a>
        </Col>
      </Row>
    </Container>


    </div>
  )
}

export default About