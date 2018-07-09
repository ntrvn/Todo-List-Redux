import React from "react";
import List from "./list";
import Form from "./form";
import "../css/app.css";
const App = () => {
  return (
    <div className="container app">
      <div className="form-inline centerDiv">
        <h3>To Do List:</h3>
        <Form />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
};

export default App;
