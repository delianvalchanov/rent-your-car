import HeaderCSS from "./assets/Header.module.css";

import Navbar from 'react-bootstrap/Navbar'
import { Dropdown, Nav } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export const Header = () => {
   return (
      <>

         <Navbar className={HeaderCSS.wrapper} expand='lg'>

            <Navbar.Brand className={HeaderCSS.logo} href="/"></Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar-nav" />


            <Navbar.Collapse id="main-navbar-nav">
               <Nav className='me-auto' activeKey="/">
                  <Nav.Link className={HeaderCSS.item} href="/">Home</Nav.Link>
                  <Nav.Link className={HeaderCSS.item} href="/">Catalog</Nav.Link>
                  <Nav.Link className={HeaderCSS.item} href="/">Hosts</Nav.Link>
                  <Nav.Link className={HeaderCSS.item} href="/">About Us</Nav.Link>
               </Nav>
            </Navbar.Collapse>

            <Dropdown align="end">
               <DropdownToggle className={HeaderCSS.toggle} />

               <DropdownMenu>
                  <DropdownItem>Log in</DropdownItem>
                  <DropdownItem>Register</DropdownItem>
                  <Dropdown.Divider />
                  <DropdownItem>Become a Host</DropdownItem>
                  <Dropdown.Divider />
                  <DropdownItem>Logout</DropdownItem>
               </DropdownMenu>
            </Dropdown>



         </Navbar>


      </>
   );
};
