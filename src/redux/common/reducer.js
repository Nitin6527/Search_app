import { searchItem } from "./types";

// initial state
const initialCommonState = {
  search: "",
};

// Common Reducer function
const commonReducer = (state = { ...initialCommonState }, action) => {
  switch (action.type) {
    case searchItem:
      return {
        ...state,
        search: action.data,
      };
    default:
      return state;
  }
};

export default commonReducer;
