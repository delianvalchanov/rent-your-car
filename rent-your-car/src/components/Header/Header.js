import HeaderCSS from "./assets/Header.module.css";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Dropdown, Nav } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export const Header = () => {
   const { isAuthenticated } = useContext(AuthContext)

   return (
      <>
         <Navbar className={HeaderCSS.wrapper} expand='lg'>
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Brand className={HeaderCSS.logo}></Navbar.Brand>

            <Navbar.Collapse id="main-navbar-nav">
               <Nav className='me-auto' activeKey="/">
                  <Link className={HeaderCSS.item} to="/">Home</Link>
                  <Link className={HeaderCSS.item} to="/catalog">Catalog</Link>
                  <Link className={HeaderCSS.item} to="/about">About Us</Link>
               </Nav>
            </Navbar.Collapse>

            <Dropdown align="end">

               {isAuthenticated && (
                  <span className="greeting">
                     Hello, Georgi Dimitrov!
                  </span>
               )}
               <DropdownToggle className={HeaderCSS.toggle} />
               <DropdownMenu>
                  {!isAuthenticated && (
                     <>
                        <DropdownItem>
                           <Link to="/login">Log in</Link>
                        </DropdownItem>
                        <DropdownItem>
                           <Link to="/register">Register</Link>
                        </DropdownItem>
                     </>

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
         </Navbar>
      </>
   );
};
