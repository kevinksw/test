import {
  ADD_ENTRY,
  EDIT_ENTRY,
  DELETE_ENTRY,
  SORT_ENTRIES
} from "../constants/actionTypes";

export const addEntry = (entry) => ({
  type: ADD_ENTRY,
  payload: entry
});

export const editEntry = (entry, index) => ({
  type: EDIT_ENTRY,
  payload: {
    entry,
    index
  }
});

export const deleteEntry = (index) => ({
  type: DELETE_ENTRY,
  payload: index
});

export const sortEntries = (field) => ({
  type: SORT_ENTRIES,
  payload: {
    field
  }
});
