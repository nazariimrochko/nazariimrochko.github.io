import React from "react";
import './App.css';
import BoxName from "./components/SectionLeft/BoxName/BoxName";

const App = (props) => {
  return (
        <div className = "container">
            <BoxName store={props.store.nazarMrochko.general}/>
        </div>
  );
}

export default App;

