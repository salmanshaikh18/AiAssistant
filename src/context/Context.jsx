import { createContext } from "react";
import run from "../config/api";

export const Context = createContext();

const ContextProvider = (props) => {

    const onSent = async (prompt) => {
        await run(prompt)
    }

    onSent("what is reactjs")

  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider