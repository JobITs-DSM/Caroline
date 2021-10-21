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
        <div className={s.company_info}>
          <div className={s.company_main_info}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQnTKaRXoOCdv-pDk7OYHx3C_jcfIVUTCWlr3T-oUbdMsJAkTGOE6zCofHYC-7mnDsiuA&usqp=CAU"
              alt=""
            />
            <div>
              <h1>프론트엔드</h1>
              <h3>
                배달의 민족 <span>서울</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyParticular;
