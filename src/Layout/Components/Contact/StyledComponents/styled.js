import styled from 'styled-components';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding:20px;
  border: solid red;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width:100%;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin:5px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom:10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color:#0F52BA;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;


export const Heading = styled.h1`
  fontSize: 100px;
  color:#0F52BA;
`

export const Divider = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
`

export const AboutUs = styled.h1`
  fontSize: 100px;
  color:#0F52BA;
  margin-left:5%;
`


export const paragraph = styled.p`

`
