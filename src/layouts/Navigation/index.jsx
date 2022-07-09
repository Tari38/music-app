// import { Link } from "react-router-dom";
import { Container, NavDropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";

import "./Nav.css";


export default function NavBar() {
    
    return (
        <>
           
                <Navbar className="navbar expand-lg" fixed="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand id="brand-title">My Fav Anime Music</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link to="/">Home</Nav.Link>
                                <NavDropdown id="collapsible-nav-dropdown" title="Anime">                        
                                    <NavDropdown.Item className="nav-item" to="/Anime/BlackClover/">Black Clover</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-item" to="/pages/Anime/JujutsuKaisen">Jujutsu Kaisen</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-item" to="./src/pages/Anime/Bleach">Bleach</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-item" to="./src/pages/Anime/Naruto">Naruto</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-item" to="./src/pages/Anime/Overlord">Overlord</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-item" to="./src/pages/Anime/Slime">That Time I was Reincarnated as a Slime</NavDropdown.Item>
                                
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            
        </>
    )
}