import { useContext } from "react";
import InputField from "./components/InputField";
import { GlobalContext } from "./context/FieldContext";
import "./styles/app.css";

function App() {
  const { fields, addField } = useContext(GlobalContext);
  // const [fields, setFields] = useState([
  //   { id: 0, text: "" },
  //   { id: 1, text: "" },
  // ]);

  // const addField = () => {
  //   const updatedFields = [...fields, { id: fields.length, text: "" }];
  //   setFields(updatedFields);
  // };

  const logData = () => {
    console.log(fields);
  };

  return (
    <div className="app">
      {fields.map((field) => {
        return <InputField key={field.id} fieldId={field.id} />;
      })}
      <button className="add-btn" onClick={addField}>
        Add Text Field
      </button>
      <button className="add-btn" onClick={logData}>
        Log Data
      </button>
    </div>
  );
}

export default App;
