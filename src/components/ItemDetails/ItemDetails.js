import React from "react";
import styled from "styled-components";
import ItemCount from "../ItemCount/ItemCount";

import { ADD_TO_CART } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const DIV = styled.div`
	margin-top: 18%;
`;

const ItemDetail = ({ item }) => {
	const dispatch = useDispatch();

	const handleAddProduct = (e, qty) => {
		e.stopPropagation();

		let ITEM = {
			cantidad: qty,
			item,
		};

		dispatch(ADD_TO_CART(ITEM));
	};
	return (
		<div className="container ">
			<div className="row">
				<DIV className="col-lg-6">
					<img src={item.picture} alt={item.titulo} className="img-fluid" />
				</DIV>
				<div className="col-lg-6 fs-5">
					<h2>{item.nombre}</h2>
					<p>{item.descripcion}</p>

					<p>
						¿Sentís los ojos cansados por la computadora, el celular u otros
						dispositivos?
					</p>
					<p>
						¿Sabías que la <strong>LUZ UV y la AZUL-VIOLETA</strong> están en
						todas partes?
					</p>
					<h2>Necesitas una buena protección.</h2>
					<p>
						La combinación entre el Acetato Mazzuchelli1849 y las Lentes ESSILOR
						CRIZAL PREVENCIA o BLUE LightCut te garantizan un producto de
						calidad, fabricado con los materiales más reconocidos en la
						Industria del Anteojo.
					</p>

					<ul className="list-unstyled">
						<li>✅Protección contra LUZ AZUL-VIOLETA</li>
						<li>✅Reduce el Stress Visual</li>
						<li>✅Ayuda a descansar mejor</li>
						<li>✅Protección UV</li>
						<li>✅Reducción de reflejos</li>
						<li>✅Mayor resistencia a rayas</li>
					</ul>

					<p>Precio: ${item.precio}</p>
					<ItemCount stock={item.stock} initial={1} onAdd={handleAddProduct} />
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
