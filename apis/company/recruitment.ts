import request from "..";
import { SearchRequirement } from "../../interfaces/searchRequirement";

const BASE_URI = "/recruitment";

export default {
  getCurrentRecruitmentCompanyList({ sort, field }: SearchRequirement) {
    return request.get(`${BASE_URI}/current`, {
      params: {
        tags: 1,
        region: 1,
        sort: sort,
        hiringCodes: field,
      },
    });
  },
  getRecuruitmentCompanyDetail({ company_id }: { company_id: number }) {
    return request.get(`${BASE_URI}/${company_id}`);
  },
};
