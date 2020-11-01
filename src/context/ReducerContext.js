import React,{createContext,useReducer} from 'react';
import {TestReducer} from '../reducer/TestReducer';

export const ReducerContext = createContext();

const ReducerContextProvider = (props) =>{

    const [test,dispatch] = useReducer(TestReducer,[1,1,1,1,1,1,1]);
    const blaFunction = () => console.log('Bla function');

    return(
        <ReducerContext.Provider value={{test,dispatch,blaFunction}}>
            {props.children}
        </ReducerContext.Provider>
    )
}

export default ReducerContextProvider;