import React, { useContext,useState } from "react";
import { BookContext } from "../context/BookContext";

const DummyConponent = () => {
  const { bookData, dummyFunction } = useContext(BookContext);
  console.log(bookData);
  dummyFunction();
  const bookDataList = bookData.map((eachBook) => {
    return <li key={eachBook.id}>{eachBook.title}</li>;
  });

  //context data
  const color1 = 'red';
  const color2 = 'purple';

  const toggleColor = (e) =>{
    if(e.target.style.color === color1){
      e.target.style.color = color2
    }else{
      e.target.style.color = color1
    }
  }

  return (
    <div>
      <p style={{color:'red',fontSize:30}} onClick={e => toggleColor(e)}>This is from DummyConponent</p>

      <ul>{bookDataList}</ul>
    </div>
  );
};

export default DummyConponent;
