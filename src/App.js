import { useState } from "react";
import InputField from "./components/InputField";
import "./styles/app.css";

function App() {
  const [fields, setFields] = useState([
    { id: 0, text: "" },
    { id: 1, text: "" },
  ]);

  const addField = () => {
    const updatedFields = [...fields, { id: fields.length, text: "" }];
    setFields(updatedFields);
  };

  return (
    <div className="app">
      {fields.map((field) => {
        return <InputField />;
      })}
      <button className="add-btn" onClick={addField}>
        Add Text Field
      </button>
    </div>
  );
}

export default App;
