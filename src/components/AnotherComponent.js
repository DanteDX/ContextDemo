import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import {GuitarContext} from "../context/GuitarContext";

const AnotherComponent = () => {
  const { bookData, dummyFunction } = useContext(BookContext);
  const {guitarData,dummyGuitarFunction} = useContext(GuitarContext);
  dummyFunction();
  dummyGuitarFunction();
  const bookDataList = bookData.map((eachBook) => {
    return <li key={eachBook.id}>{eachBook.title}</li>;
  });

  const guitarDataList = guitarData.map((eachGuitar) => {
    return <li key={eachGuitar.id}>{eachGuitar.title}</li>;
  });

  return (
    <div>
      <p>This is from AnotherConponent</p>
      <ul>{bookDataList}</ul>
      <ul>{guitarDataList}</ul>
    </div>
  );
};

export default AnotherComponent;
