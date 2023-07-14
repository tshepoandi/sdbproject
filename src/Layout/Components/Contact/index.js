import React,{ useState } from 'react'
import { FormGroup } from 'react-bootstrap';
import { AboutUs, Button, ContactForm, Divider, Heading, Image, Input, Label, Paragraph, TextArea } from './StyledComponents/styled';
// import 

const Contact = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Message:', message);
  };

  return (
    <Divider id='Contact'>
      <div style={{ position: 'relative', zIndex:"-13"}}>
        <Image src={process.env.PUBLIC_URL+"/aboutus.jpg"} alt="About Us" style={{filter: "brightness(50%)"}} />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            fontSize: '5px',
          }}>
          <AboutUs>About Us</AboutUs>
          <Paragraph>
            Sedibeng Training Centre has been in the vocational training business since 1975, first entering the market as Vaal Triangle Training Centre.
          </Paragraph>
          <Paragraph>
            With the enactment of the Skills Development Act, 1998, the Centre was registered as an association incorporated under Section 21 of the Companies Act of 1973 in March 2000, trading as SEDIBENG TRAINING CENTRE.
          </Paragraph>
          <Paragraph>
            With change came better opportunities and enhancement for our country, and therefore, the new dispensation meant that certain adjustments needed to be made in order to accommodate the different rules and regulations pertaining thereto.
          </Paragraph>
        </div>
    </div>
      
       <ContactForm onSubmit={handleSubmit}>
          <Heading>
            Contact Us
          </Heading>
          <FormGroup>
          {/* <Label>Email:</Label> */}
          <Input
            type="email"
            value={email}
            placeholder='Email:'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          {/* <Label>Phone Number:</Label> */}
          <Input
            type="tel"
            value={phoneNumber}
            placeholder='Phone Number:'
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          {/* <Label>Message:</Label> */}
          <TextArea
            value={message}
            placeholder='Message:'
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
          <div style={{ marginTop: '20px'}}>
            <a href="https://www.qcto.org.za/">
              <Image src={process.env.PUBLIC_URL+ '/qcto.png' } alt="First Logo" style={{ width: '25%', marginRight: '10px' }} />
            </a>
            <a href="https://www.saqa.org.za/">
              <Image src={process.env.PUBLIC_URL+ '/SAQA.jpg'} alt="Second Logo" style={{ width: '20%', marginRight: '10px' }} />
            </a>
            <a href="w.wrseta.org.za">
              <Image src={process.env.PUBLIC_URL+ '/Setalogo.png'} alt="Third Logo" style={{ width: '25%' }} />
            </a>
      </div>
      </ContactForm>
    </Divider>
   
  );
};

export default Contact;