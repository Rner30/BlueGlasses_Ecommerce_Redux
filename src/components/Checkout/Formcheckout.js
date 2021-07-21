import React from "react";
import {MarginForm,Formulario} from './Checkoutcss'

import accounting from "accounting";
import { useSelector } from "react-redux";
const Formcheckout = ({manejarCompra,setNombre,setTelefono,setEmail,nombre,telefono,email}) => {
	
	const cartSlicePrecioTotal = useSelector(state => state.cartSlice.precioTotal)
	return (
		<MarginForm className="col-lg-7 shadow-lg p-3  bg-body ">
			<div>
				<Formulario onSubmit={manejarCompra}>
					<h3>Informacion de compra</h3>
					<div>
						<label htmlFor="nombre" className="fs-5">
							Nombre y apellido
						</label>
						<input
							value={nombre}
							onChange={(e) => {
								setNombre(e.target.value);
							}}
							type="text"
							required
							className="form-control"
							
						/>
					</div>
					<div>
						<label htmlFor="telefono" className="fs-5">
							Telefono
						</label>
						<input
							value={telefono}
							onChange={(e) => {
								setTelefono(e.target.value);
							}}
							type="text"
							required
							className="form-control"
							
						/>
					</div>
					<div>
						<label htmlFor="email" className="fs-5">
							Correo Electrónico:
						</label>
						<input
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							type="email"
							required
							className="form-control"
							
						/>
					</div>
					<div className="d-flex mt-3">
						<button type="submit" className="btn btn-primary btn-lg d-block w-100 ">
							Pagar {accounting.formatMoney(cartSlicePrecioTotal)}
						</button>
					</div>
				</Formulario>
			</div>
		</MarginForm>
	);
};

export default Formcheckout;
