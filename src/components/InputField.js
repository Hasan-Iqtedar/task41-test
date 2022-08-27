import { useContext } from "react";
import { GlobalContext } from "../context/FieldContext";
import "../styles/inputField.css";

const InputField = (props) => {
  const { updateField } = useContext(GlobalContext);

  const updateTextField = (e) => {
    updateField({ id: props.fieldId, text: e.target.value });
  };

  return (
    <>
      <input type="text" placeholder="Enter text" onChange={updateTextField} />
    </>
  );
};

export default InputField;
