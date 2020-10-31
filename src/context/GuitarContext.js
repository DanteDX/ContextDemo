import React,{createContext,useState} from 'react';

export const GuitarContext = createContext(); // context


//contextProvider
const GuitarContextProvider = (props) => {
    //datas to pass
    const [guitarData,setGuitarData] = useState([
        {id:1,title:'Ovason'},
        {id:2,title:'Electrical'},
        {id:3,title:'Acoustic'},
        {id:4,title:'ukulele'}
    ]);
    const dummyGuitarFunction = () =>{
        console.log('this is a dummy guitar function');
    }
    //datas to pass ends here
    return (
        <GuitarContext.Provider value={{guitarData:guitarData,dummyGuitarFunction:dummyGuitarFunction}}>
            {props.children}
        </GuitarContext.Provider>
    )
}

export default GuitarContextProvider;
