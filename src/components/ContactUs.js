import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Footer from './Footer';


export default class ContactUs extends Component {

  constructor(props) {
    super(props)
    this.state = {

      email: this.props.email,
      text: this.props.text
    }
  }
  render() {

    const resetForm = () => {
      document.getElementById("contact-form").reset();

    }

    const handleSubmit = () => {
      alert("Form was submitted successfuly!");
      resetForm();
    }

    document.querySelector("body").style.backgroundColor= "#2B3643"
    var txt1 = "Here is where you can contact us to leave feedback or for general inquiries";
    var txt2 = "Thank you for visiting our site!"
  
    return (
      <div >
        <div style={{backgroundColor: '#2B3643'}}>
          <Router>
          
            <div className="aboutTextContainer container" style={{width: '50%'}}>
              <h2 className="text-center" style={{color: 'steelblue', padding: '20px'}}>Contact Us</h2>
              <code>
                  <pre className="typeText" style={{height: '200px'}}>
                      <p style={{color: 'tomato', fontSize: 'large'}}>Information: </p> <br /> 
                      <Typewriter style={{fontSize: '1.6rem'}}   
                        options={{
                          strings: [txt1,txt2],
                          pauseFor: 5000,
                          autoStart: true,
                          loop: true  
                        }}
                      />
                  </pre> 
              </code>
              <h2 className="text-light text-center">Send us your info!</h2>
              <Form style={{margin: 'auto'}} id="contact-form">
                <FormGroup>
                  <Label className="text-light my-1" for="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>
                <FormGroup >
                  <Label className="text-light my-1" for="text">Text Area</Label>
                  <Input style={{height: '200px'}} type="textarea" name="text" id="exampleText" placeholder="Your thoughts..." />
                </FormGroup>

                <Button style={{marginBottom: '200px', marginTop: '10px'}} onClick={handleSubmit}>Submit</Button>
              </Form>     
            </div>
            <Footer />
          </Router>
        </div>
      </div>
    )
  }
}
