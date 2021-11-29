import React, { Component } from 'react'
import {FormGroup, ButtonGroup, Label, Input, Form, Button } from 'reactstrap'

class EditorMenu extends Component {
    
      handleTitleChange = (event) => {    
        this.props.onSetTitle(event.target.value);
        event.preventDefault();  
      }

      handleLanguageChange = (event) => {    
        this.props.onSetLanguage(event.target.value);
        event.preventDefault();  
      }

      handleStyleChange = (event) => {    
        this.props.onSetStyle(event.target.value.toLowerCase());
        event.preventDefault();  
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

      handlePublicChange(event) {
          alert("You are about to make this CodeSnip public. Are you sure?");
          
          event.target.checked = true;
      }

    render() {

        return (
            <div className="formDiv myEditor">
                <Form className="editorMenu" onSubmit={e => { e.preventDefault(); }}>
                    <FormGroup className="mt-2 text-light">
                        <Label for="validationTooltip01" >Snip Title</Label>
                        <Input type="text" 
                        name="textbox"
                        onChange={this.handleTitleChange}
                        placeholder="CodeSnip1"
                        required
                        />
                        <Label for="exampleSelect" className="mt-2 text-light">Language</Label>
                        <Input type="select" name="select" id="languageSelect" onChange={this.handleLanguageChange}>
                            <option>Text</option>
                            <option>JavaScript</option>
                            <option>HTML</option>
                            <option>CSS</option>
                            <option>Ruby</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className="mt-2 text-light">
                        <Label for="exampleSelect">Theme</Label>
                        <Input type="select" name="select" id="styleSelect" onChange={this.handleStyleChange}>
                        <option>Midnight</option>
                        <option>Material</option>
                        <option>Material-darker</option>
                        <option>3024-day</option>
                        <option>3024-night</option>
                        <option>Cobalt</option>
                        <option>Colorforth</option>
                        <option>Dracula</option>
                        <option>Duotone-light</option>
                        <option>Eclipse</option>
                        </Input>
                    </FormGroup>
                    <ButtonGroup vertical className="mt-4 mb-3 text-light" tag="fieldset">
                        
                        <h5><span id="private">Private</span> / <span id="public">Public</span></h5>
                            <div>
                            <Label check>
                                <Input  type="radio" name="destination" />{' '}
                                <span id="private">Private CodeSnip</span>
                            </Label>
                        </div>
                        <div>
                            <Label check>
                                <Input type="radio" name="destination" onChange={this.handlePublicChange}/>{' '}
                                <span id="public">Public CodeSnip</span>
                            </Label>
                        </div>
                    </ButtonGroup>
                   
                    <Button className="btn btn-success mt-auto">Save</Button>
                </Form>
            </div>
        )
    }
}

export default EditorMenu
