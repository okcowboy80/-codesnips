import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Footer from './Footer';

export class AboutUs extends Component {

  render() {
    document.querySelector("body").style.backgroundColor= "#2B3643"
    var txt1 = "We are an organization that believes in not having to reinvent the wheel! So our goal is to help people be able to easily reuse code.";
    var txt2 = "You can save your own code snippets (CodeSnips) and/or find some made by others to save you time!"
    var txt3 = "We would love to hear your feedback- check out our contact page to tell us what you think and how we can make things better for you."
    var txt4 = "We will be updating our website regularly!"
    // txt = '*We are a cog in the wheel of the plight to not re-invent the wheel!';
    return (
      <div >
        <div style={{backgroundColor: '#2B3643'}}>
          <Router>
          
            <div className="aboutTextContainer container" >
            <h2 style={{color: 'steelblue', padding: '20px'}}>About Us</h2>
              <code>
                  <pre className="typeText">
                      <p style={{color: 'tomato', fontSize: 'large'}}>Who we are:</p> <br /> 
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
              <code>
                  <pre className="typeText">
                    <p style={{color: 'tomato', fontSize: 'large'}}>Give us your feedback!</p> <br />
                     
                      <Typewriter
                        
                        options={{
                          strings: [txt3,txt4],
                          delay: 250,
                          pauseFor: 5000,
                          autoStart: true,
                          loop: true,
                        }}
                      />
                  </pre> 
              </code>
            </div>
            <Footer />
          </Router>
        </div>
      </div>
    )
    
  }
}

export default AboutUs