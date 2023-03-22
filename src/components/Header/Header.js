import HeaderCSS from "./assets/Header.module.css";

import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Dropdown, Nav } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export const Header = () => {
   return (
      <>

         <Navbar className={HeaderCSS.wrapper} expand='lg'>

            <Navbar.Brand className={HeaderCSS.logo}></Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar-nav" />


            <Navbar.Collapse id="main-navbar-nav">
               <Nav className='me-auto' activeKey="/">
                  <Link className={HeaderCSS.item} to="/">Home</Link>
                  <Link className={HeaderCSS.item} to="/catalog">Catalog</Link>
                  <Link className={HeaderCSS.item} to="/hosts">Hosts</Link>
                  <Link className={HeaderCSS.item} to="/about">About Us</Link>
               </Nav>
            </Navbar.Collapse>

            <Dropdown align="end">
               <DropdownToggle className={HeaderCSS.toggle} />

               <DropdownMenu>
                  <DropdownItem>
                     <Link to="/login">Log in</Link>
                  </DropdownItem>

                  <DropdownItem>
                     <Link to="/register">Register</Link>
                  </DropdownItem>

                  <Dropdown.Divider />

                  <DropdownItem>
                     <Link to="/becomehost">Become a host</Link>
                  </DropdownItem>

                  <Dropdown.Divider />

                  <DropdownItem>
                     <Link to="/">Logout</Link>
                  </DropdownItem>
               </DropdownMenu>
            </Dropdown>



         </Navbar>


      </>
   );
};
