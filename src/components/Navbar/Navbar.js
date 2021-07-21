import React from "react";

import { Nav, ButonLogIn } from "./NavbarAndWidgetCss";
import { FcGoogle ,} from "react-icons/fc";
import { IoGlassesOutline } from 'react-icons/io5'
import CartWidget from "./CartWidget";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//redux
import { getUser } from "../redux/slices/authSlice";


const Navbar = () => {
	//redux
	const dispatch = useDispatch()
	
	const username = useSelector(state => state.authSlice.username)
	
	const handleLogin = () => {
		dispatch(getUser())
	}

	return (
		<Nav className="navbar navbar-expand-lg navbar-light bg-white ">
			<div className="container">
				<NavLink to="/" className="navbar-brand fs-4">
					<IoGlassesOutline size="3rem"/>
					BlueGlasses
				</NavLink>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink to="/" className="nav-link active ">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/productos" className="nav-link active">
								Productos
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/Envios" className="nav-link active">
								Envios
							</NavLink>
						</li>
					</ul>
					<p className="ms-5 cuotas mt-3">
						3, 6 Y 12 CUOTAS SIN INTERÉS + ENVÍO GRATIS
					</p>

					{username ? (
						<p className="ms-auto mt-3">Hola! {username}</p>
					) : (
						<ButonLogIn className="btn btn-dark" onClick={handleLogin}>
							Iniciar Sesión <FcGoogle size="1.5rem" />{" "}
						</ButonLogIn>
					)}

					<NavLink to="/carrito" className="ms-auto">
						<CartWidget />
					</NavLink>
				</div>
			</div>
		</Nav>
	);
};

export default Navbar;
