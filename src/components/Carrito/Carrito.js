import React from "react";
import { Link } from "react-router-dom";
import { DivImg, DIV, DivRounded } from "./CarritoCss";
import accounting from "accounting";
import { REMOVE_ITEM, CLEAR_CART } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Carrito = () => {
	
	const dispatch = useDispatch();
	
	const cartSliceCart = useSelector((state) => state.cartSlice.cart);
	const cartSlicePrecioTotal = useSelector(
		(state) => state.cartSlice.precioTotal
	);
	

	return (
		<>
			<DivImg>
				<h2 className="text-center">Carrito</h2>
			</DivImg>
			<DIV className="container">
				<div className="row">
					<DivRounded className="col-lg-8 shadow-lg pt-3 ms-auto">
						{cartSlicePrecioTotal === 0 ? (
							<h2 className="text-center">Agrega productos al carrito!</h2>
						) : null}

						{cartSliceCart.map((product, i) => (
							<div className="row mt-3" key={i}>
								<div className="col-lg-2">
									<img
										src={product.item.picture}
										alt=""
										className="img-fluid"
									/>
								</div>
								<div className="col-lg-2 text-center">
									<h5>{product.item.nombre}</h5>
								</div>
								<div className="col-lg-2 text-center">
									<h5>Precio: ${product.item.precio}</h5>
								</div>
								<div className="col-lg-2 text-center">
									<h5>Cantidad: {product.cantidad}</h5>
								</div>
								<div className="col-lg-2 text-center">
									<h5>Subtotal: ${product.item.precio * product.cantidad}</h5>
								</div>
								<div className="col-lg-2 mb-4">
									<button
										onClick={() => dispatch(REMOVE_ITEM(product))}
										className="btn btn-danger bg-danger"
									>
										X
									</button>
								</div>
							</div>
						))}
					</DivRounded>
					<DivRounded className="col-lg-3 shadow-lg ms-auto pt-4">
						{cartSliceCart.length > 0 && (
							<>
								<h3>
									Total a pagar: {accounting.formatMoney(cartSlicePrecioTotal)}
								</h3>
								<Link
									to="/checkout"
									className="btn btn-success d-block w-100 mt-4"
								>
									Ir a finalizar Compra
								</Link>
								<button
									className="btn btn-primary mt-5 " onClick={() => dispatch(CLEAR_CART())}
								>
									Vaciar carrito
								</button>
							</>
						)}
					</DivRounded>
				</div>
			</DIV>
		</>
	);
};

export default Carrito;
