import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
	Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, 
	Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, 
	UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem 
} from 'reactstrap';


export class MyNav extends Component {

	constructor(props) {

		super(props);
		this.state = { 
			isToggleOn: true,
			isModalOpen: false,
			isSignUpModalOpen: false,
			username: "",
			password: "",
			email: ""
		};

		this.toggle = this.toggle.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.toggleSignUpModal = this.toggleSignUpModal.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
		this.resetForm = this.resetForm.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		
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

	toggle() {
		this.setState(prevState => ({
		  isToggleOn: !prevState.isToggleOn
		}));
	  }

	  toggleModal() {
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen
        }));
      }

			toggleSignUpModal() {
				this.setState(prevState => ({
					isSignUpModalOpen: !prevState.isSignUpModalOpen
				}));
			}

	  handleLogin(event) {
			alert(`Username: ${this.state.username}\n Password: ${this.state.password}`);
			
			this.toggleModal();
			event.preventDefault();
			this.props.onAuthorSet(this.state.username);
			this.resetForm();
    }

		handleSignUp(event) {
			alert(`Username: ${this.state.username}\n Password: ${this.state.password}`);
			
			this.toggleSignUpModal();
			event.preventDefault();
			this.props.onAuthorSet(this.state.username);
			this.resetForm();
		}

		resetForm = () => {
			this.setState({ username: '' });
			this.setState({ email: '' });
			this.setState({ password: '' });
		}

		

	render() {
		const { username, email, password } = this.state
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
						<NavLink onClick={this.toggleSignUpModal}>Sign Up</NavLink>
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
							<DropdownItem className="disabled">
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
          <ModalHeader 
						charCode="close" 
						className="close" 
						toggle={this.toggleModal}>Login
					</ModalHeader>
          <ModalBody>
						<Form onSubmit={this.handleLogin} >
							<FormGroup>
									<Label htmlFor="username">Username</Label>
									<Input 
										type="text" 
										id="username" 
										name="username"
										value={username}
										onChange={this.handleUsernameChange} />
							</FormGroup>
							<FormGroup>
									<Label htmlFor="password">Password</Label>
									<Input 
										type="password" 
										id="password" 
										name="password"
										value={password}
										onChange={this.handlePasswordChange} />
							</FormGroup>
							<FormGroup check>
									
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

export default MyNav
