import React,{ useState } from 'react'
import { FormGroup } from 'react-bootstrap';
import { Button, ContactForm, Input, Label, TextArea } from './StyledComponents/styled';
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
    <div>
       <ContactForm onSubmit={handleSubmit}>
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
      </ContactForm>
    </div>
   
  );
};

export default Contact;