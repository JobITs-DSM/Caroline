import s from "./companyParticular.module.css";
import { FC, useEffect, useState } from "react";
import Review from "./Review";
import review from "../../apis/company/review";
import { CompanyReviews } from "../../interfaces/company";

interface Props {
  regist_num: string;
}

const ReviewContainer: FC<Props> = ({ regist_num }) => {
  const [data, setData] = useState<CompanyReviews>({
    interview_review_list: [],
    training_review_list: [],
  });
  useEffect(() => {
    review.getCompanyReview({ regist_num: regist_num }).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className={s.review_wrap}>
      <h1>면접 후기</h1>
      <div className={s.review_list}>
        {data.interview_review_list.map((_, index) => (
          <Review key={index} review={_} />
        ))}
      </div>
      <h1>실습 후기</h1>
      <div className={s.review_list}>
        {data.training_review_list.map((_, index) => (
          <Review key={index} review={_} />
        ))}
      </div>
    </div>
  );
};

export default ReviewContainer;
