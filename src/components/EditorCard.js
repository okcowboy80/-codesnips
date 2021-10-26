import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardSubtitle, CardTitle, CardText, Button } from 'reactstrap';

export default class EditorCard extends Component {
    render() {
        return (
            <div >
                <div className="cards">
                    <Card className="card">
                        <CardBody className="cardBody">
                            <CardTitle className="cardTitle" tag="h5">CodeSnip Title</CardTitle>
                            <CardSubtitle className="cardSubtitle" tag="h6" className="mb-2 text-muted">Author</CardSubtitle>
                            <CardText className="cardText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}
