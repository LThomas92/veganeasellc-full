import { UPDATE_COLLECTIONS } from "./types";

export const updateCollections = collectionsMap => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap
});
