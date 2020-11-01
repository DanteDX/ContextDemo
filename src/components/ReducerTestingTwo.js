import React,{useContext} from 'react'
import {ReducerContext} from '../context/ReducerContext';


const ReducerTestingTwo = () => {
    const {test,dispatch,blaFunction} = useContext(ReducerContext);

    const filterData = (number) =>{
        blaFunction();
        dispatch({
            type:'FILTER_DATA',
            payload:number
        })
    }
    const logData = () =>{
        console.log(test);
    }
    const manualPushData = (num) =>{
        test.push(num);
    }
    return (
        <div>
            <p>This is from 2nd component</p>
            <button onClick={e => filterData(1)}>FILTER_DATA</button>
            <button onClick={e => logData()}>Console log Test State</button>
            <button onClick={e => manualPushData(10)}>Manually Push Data</button>
        </div>
    )
}

export default ReducerTestingTwo;
