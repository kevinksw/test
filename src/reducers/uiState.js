import { ADD_ENTRY, SORT_ENTRIES } from "../constants/actionTypes";

const uiStateReducer = (state, action) => {
  const currentSortOrder = state.sort;

  const sortComparator = (sortOrder, field) => (a, b) => {
    if (sortOrder === "desc") {
      return a[field] > b[field] ? -1 : 1;
    } else {
      return a[field] < b[field] ? -1 : 1;
    }
  };

  switch (action.type) {
    case ADD_ENTRY:
      return {
        ...state,
        contactList: state.contactList
          .concat([action.payload])
          .sort(sortComparator(state.sort.order, state.sort.field))
      };
    case SORT_ENTRIES:
      console.log(currentSortOrder);
      const newSortOrder =
        currentSortOrder.field === action.payload.field &&
        currentSortOrder.order === "asc"
          ? "desc"
          : "asc";

      return {
        sort: {
          field: action.payload.field,
          order: newSortOrder
        },
        contactList: state.contactList.sort(
          sortComparator(newSortOrder, action.payload.field)
        )
      };
    default:
      throw new Error(`Action type not recognized: ${action.type}`);
  }
};

export default uiStateReducer;
