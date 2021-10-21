import s from "./companyParticular.module.css";
import { FC } from "react";
import Review from "./Review";

const CompanyParticular: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.grid_wrapper}>
        <img
          className={s.cover_img}
          src="https://jpassets.jobplanet.co.kr/production/uploads/company_story/contents/2020/10/07/2a39a34e-7386-46a3-8111-7607618385fd.jpg"
        />
        <div className={s.item2}></div>
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
      </div>
    </div>
  );
};

export default CompanyParticular;
