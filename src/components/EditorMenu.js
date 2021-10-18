import React, { Component } from 'react'
import {FormGroup, Label, Input, Form, Button } from 'reactstrap'

export class EditorMenu extends Component {
    
    render() {
        return (
            <div className="formDiv myEditor">
                <Form className="editorMenu">
                    <FormGroup className="mt-2 text-light">
                        <Label for="exampleSelect">Language</Label>
                        <Input type="select" name="select" id="languageSelect">
                        <option>Text</option>
                        <option>javascript</option>
                        <option>HTML</option>
                        <option>CSS</option>
                        <option>Java</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className="mt-3 text-light">
                        <Label for="exampleSelect">Style</Label>
                        <Input type="select" name="select" id="styleSelect">
                        <option>Light</option>
                        <option>Dark</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className="mt-4 text-light" tag="fieldset">
                        {/* <legend>Radio Buttons</legend> */}
                        <h5>Private / Public</h5>
                        <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Private CodeSnip
                        </Label>
                        </FormGroup>
                        <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Public CodeSnip
                        </Label>
                        </FormGroup>
                    </FormGroup>
                   
                    <Button className="btn mt-auto">Save</Button>
                </Form>
            </div>
        )
    }
}

export default EditorMenu
