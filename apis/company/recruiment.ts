import request from "../";
import { TEST_TOKEN } from "../../constants/api";

const BASE_URI = "/recruitment";

export default {
  getCurrentRecruitmentCompanyList() {
    return request.get(`${BASE_URI}/current`, {
      params: {
        tags: 1,
        region: 1,
        sort: "LATEST",
        hiringCodes: null,
      },
      headers: {
        Authorization: `Bearer ${TEST_TOKEN}`,
      },
    });
  },
};
