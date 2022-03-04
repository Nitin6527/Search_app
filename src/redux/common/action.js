import { searchItem } from "./types";

export const searchItemAction = (data) => ({
  type: searchItem,
  data,
});
