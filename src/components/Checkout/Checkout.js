import React, { useState } from "react";
import { getFirestore } from "../../firebase";
import firebase from "firebase/app";
import "firebase/firebase";

import styled from "styled-components";
import ProductosCheckout from "./ProductosCheckout";
import Formcheckout from "./Formcheckout";
import { FcGoogle } from "react-icons/fc";
import accounting from "accounting";
import { MarginForm } from "./Checkoutcss";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_CART } from "../redux/slices/cartSlice";

const DivCheckout = styled.div`
	font-family: "Source Sans Pro", sans-serif;
`;
const DivOrden = styled.div`
	margin-top: 15%;
`;

const Checkout = () => {
	const cartPrecioTotal = useSelector(state => state.cartSlice.precioTotal)
	const username = useSelector(state => state.authSlice.username)
	const cartSliceCart = useSelector(state => state.cartSlice.cart)
	const dispatch = useDispatch()


	const [nombre, setNombre] = useState("");
	const [telefono, setTelefono] = useState("");
	const [email, setEmail] = useState("");
	const [orderId, setOrderId] = useState();

	const manejarCompra = (e) => {
		e.preventDefault();
		const datosCompra = {
			comprador: {
				name: nombre,
				phone: telefono,
				email: email,
			},
			date: firebase.firestore.FieldValue.serverTimestamp(),
			items: cartSliceCart,
			total: cartPrecioTotal,
		};

		const db = getFirestore();
		const OrderCollection = db.collection("orders");
		
		const ordenes = async () => {
			try {
				const pregunta = await OrderCollection.add(datosCompra)
				const respuesta =  pregunta.id
				dispatch(CLEAR_CART())
				setOrderId(respuesta)
			} catch (error) {
				console.log(error);
			}
		}
		ordenes()
	};

	return (
		<DivCheckout className="container">
			<div className="row">
				{username ? (
					orderId ? (
						<>
							<DivOrden className="text-center">
								<h3 className="fs-1">✅Compra realizada con exito!✅</h3>
								<p className="fs-4">
									Tu numero de orden es: <strong>{orderId}</strong>{" "}
								</p>
								<p className="fs-4">En la brevedad te vamos a contactar 😄</p>
							</DivOrden>
						</>
					) : (
						<>
							<Formcheckout
								manejarCompra={manejarCompra}
								setNombre={setNombre}
								setTelefono={setTelefono}
								setEmail={setEmail}
								nombre={nombre}
								telefono={telefono}
								email={email}
							/>
							<MarginForm className="col-lg-4 shadow-lg p-3  ms-2 bg-body">
								<h3>Tu carrito:</h3>
								<ProductosCheckout cart={cartSliceCart} />
								<h5>Envío Gratis</h5>
								{cartPrecioTotal ? (
									<h4>Subtotal: {accounting.formatMoney(cartPrecioTotal)}</h4>
								) : null}
							</MarginForm>
						</>
					)
				) : (
					<DivOrden className="text-center">
						<h2 className="">
							Inicia sesión con <FcGoogle /> para terminar la compra!
						</h2>
					</DivOrden>
				)}
			</div>
		</DivCheckout>
	);
};

export default Checkout;
