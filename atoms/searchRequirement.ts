import { atom } from "recoil";
import { AtomKeys } from "../constants/atomKeys";
import { fields, SortOptions } from "../constants/requirementArrays";
import { SearchRequirement } from "../interfaces/searchRequirement";

export const searchRequirementState = atom<SearchRequirement>({
  key: AtomKeys.searchRequirementState,
  default: {
    field: fields[0].key,
    sort: SortOptions[0].key,
  },
});
