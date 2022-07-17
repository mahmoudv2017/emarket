import { useState } from "react";

export default function useLocalstorage (key ,initalvalue) {

    const [Storedvalue,setStoredvalue] = useState( () => {

        if(typeof window === undefined){return initalvalue}

        try {
            let item = window.localStorage.getItem(key)

            return item ? JSON.parse(item)  : initalvalue
        } catch (error) {
            console.log(error)
            return initalvalue
        }
    } )

    const setstate = (value) => {


        try {
            const ValueTOStore = value instanceof Function ? value(Storedvalue) : value

            setStoredvalue(ValueTOStore)
    
            if(typeof window !== undefined) {
                window.localStorage.setItem(key , JSON.stringify(ValueTOStore) )
            } 
        } catch (error) {
            console.log(error)
        }
     
            
    }

    return [ Storedvalue , setstate]
}