import { useState } from "react";
import "../styles/inputField.css";

const InputField = (props) => {
  const [text, setText] = useState("");

  const updateTextField = (e) => setText(e.target.value);

  return (
    <>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={updateTextField}
      />
    </>
  );
};

export default InputField;
