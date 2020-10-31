import React,{createContext,useState} from 'react';

export const BookContext = createContext(); // context


//contextProvider
const BookContextProvider = (props) => {
    //datas to pass
    const [bookData,setBookData] = useState([
        {id:1,title:'C Programming'},
        {id:2,title:'java programming'},
        {id:3,title:'algorithms in JS'}
    ]);
    const dummyFunction = () =>{
        console.log('this is a dummy function');
    }
    //datas to pass ends here
    return (
        <BookContext.Provider value={{bookData:bookData,dummyFunction:dummyFunction}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
