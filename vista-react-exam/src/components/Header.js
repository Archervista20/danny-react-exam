import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input
} from 'reactstrap';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Header = ({valueSearch}) => {
  let history = useNavigate();
  //value boolean
  const [isOpen, setIsOpen] = useState(false);
  // value object
  const [search, setSearch] = useState({value: ''})

  const toggle = () => setIsOpen(!isOpen);
  const redirectLogin = () => {
    history("/")
  }

  const redirectSignUp = () => {
    history("/signup")
  }
  // search button handler
  const handleFindRecipe = () => {
    
    valueSearch(search.value);
  }

  const logout = () => {
    localStorage.removeItem("email");
    window.location.reload()
  }
  // search input handler
  const handleSearch = (e) => {
    setSearch(search => ({...search, value: e.target.value}));
  }
   
  const currentStorage = localStorage.getItem('email');
  
  return (
    <div className="header-wrapper container-fluid mx-auto">
      <Navbar expand="md" color="faded" light>
        <NavbarBrand className="brand" href="/">TrackYourDiet</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem><NavLink href="/components/"></NavLink></NavItem>
            <NavItem><NavLink href="/components/"></NavLink></NavItem>
          </Nav>
        <Form className="form-inline float-right">
        {
          !currentStorage 
          ? 
            (
              <div>
                <Button onClick={redirectLogin} className="btn mr-1 bg-success">Login</Button>
                <Button onClick={redirectSignUp} className="btn mr-4">Register</Button>
              </div>
            )
          : 
            (<Button onClick={logout} className="btn mr-1 bg-danger">Logout</Button>)
        }
        
        <Input onChange={handleSearch} placeholder="Search Recipe" className="form-control mr-sm-2"></Input>
        <Button onClick={handleFindRecipe} className="outline mr-1">Search Recipe</Button>
        </Form>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;