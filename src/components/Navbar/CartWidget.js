import React from 'react'
import {Boton,DIVH3} from './NavbarAndWidgetCss'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'

const CartWidget = () => {
    
    const cartSliceTotalQty = useSelector(state => state.cartSlice.totalQty)
    
    return (
        <div className="d-flex"> 
            <Boton type="button">
                <FaShoppingCart size="1.7rem"/>
            </Boton>
            <DIVH3>
                <p>{cartSliceTotalQty ? cartSliceTotalQty : '0'}</p>
            </DIVH3>
            
        </div>
    )
}

export default CartWidget

