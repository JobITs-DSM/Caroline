import { atom } from "recoil";
import { AtomKeys } from "../constants/atomKeys";
import { CompanyInforForApply } from "../interfaces/company";

export const companyInforState = atom<CompanyInforForApply>({
  key: AtomKeys.companyInforState,
  default: {
    hiring_id: 0,
    registration_number: "",
  },
});
