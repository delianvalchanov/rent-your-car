import HeaderCSS from "./assets/Header.module.css";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Dropdown, Nav, Container } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export const Header = () => {
   const { isAuthenticated } = useContext(AuthContext)
   const { user } = useContext(AuthContext)

   return (
      <Container className="container">
         <Navbar className={HeaderCSS.wrapper} expand='md'>
            <Navbar.Brand className={HeaderCSS.logo}></Navbar.Brand>

            <Navbar.Toggle className={HeaderCSS.toggler} aria-controls="main-navbar-nav" />

            <Navbar.Collapse id="main-navbar-nav">

               <Nav className='me-auto' activeKey="/">
                  <Link className={HeaderCSS.item} to="/">Home</Link>
                  <Link className={HeaderCSS.item} to="/catalog">Catalog</Link>
                  <Link className={HeaderCSS.item} to="/about">About Us</Link>
               </Nav>

               <Dropdown className={HeaderCSS.drpdown} align="end">
                  {isAuthenticated && (
                     <span className={HeaderCSS.greeting}>
                        {user}
                     </span>
                  )}
                  <DropdownToggle id={HeaderCSS.toggle} className={HeaderCSS.toggle} />
                  <DropdownMenu>
                     {!isAuthenticated && (
                        <div className={HeaderCSS.action}>
                           <Link className={HeaderCSS.link} to="/login">Log in</Link>
                           <Link className={HeaderCSS.link} to="/register">Register</Link>
                        </div>
                     )}
                     {isAuthenticated && (
                        <>
                           <DropdownItem>
                              <Link to="/logout">Logout</Link>
                           </DropdownItem>
                        </>
                     )}
                  </DropdownMenu>
               </Dropdown>
            </Navbar.Collapse>
         </Navbar>

      </Container>
   );
};
