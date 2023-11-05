import React,{useState} from 'react';
import './Contact.css';
import mapimg from './images/map.jpg'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  }

  return (

    <div className='contact-section'>
<Container className="mt-5 mb-5">
      <Row>
        <Col className='contact-title'>
        <h2>Contact Us</h2>
      <p>Swing by for a cup of coffee, or leave us a message:</p>
        </Col>
      </Row>
      
      <Row className="mt-5 mb-5">
        <Col lg={6} md={6} xs={12}>
        <img className='img-fluid' src={mapimg} style={{ width: "100%" }} alt="contact-img"/>
        <div className="contact-box">
  <ul className="list-inline">
    <li>
      <div className="contact">
      
        <p>
        
        <i class="bi bi-geo-alt-fill">DieSachbearbeiter Choriner Straße 49</i> 
        </p>
      </div>
    </li>
    <li>
      <div className="contact">
        <p>
        <i class="bi bi-envelope-arrow-down-fill"> Info@example.com </i> 
         
        </p>
      </div>
    </li>
    <li>
      <div className="contact">
        <p><i class="bi bi-telephone-fill"> +91 9876543210</i></p>
      </div>
    </li>
  </ul>
</div> 

        </Col>
        <Col lg={6} md={6} xs={12}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name" 
            value={inputs.name || ""} 
            onChange={handleChange}
            placeholder="Your name*" required
          />
          <input
            type="email"
            name="email" 
            value={inputs.email || ""} 
            onChange={handleChange}
            placeholder="Your Email id*" required
          />
          <input
            type="tel"
            name="phone" 
            value={inputs.phone || ""} 
            onChange={handleChange}
            placeholder="Your Phone no*" required
          />
          <select name="city" 
            value={inputs.city || ""} 
            onChange={handleChange} required>
          <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
            <option value="Gurugram">Gurugram</option>
          </select>
          <textarea
            name="message" 
            value={inputs.message || ""} 
            onChange={handleChange}
            placeholder="Write something.." required
            style={{ height: 100 }}
          />
          <input type="submit" name="submit" defaultValue="Submit" />
        </form></Col>
      </Row>
      
    </Container>
    </div>
  )
}

export default Contact