import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Footer from './Footer';


export default class ContactUs extends Component {
  render() {
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
                  <pre className="typeText">
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
              <Form style={{margin: 'auto'}}>
                <FormGroup>
                  <Label className="text-light my-1" for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                <FormGroup style={{paddingBottom: '180px'}}>
                  <Label className="text-light my-1" for="exampleText">Text Area</Label>
                  <Input style={{height: '200px'}} type="textarea" name="text" id="exampleText" placeholder="Your thoughts..." />
                </FormGroup>
                <Button>Submit</Button>
              </Form>     
            </div>
            <Footer />
          </Router>
        </div>
      </div>
    )
  }
}
