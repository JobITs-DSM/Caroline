import s from "./companyParticular.module.css";
import { FC } from "react";
import Review from "./Review";

interface Props {}

const ReviewContainer: FC = () => {
  return (
    <div className={s.review_wrap}>
      <h1>면접 후기</h1>
      <div className={s.review_list}>
        <Review />
        <Review />
      </div>
      <h1>실습 후기</h1>
      <div className={s.review_list}>
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default ReviewContainer;
