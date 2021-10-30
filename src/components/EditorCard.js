import React, { Component } from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap';

export default class EditorCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starSize: "",
            starColor: "white",
            starTextFontSize: "1rem",
            starTextMargin: ""
        };
      }
    render() {
        // const starHandler = () => {
        //     console.log("You clicked the star!")
        //     this.state.starColor ==="white" ? 
        //     this.setState({starColor: "yellow"}) : 
        //     this.setState({starColor: "white"});
        //     this.state.starColor ==="yellow" ?
        //     this.setState({starSize: "fa-2x"}) : this.setState({starSize: "fa-lg"})
        //     this.state.starColor ==="yellow" ? 
        //     this.setState({starTextFontSize: "1.5rem"}) : this.setState({starTextFontSize: "1rem"});
        //     this.state.starColor ==="yellow" ?
        //     this.setState({starTextMargin: "10px"}) :
        //     this.setState({starTextMargin: ""});
        //     document.getElementById("starText").style.margin = this.state.starTextMargin;
        //     document.getElementById("starText").style.fontSize = this.state.starTextFontSize
        //     document.getElementById("star").style.color = this.state.starColor;
        // }
        return (
            <div >
                <div className="cards">
                    <Card className="card">
                        <CardBody className="cardBody">
                            <CardTitle className="cardTitle" tag="h5">CodeSnip Title</CardTitle>
                            <CardSubtitle className="cardSubtitle" tag="h6" className="mb-2 text-muted">Author</CardSubtitle>
                            <hr />
                            <CardText className="cardText codeChunk">
                            <code className="codeText">
                                var foo = "bar";<br />
                                var hello = "world";
                                console.log(foo); <br />
                                console.log(hello); ...<br />
                                
                            </code>
                            </CardText>

                            <hr />
                            {/* <Button className="likeButton"><i class="fas fa-thumbs-up like"></i></Button> */}
                            
                            <i className={`fas fa-star ${this.state.starSize} star`} id="star" ></i>
                            <b className="starText" id="starText">1,214</b>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}
