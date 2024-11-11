import logo from "../../assets/react-2.svg";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet } from "react-router-dom";
import ContainerCart from "../CartWidget/ContainerCart";
import ContextCart from "../CartWidget/ContextCart";

function NavBar() {
	return (
		<ContextCart>
			<>
				<Navbar bg="dark" data-bs-theme="dark" expand="lg">
					<Container>
						<Link to={"/React/"} className="navbar-brand">
							<img
								src={logo}
								width="40"
								height="40"
								className="d-inline-block align-top"
								alt="Logo Tienda"
							/>{" "}
							Store
						</Link>
						<Navbar.Toggle
							aria-controls="basic-navbar-nav"
							className="navIcon"
						/>
						<Navbar.Collapse id="basic-navbar-nav" className="navIcon">
							<Nav className="ms-auto">
								<Link to={"/React/"} className="nav-link">
									Inicio
								</Link>
								<NavDropdown title="Categorías" id="basic-nav-dropdown">
									<Link
										to={"/React/category/Hombres"}
										className="dropdown-item">
										Hombres
									</Link>
									<NavDropdown.Divider />
									<Link
										to={"/React/category/Mujeres"}
										className="dropdown-item">
										Mujeres
									</Link>
									<NavDropdown.Divider />
									<Link
										to={"/React/category/Ninos"}
										className="dropdown-item">
										Niños
									</Link>
									<NavDropdown.Divider />
									<Link
										to={"/React/category/Mascotas"}
										className="dropdown-item">
										Todos
									</Link>
								</NavDropdown>
								<Link
									to={"/React/contacto"}
									className="nav-link">
									Contacto
								</Link>
								<CartWidget />
								<ContainerCart />
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Outlet />
			</>
		</ContextCart>
	);
}
export default NavBar;