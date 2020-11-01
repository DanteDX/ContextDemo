import React from "react";
// components
import DummyComponent from "./components/DummyConponent";
import AnotherComponent from "./components/AnotherComponent";
import ReducerTesting from "./components/ReducerTesting";
import ReducerTestingTwo from "./components/ReducerTestingTwo";
//context providers
import BookContextProvider from "./context/BookContext";
import GuitarContextProvider from "./context/GuitarContext";
import ReducerContextProvider from "./context/ReducerContext";

function App() {
  return (
    <div className="App">

      <GuitarContextProvider>
        <BookContextProvider>
          <DummyComponent />
          <AnotherComponent />
        </BookContextProvider>
      </GuitarContextProvider>

      <ReducerContextProvider>
        <ReducerTesting/>
        <ReducerTestingTwo/>
      </ReducerContextProvider>
      
    </div>
  );
}

export default App;
