import "./Header.css";
import {
    Navbar, NavbarBrand, NavbarToggler, Collapse, Nav,
    NavItem, NavLink, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem, NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';
// import Bookings from "./Bookings";

function Header() {
    return (
        <div className="header">

            <Navbar

                expand="md"
                container={false}
                className="d-flex justify-content-center flex-column"

            >
                <NavbarBrand
                    href="/"
                    className="me-0"

                >
                    <h1>Carnival of Charters</h1>


                </NavbarBrand>
                <Nav
                    navbar
                >
                    <NavItem>
                        <Link to="/bookings">
                            {/* <i class="fa-solid fa-book-open fa-xl"></i> */}
                            <h5 className="h5-header text-danger">Book With Us!</h5>
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;