import React,{useContext} from 'react'
import {ReducerContext} from '../context/ReducerContext';


const ReducerTesting = () => {
    const {test,dispatch} = useContext(ReducerContext);

    const addData = () =>{
        let randomNumber = Math.floor(Math.random() * 10);//10
        console.log(randomNumber);
        dispatch({
            type:'ADD_DATA',
            payload:randomNumber
        })
    }
    const logData = () =>{
        console.log(test);
    }
    return (
        <div>
            <button onClick={e => addData()}>ADD_DATA</button>
            <button onClick={e => logData()}>Console log Test State</button>
        </div>
    )
}

export default ReducerTesting;
