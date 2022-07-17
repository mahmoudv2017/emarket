import React from 'react';
import {useSelector , useDispatch} from 'react-redux'
import { increment , decrement } from '../context/counterSlice';



export default function About(){

    const grappedCounter = useSelector(state => {return state.counter.value} )

    const dispatcher = useDispatch()
    return(
        <>
            <h1>About</h1>

            <button onClick={() => { dispatcher(increment())  } }> + </button>
            <p>Counter : {grappedCounter}</p>
            <button onClick={() => { dispatcher(decrement())  } }> - </button>
        </>
    )
}