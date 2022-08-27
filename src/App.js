import { useState } from "react";
import InputField from "./components/InputField";
import "./styles/app.css";

function App() {
  const [fields, setfields] = useState([
    { id: 0, text: "" },
    { id: 1, text: "" },
  ]);

  return (
    <div className="app">
      {fields.map((field) => {
        return <InputField />;
      })}
    </div>
  );
}

export default App;
