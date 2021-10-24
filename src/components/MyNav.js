import React, { Component } from 'react';
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
	// const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
		  isToggleOn: !prevState.isToggleOn
		}));
	  }

	render() {
		return (
			<div >
				<Navbar color="dark" dark expand="md"  >
					<NavbarBrand className="text-danger" id="brand" href="/">&lt;Code-Snips/&gt;</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isToggleOn} navbar>
					<Nav className="mr-auto d-lg-flex align-items-center" navbar >
						<NavItem>
						<NavLink href="/components/">Components</NavLink>
						</NavItem>
						<NavItem>
						<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							Options
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>
							Option 1
							</DropdownItem>
							<DropdownItem>
							Option 2
							</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>
							Reset
							</DropdownItem>
						</DropdownMenu>
						</UncontrolledDropdown>
						
					</Nav>
					
					<NavItem className="navbar-right d-flex justify-content-end naav">
						<input id="search" type="text" placeholder="Search.."></input>
					</NavItem>
					
						<i class="fa fa-sign-in-alt icon fa-2x d-flex justify"></i>
					

					</Collapse>
					
				</Navbar>
				
    		</div>
			
		)
	}
}

export default MyNav
