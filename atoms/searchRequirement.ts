import { atom } from "recoil";
import { AtomKeys } from "../constants/atomKeys";
import { SearchRequirement } from "../interfaces/searchRequirement";

export const searchRequirementState = atom<SearchRequirement>({
  key: AtomKeys.searchRequirementState,
  default: {
    field: null,
  },
});
