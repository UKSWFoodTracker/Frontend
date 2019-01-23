import React, {Component} from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';



class NavigationBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        isOpen: false
    };
    
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const gusetUser = (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/login">Logowanie</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/register">Rejestracja</NavLink>
            </NavItem>
      </Nav>
    )

    const loggedUser = (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink onClick={() => this.props.logoutUser()}>Wyloguj</NavLink>
            </NavItem>
        </Nav>
    )

    return (
      <div>
        <Navbar dark expand="md" id="navbar">
          <NavbarBrand href="/">FoodTracker</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.auth.isAuthenticated ? loggedUser : gusetUser}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    auth: state.auth,
});


export default connect(mapStateToProps, {logoutUser})(NavigationBar);