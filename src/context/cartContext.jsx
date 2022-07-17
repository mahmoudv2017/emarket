import React, {  createContext, useContext, useState } from 'react';
// import useLocalstorage from './../hooks/uselocalstorage';
import api from '../data/axios'

const CartContext = createContext({})

export function useCartContext(){
    return useContext(CartContext)
}

export default function CartProvider({children}){
    // const testValue = 5000
    // const [storedValue , setstoredValue] = useLocalstorage('cart' , [])
     const [product , setProduct] = useState({product_name : 'loading...'})
    const get_product = async (id) => {
       const res = await api.get('/products/'+id)
       setProduct(res.data)
    }

    return (
        <CartContext.Provider value={{get_product , product , setProduct}}>
            {children}
        </CartContext.Provider>
    )
}