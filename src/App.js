import "./css/main.css";

import { Routes, Route } from "react-router-dom";

import ListView from "./components/ListView";
import InputForm from "./components/InputForm";
import useUIState from "./hooks/useUIState";
import { useCallback } from "react";
import { addEntry, sortEntries } from "./actions";

export default function App() {
  const [uiState, dispatchAction] = useUIState();

  const addContact = useCallback(
    (contact) => {
      dispatchAction(addEntry(contact));
    },
    [dispatchAction]
  );

  const sortContact = useCallback(
    (field) => {
      console.log(field);
      dispatchAction(sortEntries(field));
    },
    [dispatchAction]
  );

  console.log(uiState);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ListView
            contactList={uiState?.contactList}
            sortContact={sortContact}
            sort={uiState.sort}
          />
        }
      />
      <Route path="/add" element={<InputForm addContact={addContact} />} />
    </Routes>
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
  );
}
