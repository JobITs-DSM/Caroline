import request from "..";
import { TEST_TOKEN } from "../../constants/api";
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
      headers: {
        Authorization: `Bearer ${TEST_TOKEN}`,
      },
    });
  },
};
