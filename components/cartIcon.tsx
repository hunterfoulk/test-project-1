import React, { useEffect } from 'react'
import { FaShoppingBag } from 'react-icons/fa';

interface Props {
    cartData: any
    btnRef: any
    onOpen: any
}

const CartIcon: React.FC<Props> = ({ cartData, btnRef, onOpen }) => {

    useEffect(() => {

    }, [cartData])

    return (

        <>
            <div className="relative">
                {cartData.cart.length > 0 ? <div className="absolute w-[10px] h-[10px] rounded-lg bg-red-500 right-[-4px] bottom-2"></div> : null}
                <span className="cursor-pointer" ref={btnRef} onClick={onOpen}><FaShoppingBag /></span>
            </div>
        </>
    )
}

export default CartIcon