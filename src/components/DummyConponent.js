import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const DummyConponent = () => {
  const { bookData, dummyFunction } = useContext(BookContext);
  console.log(bookData);
  dummyFunction();
  const bookDataList = bookData.map((eachBook) => {
    return <li key={eachBook.id}>{eachBook.title}</li>;
  });

  return (
    <div>
      <p>This is from DummyConponent</p>
      <ul>{bookDataList}</ul>
    </div>
  );
};

export default DummyConponent;
