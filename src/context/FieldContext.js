import { createContext, useReducer } from "react";
import fieldsReducer from "./fieldReducer";

const initialState = {
  currentId: 1,
  fields: [
    {
      id: 0,
      text: "",
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(fieldsReducer, initialState);

  //Actions.
  const addField = () => {
    dispatch({
      type: "ADD_Field",
    });
  };

  const updateField = (field) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: field,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ fields: state.fields, addField, updateField }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
