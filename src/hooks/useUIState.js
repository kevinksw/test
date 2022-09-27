import { useReducer } from "react";
import uiStateReducer from "../reducers/uiState";
const initialState = {
  sort: {
    field: "name",
    order: "asc"
  },
  contactList: []
};
export const useUIState = () => {
  const [uiState, dispatch] = useReducer(uiStateReducer, initialState);
  return [uiState, dispatch];
};

export default useUIState;
