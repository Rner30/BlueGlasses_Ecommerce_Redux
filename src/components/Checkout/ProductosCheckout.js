import React from "react";
import { useSelector } from "react-redux";



const ProductosCheckout = () => {
  const cartSliceCRART = useSelector(state => state.cartSlice.cart)
    
	return (
        <>
        {cartSliceCRART.map((product,i)=>(
            <ul className="list-group mb-3" key={i}>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0 fs-5">{product.item.nombre}</h6>
                <small >Cantidad: {product.cantidad}</small>
              </div>
              <p className="fs-5">${product.item.precio * product.cantidad}</p>
            </li>
          </ul>
        ))}
        
        </>
	);
};

export default ProductosCheckout;
