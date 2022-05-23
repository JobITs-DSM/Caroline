import request from "..";

const BASE_URI = "/review";

export default {
  getCompanyReview({ regist_num }: { regist_num: string }) {
    return request.get(`${BASE_URI}/${regist_num}`);
  },
};
