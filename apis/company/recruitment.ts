import request from "..";
import { FieldKey } from "../../interfaces/requirements";
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
  getRecuruitmentCompanyDetail({ company_id }: { company_id: string }) {
    return request.get(`${BASE_URI}/${company_id}`);
  },
  getSimilarCompanyList({ hiringCode }: { hiringCode: FieldKey }) {
    return request.get(
      `${BASE_URI}/similar?hiringCodes=${hiringCode}&region=1`
    );
  },
  getCompanyReview({ regist_num }: { regist_num: string }) {
    return request.get(`${BASE_URI}/`);
  },
};
