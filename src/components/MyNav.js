import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export class MyNav extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			isToggleOn: true,
			isModalOpen: false,
			isSignUpModalOpen: false
		};
		this.toggle = this.toggle.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.toggleSignUpModal = this.toggleSignUpModal.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
		  isToggleOn: !prevState.isToggleOn
		}));
	  }

	  toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalToggleOpen
        });
      }

			toggleSignUpModal() {
				this.setState({
					isSignUpModalOpen: !this.state.isSignUpModalOpen
				});
			}

	  handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

		handleSignUp(event) {
			alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
			this.toggleSignUpModal();
			event.preventDefault();
	}

	render() {
		return (

			<div >
				<Navbar color="dark" dark expand="md" className="ml-auto" >
					<NavbarBrand id="brand" href="/">&lt;Code-Snips/&gt;</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isToggleOn} navbar>
					<Nav navbar className="ms-auto">
						<NavItem>
						<NavLink href="/components/"></NavLink>
						</NavItem>
						<NavItem>
						<NavLink onClick={this.toggleSignUpModal} >Sign Up</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar >
						<DropdownToggle nav caret>
							Site Links
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>
								<Link to="/">Home</Link>
							</DropdownItem>
							<DropdownItem>
								<Link to="/about">About Us</Link>
							</DropdownItem>
							<DropdownItem>
							<Link to= '/contact'>Contact Us</Link>
							</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>
							Snippet Gallery
							</DropdownItem>
						</DropdownMenu>
						</UncontrolledDropdown>	
						
						<NavItem >
							<input id="search" type="text" placeholder="Search.."></input>
						</NavItem>
					</Nav>	
						<NavLink>
							<i className="fa fa-sign-in-alt icon fa-2x" onClick={this.toggleModal}></i>
						</NavLink>	
					</Collapse>
				</Navbar>

				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader charCode="close" className="close" toggle={this.toggleModal}>Login
					</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="muted" >Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

								{/* Modal Sign Up */}

								<Modal isOpen={this.state.isSignUpModalOpen} toggle={this.toggleSignUpModal}>
                    <ModalHeader charCode="close" className="close" toggle={this.toggleSignUpModal}>Sign Up
					{/* <Button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></Button> */}
					</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
														<FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="text" id="email" name="email"
                                    innerRef={input => this.email = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
														<FormGroup>
                                <Label htmlFor="password">Re-enter Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
																
                            </FormGroup>
                            <Button className="btn btn-primary mt-4" type="submit" value="submit" color="muted" >Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
								
    		</div>
		)
	}
}

export default MyNav
