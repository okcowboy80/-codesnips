import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup, Button } from 'reactstrap';

export default class Footer extends Component {

    constructor() {
		super();
		this.state = { 
			isToggleOn: true,
			isModalOpen: false,
			isSignUpModalOpen: false,
			username: "",
			password: "",
			email: ""
		};
	
		this.toggleSignUpModal = this.toggleSignUpModal.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
		this.resetForm = this.resetForm.bind(this);
	}

	handleUsernameChange(e) {
		this.setState({username: e.target.value})
	}

	handleEmailChange(e) {
		this.setState({email: e.target.value})
	}

	handlePasswordChange(e) {
		this.setState({password: e.target.value})
	}

    toggleSignUpModal() {
        this.setState(prevState => ({
            isSignUpModalOpen: !prevState.isSignUpModalOpen
        }));
    }

    handleSignUp(event) {
        alert(`Username: ${this.state.username}\n Password: ${this.state.password}`);
        this.toggleSignUpModal();
        event.preventDefault();
        this.resetForm();
    }

    resetForm = () => {
        this.setState({ username: '' });
        this.setState({ email: '' });
        this.setState({ password: '' });
    }

    render() {
        const { username, email, password } = this.state;

        return (
            <div>
                <section>
                    <footer className="container-fluid">
                        <div className="row footerDiv1">
                            <div className="row justify-content-center">
                                <div className="col">
                                </div>
                                <div className="col text-center" id="buttonDiv">
                                    <button type="button" className="btn btn-outline-light btn-rounded " id="btnSignUp" onClick={this.toggleSignUpModal}>
                                        Register for free! Sign up!
                                    </button>
                                </div>
                                <div className="col">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="row footerDiv2">
                            <div>
                                <small className="copyright text-light">&copy;2021: CodeSnips.com</small>
                            </div>
                        </div>
                    </footer>
                </section>
                <Modal isOpen={this.state.isSignUpModalOpen} toggle={this.toggleSignUpModal}>
					<ModalHeader charCode="close" className="close" toggle={this.toggleSignUpModal}>Sign Up
					{/* <Button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></Button> */}
					</ModalHeader>
					<ModalBody>
					<Form onSubmit={this.handleSignUp} onReset={this.resetForm}>
							<FormGroup>
									<Label htmlFor="email">Email</Label>
									<Input type="text" id="email" name="email"
										value={email} 
										onChange={this.handleEmailChange} />
							</FormGroup>
							<FormGroup>
									<Label htmlFor="username">Username</Label>
									<Input type="text" 
										id="username" 
										name="username"
										value={username}
										onChange={this.handleUsernameChange} 
									/>
							</FormGroup>
							<FormGroup>
									<Label htmlFor="password">Password</Label>
									<Input type="password" 
										id="password" 
										name="password"
										value={password}
										onChange={this.handlePasswordChange} />
							</FormGroup>
							
							<Button className="btn btn-primary mt-4" type="submit" value="submit" color="muted" >Submit</Button>
						</Form>
					</ModalBody>
                </Modal>			
            </div>
        )
    }
}
