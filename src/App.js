import React from "react";
import DummyComponent from "./components/DummyConponent";
import AnotherComponent from "./components/AnotherComponent";
import BookContextProvider from "./context/BookContext";
import GuitarContextProvider from "./context/GuitarContext";

function App() {
  return (
    <div className="App">
      <GuitarContextProvider>
        <BookContextProvider>
          <DummyComponent />
          <AnotherComponent />
        </BookContextProvider>
      </GuitarContextProvider>
    </div>
  );
}

export default App;
